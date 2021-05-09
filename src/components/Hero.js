import hero from './../assets/images/hero-bg.svg'
import React from 'react'

const Hero = () => {
    return (
        <div className="flex flex-col-reverse xl:flex-row w-full">
            <div className="flex flex-col justify-center xl:ml-12">
                <h1 className="text-6xl text-center sm:text-8xl font-gilda">GoodLives</h1>
                <p className="mt-2 text-center text-xl sm:text-3xl font-thin text-yellow-800 ml-4">
                Do you need a Hand?<br/>
                <span className="">Really We got you.</span>
                </p>
                <div className="mt-8 flex flex-col lg:flex-row justify-center w-full lg:w-3/4 mx-auto xl:w-full">
                    <a className="text-base w-9/12 m-auto max-w-sm sm:w-3/4 md:m-1/4 text-center lg:w-full md:text-base gradient-button-hero px-6 py-4 rounded-full text-white"
                        href="https://www.goodlives.in/call-back/">Request for a Call Back</a>
                    <a className="text-base mt-4 lg:mt-0 max-w-sm w-9/12 m-auto sm:w-3/4 md:m-1/4 text-center lg:w-full md:text-base lg:ml-6 gradient-button-hero px-6 py-4 rounded-full text-white"
                        href="https://api.whatsapp.com/send/?phone=917478530132">Talk to us on Whatsapp</a>
                </div>
            </div>
            <div className=" overflow-hidden m-auto ">
                <img src={hero} className=" object-center object-contain" alt="" />
            </div>
        </div>
    )
}

export default Hero
