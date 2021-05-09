import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=" bg-indigo-800 pb-12 mt-16 ">
                <div className="mx-auto container pt-20 lg:pt-60 flex flex-col items-center justify-center">
                    <div>
                        <img src="https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png" alt="" />
                    </div>
                    <div className=" flex text-white flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">For Your Well-Being </h1>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Home</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Self Tests</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Our Team</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contact US</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Know More</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2020 Good Lives. All rights reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    
                </div>
            </div>
        </>
    );
}

export default Footer;
