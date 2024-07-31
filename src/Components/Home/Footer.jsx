
import logo from "../../../public/Logo.png"

const Footer = () => {
    return (
        <>
            <div className="footer-img mt-10 flex flex-col justify-center">
                <div className=" md:flex justify-center  ">
                    

                    <div className="left-text md:w-1/2  ">
                        <div className="mt-[6rem] ml-[6rem]">
                            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                            <p>
                                For any queries or requests, feel free to reachout to our team,
                                using the below mentioned mail
                            </p>
                            <p>
                                <span className="font-bold">Email:</span> examplemail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="form bg-gray-100 h-[20rem] w-[18rem] m-auto p-8 gap-3 rounded-md md:-mt-10 mt-10">
                        <h1 className="font-bold text-2xl text-center mb-6">
                            Have a question?
                        </h1>
                        <p className="font-semibold">Email</p>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border rounded-md w-56"
                        />
                        <p className="font-semibold">Comments</p>
                        <input
                            type="text-box"
                            placeholder="Comments"
                            className="border rounded-md h-16 w-56"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="mt-6 text-center w-56 bg-black text-white rounded-md py-1 font-semibold"
                        />
                    </div>
                </div>
                <div className="md:w-[50rem] md:h-[14rem] bg-white m-auto rounded-md mt-32 md:flex mb-10">
                    <div className="pl-10 pt-4 w-[30rem]">
                        <img src={logo} alt="" className="w-40" />
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere commodo imperdiet lorem tincidunt semper maecenas scelerisque duis elit. Ipsum condimentum id semper habitasse fermentum dignissim viverra pretium aliquet.</p>
                    </div>
                    <div className="flex gap-10 m-auto justify-center">
                        <div >
                            <h1 className="primaryText font-semibold">Social</h1>
                            <ul>
                                <li className="flex flex-col">
                                    <a href="facebook.com">Facebook</a>
                                    <a href="linkedin.com">LinkedIn</a>
                                    <a href="twitter.com">Twitter</a>
                                    <a href="instagram.com">Instagram</a>
                                    <a href="youtube.com">YouTube</a>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <h1 className="primaryText font-semibold">More</h1>
                            <ul>
                                <li className="flex flex-col">
                                    <a href="facebook.com">Blogs</a>
                                    <a href="linkedin.com">Media</a>
                                    <a href="twitter.com">Gallery</a>
                                    <a href="instagram.com">FAQs</a>
                                    <a href="youtube.com">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
