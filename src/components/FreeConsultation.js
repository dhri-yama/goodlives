import React from 'react'
import confused from './../assets/images/confused.png'

const FreeConsultation = () => {
    return (
        <div className="mx-auto mt-44 lg:mt-12 relative ">
            <div className="flex px-4 flex-col h-full justify-center items-center absolute md:w-full bottom-44">
                <h2 className="text-4xl md:text-6xl text-center font-gilda mb-8"> Still Confused ?</h2>
                <p className="text-lg md:text-2xl font-normal text-center">
                    Are you confused about what a therapy looks like?
                </p>
                <p className="text-lg md:text-xl font-thin mt-2 italic text-center">
                    Don’t know when is the right time to take the first step?<br/>
                    Let us help you with it.<br/>
                </p>
                <a className="mt-4 bg-black px-6 py-4 w-11/12 md:w-96  text-center rounded-full text-white"
                    href="https://api.whatsapp.com/send/?phone=919571564165">Get Free Consultatioin</a>
            </div>
            <div className="w-full m-auto">
                <img src={confused} style={{"height":"600px"}} className="w-full lg:w-10/12 m-auto object-cover object-center" alt="" />
            </div>
        
        </div>
    )
}
export default FreeConsultation
