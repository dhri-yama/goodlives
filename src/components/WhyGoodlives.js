import React from 'react'
import phone from './../assets/images/3dphone.png'
import DraggableList from './DragableList'

const WhyGoodlives = () => {
    const items=['Completely Confidential','No Sign Ups Required','Will constantly help you','Right Therapist for you']
    return (
        <div className="mt-8 w-full" >
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-9/12 md:w-3/5 lg:w-1/2 ">
                    <img src={phone} alt="" className="object-contain w-full"/>  
                </div>
                <div className="text-white p-8 ">
                    <h2 className="text-5xl  mb-4 md:text-6xl text-black font-gilda text-center">Why Goodlives?</h2>
                    <DraggableList items={items} className=""/>

                </div>        
            </div>
        </div>
        
    )
}

export default WhyGoodlives
