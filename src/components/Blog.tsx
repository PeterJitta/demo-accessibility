import React from 'react'
import P from './accessbility/P'
import { ChildFeature } from './ChildFeature'
import DIV from './accessbility/DIV'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { content } from '../utils/const'

const Blog = () => {
    return (
        <DIV htmlElement="aside" id="blog" style="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium !leading-[3rem]  text-center text-gray-900 mb-5">
                    ติดตามบทความ สาระน่ารู้ ข่าวหุ้น กิจกรรม <br /> และเทรนด์การลงทุนทั่วโลกที่น่าสนใจ
                </P>
                <div className="container px-5 py-2 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <BlogCard
                            title="บทสรุปปี 2023 เกิดอะไรบ้างในโลกการลงทุน"
                            body="เดินทางฝ่าฟันจนถึงวันสิ้นปีแล้ว 2023 ถือเป็นอีกปีที่มีหลากหลายเรื่องราว มากมายด้วยสีสัน ให้จดจำตั้งแต่ร้ายไปจนดี เพราะโลกแห่งการลงทุนนี้ไม่เคยจะหยุดหมุน และนับวันก็ยิ่งหมุนเร็วมากขึ้นกว่าเดิม "
                            link='/blog/1'
                            />
                        <BlogCard
                            title={`ขั้นตอนการเปิดบัญชี และลงทุนกับ ${content.company}`}
                            body="รวบรวมสิ่งที่ต้องเตรียมสำหรับคนอยากเปิดบัญชีซื้อขายหุ้น ทั้งเรื่องเงินลงทุน เอกสารประกอบการเปิดบัญชี และการศึกษาข้อมูลเพื่อเลือกโบรกเกอร์"
                            link='/blog/2'
                            // TODO: Need Real Content https://support.finnomena.com/s/article/oa
                            />
                        <BlogCard
                            title="ฟิลิปปินส์และสหรัฐฯ กระชับความเป็นพันธมิตรด้วยแนวทางการป้องกันประเทศใหม่"
                            body="ฟิลิปปินส์และสหรัฐอเมริกาบรรลุแนวทางการป้องกันประเทศระดับทวิภาคีในระหว่างการเดินทางเยือนกรุงวอชิงตัน ดี.ซี. ของนายเฟอร์ดินานด์ มาร์กอส จูเนียร์ ประธานาธิบดีฟิลิปปินส์ ในเดือนพฤษภาคม พ.ศ. 2566"
                            link='/blog/3'
                            // https://www.lawforasean.krisdika.go.th/Content/View?Id=317&Type=1
                            />
                        <BlogCard
                            title="เริ่มต้นชีวิตคู่ พร้อมเปิดประตูการลงทุนหุ้นต่างประเทศ"
                            body="หากการแต่งงานไม่เพียงเป็นจุดเริ่มต้นชีวิตคู่ แต่ยังเป็นจุดเริ่มต้นการสร้างความมั่งคั่งให้ครอบครัว คุณคิดว่าชีวิตคู่ที่มีองค์ประกอบด้วยความรักและความมั่งคั่งจะยั่งยืนเพียงใด"
                            link='/blog/4'
                        />

                    </div>
                </div>
            </div>
        </DIV>
    )
}

export default Blog