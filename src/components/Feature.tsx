import React from 'react'
import P from './accessbility/P'
import { ChildFeature } from './ChildFeature'
import DIV from './accessbility/DIV'
import Link from 'next/link'
import BlogCard from './BlogCard'

const Feature = () => {
    return (
        <DIV htmlElement="aside" id="feature" style="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium !leading-[3rem]  text-center text-gray-900 mb-5">
                    ติดตามบทความ สาระน่ารู้ ข่าวหุ้น กิจกรรม <br /> และเทรนด์การลงทุนทั่วโลกที่น่าสนใจ
                </P>
                <div className="container px-5 py-2 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <BlogCard
                            title="สหรัฐฯ กลับมารุ่ง Black Friday ขายพุ่งเป็นประวัติการณ์"
                            body="สัญญาณดี กำลังซื้อในสหรัฐฯ มากขึ้น ดันยอดขาย Black Friday พุ่งเป็นประวัติการณ์ จีนยังไม่หยุดกระตุ้นตลาดอสังหาริมทรัพย์ Sam Altman ทวงบัลลังก์ Open AI เงินเฟ้อญี่ปุ่นปรับตัว อาจนำไปสู่การเปลี่ยนนโยบาย ส่งออกไทยโต 8% มีลุ้นเศรษฐกิจโตหรือไม่"
                        />
                        <BlogCard
                            title="ชิป AI แข่งขันเดือด Intel ลงสังเวียนท้าสู้ Nvidia"
                            body="Fed ส่งสัญญาณดี 2567 ต้องเข้าสู่ภาวะปกติ ญี่ปุ่นกระชับสัมพันธ์ ยกเลิกกีดกันการค้าอินโดฯ นายกฯ ไทยคว้าโอกาสทองในสื่อญี่ปุ่น ดึงลงทุน ‘แลนด์บริดจ์’ "
                        />
                        <BlogCard
                            title="คู่มือลงทุน 101 : 16 ก้าว สู่การเป็นมือโปร"
                            body="สำหรับใครที่ต้องการเริ่มต้นออกเดินทางเพื่อเป็นนักลงทุนที่มั่งคั่งและมั่นคง แต่ไม่รู้ว่าจะต้องเริ่มจากตรงไหน หรือใครที่ออกเดินทางไปแล้วแต่ไม่มั่นใจว่ามาถูกทางรึเปล่า"
                        />
                        <BlogCard
                            title="เริ่มต้นชีวิตคู่ พร้อมเปิดประตูการลงทุนหุ้นต่างประเทศ"
                            body="หากการแต่งงานไม่เพียงเป็นจุดเริ่มต้นชีวิตคู่ แต่ยังเป็นจุดเริ่มต้นการสร้างความมั่งคั่งให้ครอบครัว คุณคิดว่าชีวิตคู่ที่มีองค์ประกอบด้วยความรักและความมั่งคั่งจะยั่งยืนเพียงใด"
                        />

                    </div>
                </div>
            </div>
        </DIV>
    )
}

export default Feature