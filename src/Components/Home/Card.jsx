import feature1 from '../../../public/feature1.png'
import feature2 from '../../../public/feature2.png'
import feature3 from '../../../public/feature3.png'
import feature4 from '../../../public/feature4.png'
import feature5 from '../../../public/feature5.png'
import { IoMdStar } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";





const Card = () => {
    return (
        <>
            <div  className='lg:flex flex-col '>
                <p className='text-center  mt-8 lg:text-2xl text-xl'><span className="text-red-500 mt-8 font-bold">BROWSE OUR MENU</span>
                </p>
                <h1 className="lg:text-5xl text-3xl font-bold text-center mt-2 mb-4">
                    Hungry? Order & Eat
                </h1>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                <div className='relative bg-gray-200 rounded-md'>
                    <div>
                        <img  src={feature1} alt="" />
                        <IoIosHeart className='absolute top-10 right-10  text-orange-400 text-3xl' />
                    </div>
                    <div className='lg:flex flex gap-16'>
                        <h5>Sabudana Khichdi</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 150</span></p>
                    </div>
                    <div className='flex gap-24 p-2'>
                        <div className='flex'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div className='relative bg-gray-200 rounded-md'>
                    <div >
                        <img src={feature2} alt="" />
                        <IoIosHeart className='absolute top-10 right-10 text-orange-400 text-3xl' />
                    </div>
                    <div className='lg:flex flex gap-20'>
                        <h5>Veg Noodles</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 170</span></p>
                    </div>
                    <div className='flex gap-24 p-2'>
                        <div className='flex'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div className='relative bg-gray-200 rounded-md'>
                    <div className='relative'>
                        <img src={feature3} alt="" />
                        <IoIosHeart className='absolute top-10 right-10 text-orange-400 text-3xl' />


                    </div>
                    <div className='flex'>
                        <h5>Masala Dosa</h5>
                        <p><span className='text-red-500 font-bold ml-24'>Rs. 120</span></p>
                    </div>
                    <div className='flex gap-20 p-2'>
                        <div className='flex '>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div className='relative bg-gray-200 rounded-md'>
                    <div className='relative'>
                        <img src={feature4} alt="" />
                        <IoIosHeart className='absolute top-10 right-10 text-orange-400 text-3xl' />
                    </div>
                    <div className='flex'>
                        <h5>Fried Momos</h5>
                        <p><span className='text-red-500 font-bold ml-24'>Rs. 80</span></p>
                    </div>
                    <div className='flex gap-36 p-2'>
                        <div className='flex'>
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div className='relative bg-gray-200 rounded-md'>
                    <div className='relative'>
                        <img src={feature5} alt="" />
                        <IoIosHeart className='absolute top-10 right-10 text-orange-400 text-3xl' />

                    </div>
                    <div className='flex'>
                        <h5>Kadhai Paneer</h5>
                        <p><span className='text-red-500 font-bold ml-16'>Rs. 125</span></p>
                    </div>
                    <div className='flex gap-20 p-2'>
                        <div className='flex'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                

            </div>
            <div className='text-center'>
               
                <button className='btn  border-red-600   mt-4'>View Full Menu</button>
               
            </div>
        </>
    );
};

export default Card;

