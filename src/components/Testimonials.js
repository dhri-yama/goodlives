import React from 'react'
import CardTestimonial from './CardTestimonial'
import {useState} from 'react'

const Testimonials = () => {
    const reviews=[
        "As a man, it is difficult to talk about my problem. sometimes, you just need a window, and Music therapy helped me to find a way to let it all out.It feels good to have someone listen to my problems with solutions to offer.",
        "I've really learned to genuinely smile after a long time. People around me have started to change as well. GoodLives has helped in not only figuring out what was happening, but also in developing a coping mechanism. I can deal with depression better now."
    ]
    const [curr_review, setCurr_review] = useState(0)
    const changeCurr=()=>{
        curr_review?setCurr_review(0):setCurr_review(1)
    }

    return (
        <div className="antialiased sans-serif m-auto w-11/12 text-gray-600">
            <div className="my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
                <div className="relative min-h-full py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col item-center justify-center">
                    
                    <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
                    
                    <div className="relative text-2xl md:text-5xl py-16 px-6 md:py-12 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
                        <span className="md:block">What Our </span>
                        <span className="md-block">Customers</span>
                        <span className="block">Are Saying!</span>
                    </div>
                </div>
                <div className="relative bg-gray-100 md:w-1/2 flex flex-col justify-center items-center py-4 lg:pt-12">
                    <CardTestimonial text={reviews[curr_review]}/>
                    <div className="m-auto h-16 w-16 bg-indigo-700 rounded-full text-white text-4xl font-bold flex justify-center items-center" onClick={changeCurr}>
                        {curr_review?
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>:
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

