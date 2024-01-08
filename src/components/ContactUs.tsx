import React, { useState } from 'react'
import P from './accessbility/P'
import DIV from './accessbility/DIV'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit: (values, {resetForm}) => {
            alert("สมัครข้อมูลสำเร็จ")
            resetForm();

        },
        validationSchema:
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                message: Yup.string().required(),
            }).required()
    })

    return (
        <DIV htmlElement="section" id="contact-us" style="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium  mb-4 text-gray-900">ติดต่อเรา</P>
                    <P defaultElement='p' style="lg:w-2/3 mx-auto leading-relaxed text-base">ทีมงาน Meta Wealth พร้อมช่วยคุณบรรลุทุกเป้าหมายด้านการลงทุน</P>
                </div>
                <form onSubmit={formik.handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            {formik.touched.name && formik.errors.name && (
                                <span role="alert" className='text-red-500'>{formik.errors.name}</span>
                            )}
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <span role="alert" className='text-red-500'>{formik.errors.email}</span>
                            )}
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea onBlur={formik.handleBlur} value={formik.values.message} onChange={formik.handleChange} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            {formik.touched.message && formik.errors.message && (
                                <span role="alert" className='text-red-500'>{formik.errors.message}</span>
                            )}
                        </div>

                        <div className="p-2 w-full">
                            <button type='submit' className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg">ส่งข้อมูล</button>
                        </div>
                    </div>
                </form>
            </div>
        </DIV>
    )
}

export default ContactUs