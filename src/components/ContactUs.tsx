import React, { LegacyRef, RefObject, useEffect, useRef, useState } from 'react'
import P from './accessbility/P'
import DIV from './accessbility/DIV'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { content } from '../utils/const';
import { useRouter } from 'next/router';
import INPUT from './accessbility/INPUT';

const ContactUs = () => {
    const router = useRouter();
    const { level } = router.query;
    const isLevelThree = level === "3";
    const [modal, setModal] = useState(false);
    const modalRef = useRef<any>(undefined);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            referal: "",
            acceptCondition: false
        },
        onSubmit: () => {
            setModal(true);
        },
        validationSchema:
            Yup.object().shape({
                firstName: Yup.string().required("กรุณากรอกชื่อ"),
                lastName: Yup.string().required("กรุณากรอกนามสกุล"),
                email: Yup.string().email().required("กรุณากรอกอีเมล"),
                referal: Yup.string().optional(),
                acceptCondition: Yup.boolean().oneOf([true], "กรุณายอมรับเงื่อนไขการใช้งาน และนโยบายความเป็นส่วนตัว").required(),
            }).required()
    })

    useEffect(() => {
        if (modal) {
            modalRef.current.focus();
        }
    }, [modal])

    return (
        <>
            {modal && (
                <dialog
                    id="modal"
                    ref={modalRef}
                    aria-modal="true"
                    tabIndex={-1}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-instructions"
                    role="dialog"
                    className={`${modal ? "flex" : "hidden"} fixed inset-0 bg-gray-500 bg-opacity-75 top-0 left-0 w-screen h-screen z-10 overflow-hidden items-center justify-center`} open={modal ? true : undefined}>
                    <div role="document" className="bg-white px-6 pt-12 pb-5 mx-auto w-[350px] rounded">
                        <h2 id="dialog-title" className='mb-2 text-center text-2xl'>
                            ส่งข้อมูลใบสมัครเรียบร้อย
                        </h2>
                        <p id="dialog-instructions" className='mb-6 text-center text-gray-500 text-md'>
                            ทางเราจะรีบติดต่อให้เร็วที่สุด
                        </p>
                        <button
                            aria-label="คลิกเพืื่อปิด"
                            className="flex items-center justify-center text-center w-full mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg"
                            type='button'
                            onClick={() => {
                                setModal(false);
                                formik.resetForm();
                            }}>ตกลง</button>
                    </div>
                </dialog>
            )}
            <DIV htmlElement="section" id="contact-us" label='ติดต่อเรา' style="text-gray-600 body-font relative">

                <div className="max-w-[950px] px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium  mb-4 text-gray-900">กรอกข้อมูลเพื่อลงทุนกับเรา</P>
                        <P defaultElement='p' style="lg:w-2/3 mx-auto leading-relaxed text-base">ทีมงาน {content.company} พร้อมช่วยคุณบรรลุทุกเป้าหมายด้านการลงทุน</P>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">ชื่อ <span className='text-red-500'>*</span></label>
                                    <INPUT requiredField onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} type="text" id="firstName" name="firstName"
                                        className={`${formik.touched.firstName && formik.errors.firstName ? "border border-red-500" : "border border-gray-300"} w-full bg-gray-100 bg-opacity-50 rounded focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                                </div>
                                {isLevelThree && formik.touched.firstName && formik.errors.firstName && (
                                    <span role="alert" className='text-red-500'>{formik.errors.firstName}</span>
                                )}
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">นามสกุล <span className='text-red-500'>*</span></label>
                                    <INPUT requiredField onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} type="text" id="lastName" name="lastName"
                                        className={`${formik.touched.lastName && formik.errors.lastName ? "border border-red-500" : "border border-gray-300"} w-full bg-gray-100 bg-opacity-50 rounded focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                                </div>
                                {isLevelThree && formik.touched.lastName && formik.errors.lastName && (
                                    <span role="alert" className='text-red-500'>{formik.errors.lastName}</span>
                                )}
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">อีเมล <span className='text-red-500'>*</span></label>
                                    <INPUT requiredField onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="email" id="email" name="email"
                                        className={`${formik.touched.email && formik.errors.email ? "border border-red-500" : "border border-gray-300"} w-full bg-gray-100 bg-opacity-50 rounded focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                                </div>
                                {isLevelThree && formik.touched.email && formik.errors.email && (
                                    <span role="alert" className='text-red-500'>{formik.errors.email}</span>
                                )}
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="referal" className="leading-7 text-sm text-gray-600">รหัสผู้แนะนำ</label>
                                    <INPUT onBlur={formik.handleBlur} value={formik.values.referal} onChange={formik.handleChange} type="text" id="referal" name="referal"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                {isLevelThree && formik.touched.referal && formik.errors.referal && (
                                    <span role="alert" className='text-red-500'>{formik.errors.referal}</span>
                                )}
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative flex items-center justify-start gap-1">
                                    <input type='checkbox' onBlur={formik.handleBlur} checked={formik.values.acceptCondition} onChange={formik.handleChange} id="acceptCondition" name="acceptCondition"
                                        className="w-4 h-4" />
                                    <label htmlFor="acceptCondition" className="leading-7 text-sm text-gray-600">
                                        ยอมรับเงื่อนไขการใช้งาน และนโยบายความเป็นส่วนตัว
                                    </label>
                                </div>
                                {isLevelThree && formik.touched.acceptCondition && formik.errors.acceptCondition && (
                                    <span role="alert" className='text-red-500'>{formik.errors.acceptCondition}</span>
                                )}
                            </div>

                            <div className="p-2 w-full">
                                <button type='submit' className="flex items-center justify-center text-center w-full mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg">ส่งข้อมูล</button>
                            </div>
                        </div>
                    </form>
                </div>
            </DIV >
        </>
    )
}

export default ContactUs