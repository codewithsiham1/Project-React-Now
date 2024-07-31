import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Home/swiper.css';

import SR from "../../../public/SR.png"
import SR1 from "../../../public/SR1.png"
import Ratul from "../../../public/Ratul.jpg"





// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <>
            <div className='h-[30rem]'>

            <div>
                    <h5 className="text-green-500 mt-8 font-bold text-center ml-28">TESTIMONIALS</h5>
                    <p className="font-bold lg:text-5xl text-3xl text-center mt-2 mb-4  ml-28">Happy Customers!</p>
            </div>


                <div>
                     <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={15}
                pagination={{
                    type: 'fraction',
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>   <div className=' bg-slate-200 h-[12rem] w-[25rem] flex flex-col justify-center rounded-md'>
                    <div className='flex gap-2 mb-2'>
                        <div>
                            <img src={SR} alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h5 className='font-bold text-2xl text-teal-500'>Kate Nicole</h5>
                            <p className='text-sm'>UI UX Designer at Adobe</p>

                        </div>
                    </div>
                    <div className='text-center text-sm leading-tight'>
                        <p>Adipiscing duis eget elit accumsan neque. Pretium quis quis cursus sed pellentesque risus tortor. Nunc lacus quam ut adipiscing quis tempus sem molestie sagittis. Lacus ut in sed varius amet, sed nunc fringilla integer.</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className=' bg-slate-200 h-[12rem] w-[25rem] flex flex-col justify-center rounded-md'>
                    <div className='flex gap-2 mb-2'>
                        <div>
                            <img src={Ratul} alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h5 className='font-bold text-2xl text-teal-500'>Nahanur Islam</h5>
                            <p className='text-sm'>Software Engineer at Google </p>

                        </div>
                    </div>
                    <div className='text-center text-sm leading-tight'>
                        <p>It sounds like you're working on a MERN (MongoDB, Express.js, React, Node.js) stack project and have encountered some issues. Could you provide more details about the specific problem you're facing...</p>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide><div className=' bg-slate-200 h-[12rem] w-[25rem] flex flex-col justify-center rounded-md'>
                    <div className='flex gap-2 mb-2'>
                        <div>
                            <img src={SR1} alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h5 className='font-bold text-2xl text-teal-500'>Fichal kit</h5>
                            <p className='text-sm '>Programmer</p>

                        </div>
                    </div>
                    <div className='text-center text-sm leading-tight'>
                        <p>Adipiscing duis eget elit accumsan neque. Pretium quis quis cursus sed pellentesque risus tortor. Nunc lacus quam ut adipiscing quis tempus sem molestie sagittis. Lacus ut in sed varius amet, sed nunc fringilla integer.</p>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className=' bg-slate-200 h-[12rem] w-[25rem] flex flex-col justify-center rounded-md'>
                    <div className='flex gap-2 mb-2'>
                        <div>
                            <img src={SR} alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h5 className='font-bold text-2xl text-teal-500'>Namrita Kaur</h5>
                            <p className='text-sm'>Entrepreneur </p>

                        </div>
                    </div>
                    <div className='text-center text-sm leading-tight'>
                        <p>Adipiscing duis eget elit accumsan neque. Pretium quis quis cursus sed pellentesque risus tortor. Nunc lacus quam ut adipiscing quis tempus sem molestie sagittis. Lacus ut in sed varius amet, sed nunc fringilla integer.</p>
                    </div>
                </div></SwiperSlide>
              
                </Swiper>
           </div>
            </div>


        </>
    );
}
