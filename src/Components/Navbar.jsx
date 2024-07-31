
import { NavLink } from 'react-router-dom';
import Logo from '../../public/Logo.png'
import '../Components/Home/responsive.css'
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";


const Navbar = () => {
    return (
        <div className='flex justify-around  py-6 '>
            <div>
                <img  src={Logo} className=' h-16 object-cover w-[10rem]' alt="" />
            </div>
            <div className=' my-auto nav-link  '>
                <ul className='flex gap-4 '>
                    <NavLink to={'/'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Home</li>
                    </NavLink>
                    <NavLink to={'menu'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Menu</li>
                    </NavLink>
                    <NavLink to={'contact'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Contact</li>
                    </NavLink>
                    <NavLink to={'services'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Services</li>
                    </NavLink>
                    <NavLink to={'about us'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>About Us</li>
                    </NavLink>
                    <NavLink to={'menu'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Menu</li>
                    </NavLink>
                    <NavLink to={'recepies'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Recepies</li>
                    </NavLink>
                    <NavLink to={'menu'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Testimonials</li>
                    </NavLink>
                </ul>
            </div>
           
            <div className='flex gap-4'>
                <div className='flex mt-6 gap-2'>
                    <div >
                        <CiSearch />
                    </div>
                    <div><GiShoppingCart /></div>
                </div>
                <div className=' my-auto'>

                    <img src="" alt="" />
                    <button className='btn mr-26 bg-teal-500 text-white'>

                        Login
                    </button>
                </div>
          </div>
        </div>
    );
};

export default Navbar;