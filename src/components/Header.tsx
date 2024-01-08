import Link from "next/link";
import { useRouter } from "next/router";
import queryString from "query-string";
import React, { useState } from "react";
import DIV from "./accessbility/DIV";
import SVG from "./accessbility/SVG";

const Header = () => {
  const router = useRouter();
  const [toggleNav, setToggleNav] = useState(false);
  const { skipLink, all } = router.query
  const query = queryString.stringify(router.query)

  return (
    <DIV htmlElement="header" style="container mx-auto max-w-[1240px]">
      {skipLink || all && (
        <a href="#main" tabIndex={0} className="skip-to-content-link">
          Skip to main content
        </a>
      )}

      <nav
        className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-4
         px-4
         text-lg text-gray-700
         bg-white
       "
      >
        <div>
          <Link href={`/${!!query.length ? `?${query}` : ""}`}>
            <SVG width="40" height="40" title="Back to Home page">
              <svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#00d1b2"></path><path fillRule="evenodd" clipRule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#00d1b2"></path></svg>
            </SVG>
          </Link>
        </div>

        <button type="button" onClick={() => setToggleNav((prev) => !prev)} className="h-6 w-6 cursor-pointer md:hidden block">
          <SVG width="24" height="24" title="Nav Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SVG>
        </button>

        <div
          className={`${toggleNav ? "max-h-95 opacity-100" : "max-h-px opacity-0"} absolute top-[64px] z-10 left-0 md:static md:opacity-100 md:max-h-fit duration-200 transition-all w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul
            className="
            p-4
            bg-white
            md:px-0
            text-base text-gray-700
            md:flex
            md:justify-between 
            md:pt-0
            md:pb-0
            "

          >
            <li>
              <a
                onClick={() => setToggleNav(false)} className="md:p-4 py-2 block hover:text-primary" href="/#feature">
                Features
              </a>
            </li>
            <li>
              <Link legacyBehavior href={`/blog${!!query.length ? `?${query}` : ""}`}>
                <a
                  onClick={() => setToggleNav(false)} className="md:p-4 py-2 block hover:text-primary">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </DIV>
  );
};

export default Header;
