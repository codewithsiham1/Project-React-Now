import Lottie from "lottie-react";
import order5 from '../../../public/order5.json'
import order4 from '../../../public/order4.json'
import order3 from '../../../public/order3.json'
import order2 from '../../../public/order2.json'
import order1 from '../../../public/order1.json'


const Services = () => {
    return (

        <>
            <div>
                <div>
                    <p className="text-center py-2 lg:text-2xl text-xl"> <span className="text-green-500 mt-8 font-bold">WHAT WE SERVE</span></p>
                    <h1 className="lg:text-7xl text-5xl font-bold text-center mt-4 mb-4">Our Services</h1>
                </div>
                <div className="flex flex-wrap rounded gap-4 justify-around text-center py-4">
                    <div className="bg-slate-200 p-2 w-[10rem]">
                        <h1 className="text-xl font-bold">Best Quality</h1>
                        <Lottie animationData={order5} className="w-32"></Lottie>
                    </div>
                    <div className="bg-slate-200 p-2 w-[10rem]">
                        <h1 className="text-xl font-bold">Fast Delivery</h1>
                        <Lottie animationData={order4} className="w-32"></Lottie>

                    </div>
                    <div className="bg-slate-200 p-2 w-[10rem]">
                        <h1 className="text-xl font-bold">Hygienic </h1>
                        <Lottie animationData={order3} className="w-32"></Lottie>
                    </div>
                    <div className="bg-slate-200 p-2 w-[10rem]">
                        <h1 className="text-xl font-bold">Budget Friendly</h1>
                        <Lottie animationData={order2} className="w-32"></Lottie>
                    </div>
                    <div className="bg-slate-200 p-2 w-[10rem]">
                        <h1 className="text-xl font-bold">
                            Easy to Order</h1>
                        <Lottie animationData={order1} className="w-32"></Lottie>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;