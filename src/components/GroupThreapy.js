import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const GroupThreapy = () => {
  return (
    <div>
      <div><img src={require('./images/grouptherapyTop.png')} className='w-full'></img></div>
      <div className='ms-20 me-20'>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='text-3xl text-cyan-700 font-semibold mt-4'>Group Therapy</div>
            <div className='w-[381px]'>
              <div className='text-2xl text-cyan-700 mt-20'>Current Groups</div>
              <div className='mt-4'>Adipiscing nisl auctor mattis sit      at integer odio risus ridiculus. </div>
              <button onClick={'#'}><FontAwesomeIcon icon={faCircleArrowLeft} style={{ color: "#4db3cb", }} className='h-[37.5px] mt-8' /></button>
              <button onClick={'#'}><FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "#4db3cb", }} className='h-[37.5px] ml-[30px]' /></button>
            </div>
          </div>




          <div className='w-2/3'>
            <div className=' bg-sky-200 w-[40vw] h-20 mt-16'></div>
            <div className='flex mt-[-5rem]'>
              <img src={require('./images/Anxiety.png')} className='me-[2vw] ms-[5vw]'></img>

              <img src={require('./images/Lonliness.png')}></img>
            </div>
          </div>
        </div>
        <div className='mt-64 mb-64'>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={-20}
            slidesPerView={3}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide className="w-fit">
              <div className='bg-cyan-300 h-[483px] p-[37px] w-full flex justify-center align-middle rounded-[4px]'>
                <h1 className="text-[28px] text-center m-auto">How could group Therapy will help you</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-fit">
              <div className='bg-cyan-300 h-[483px] p-[37px] w-full flex justify-center align-middle rounded-[4px]'>
                <h1 className="text-[28px] text-center m-auto">Group Therapy</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-fit">
              <div className='bg-cyan-300 h-[483px] p-[37px] w-full flex justify-center align-middle rounded-[4px]'>
                <h1 className="text-[28px] text-center m-auto">What is group therapy</h1>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
        <div className='flex justify-center text-cyan-700 text-3xl font-semibold mb-12 mt-20'>Upcoming Groups</div>
        <div className='flex me-24 ms-96 mb-36'>
          <div className='w-1/5 ms-28'>
            <div className='bg-blue-400 h-[24vh] w-[12vw] rounded-md mt-4'></div>
            <div className=' h-[12vw] mt-12 rounded-md bg-black me-[2vw] ' onClick={"#"}>
              <img src={require('./images/behaviour.png')}></img>
              <h1 className='text-white text-3xl  z-1 translate-x-[7vh] translate-y-[-18vh]'>Behavior</h1>
            </div>
          </div>
          <div className='w-1/5 ms-4'>
            <div className='rounded-md bg-black' onClick={"#"}><img src={require('./images/familycouncelling.png')}></img>
              <h1 className='text-white text-2xl absolute z-1 translate-x-[5vh] translate-y-[-19vh] '>Family Counceling</h1>
            </div>
            <div className='bg-blue-400 h-[26vh] w-[32vh] mt-8 rounded-md'></div>
          </div>
          <div className='w-1/3 ms-16'>
            <div className='bg-cyan-200 h-[20vh] w-[10vw] rounded-md'></div>
            <div className='bg-black me-[11vw] mt-12 rounded-md' ><img src={require('./images/insomnia.png')} ></img>
              <h1 className='text-white text-3xl absolute z-1 translate-x-[7vh] translate-y-[-16vh] '>Insomania</h1></div>
          </div>
        </div>
    </div>
  )
}

export default GroupThreapy
