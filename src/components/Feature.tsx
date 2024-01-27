import React from 'react'
import P from './accessbility/P'
import DIV from './accessbility/DIV'
import { content } from '../utils/const'
import { ChildFeature } from './ChildFeature'

const Feature = () => {
    return (
        <DIV htmlElement="aside" id="feature" style="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto">
                <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                    ฝากฝังเรื่องลงทุนให้เทคโนโลยีของเราช่วยดูแล
                </P>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <ChildFeature
                        title='ลงทุนตามหลักการ ที่เป็นที่ยอมรับทั่วโลก'
                        description='ไม่ว่าจะเป็นแนวทางของ Warren Buffett หรือทฤษฎีรางวัลโนเบล เทคโนโลยีของเรา จะสร้างผลตอบแทนที่ดีให้คุณตามหลักการ ที่ผ่านการพิสูจน์มาอย่างยาวนาน'
                    />
                    <ChildFeature
                        title='จ่ายค่าธรรมเนียมต่ำ กำไรเพิ่มพูน'
                        description={`${content.company} เรียกเก็บค่าธรรมเนียมบริหาร จัดการเพียงเล็กน้อยและยึดมั่นในกลยุทธ์ ลงทุนแบบ Passive ที่มีค่าใช้จ่ายต่ำกว่า เพื่อกำไรที่เพิ่มขึ้นของคุณ`}
                    />
                    <ChildFeature
                        title='ปรับพอร์ตอัตโนมัติ ขจัดความวุ่นวาย'
                        description='เทคโนโลยีอัตโนมัติ (Automation) จัดการให้หมดตั้งแต่จัดพอร์ต โอนเงินไปต่างประเทศ ซื้อขาย ปรับพอร์ต และคอยรักษาสัดส่วนพอร์ตที่เหมาะสม'
                    />
                </div>
            </div>
        </DIV >
    )
}

export default Feature