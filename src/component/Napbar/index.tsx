import React from 'react'
import BG_Image from '../../assets/baner-canhsatbienvn-2022-ok-134459198.png'

export const narBarItemAll = [
  {
    id: 1,
    title: 'giới thiệu'
  },
  {
    id: 2,
    title: 'hoạt động cảnh sát biển'
  },
  {
    id: 3,
    title: 'tin tức - sự kiện'
  },
  {
    id: 4,
    title: 'quản lý - chỉ đạo'
  },
  {
    id: 5,
    title: 'thông tin - tư liệu'
  },
  {
    id: 6,
    title: 'trợ giúp ngư dân'
  }
]
export default function Napbar() {
  return (
    <div className='w-full bg-white sticky top-0 z-10 '>
      <div className='w-[80%] m-auto max-w-screen-2xl cursor-pointer '>
        <div className='w-full'>
          <img className='w-full' src={BG_Image} alt='' />
        </div>
        <div className='w-full 	 mt-5 max-[1300px]:hidden'>
          <div className='w-full border-slate-300 '>
            <ul className='flex justify-between w-[90%] m-auto'>
              {narBarItemAll.map((item) => (
                <li className='uppercase text-[15px] text-[#182940]	leading-10 flex justify-center hover:text-white hover:bg-[#7f0000] hover:duration-700 '>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
