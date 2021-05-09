import React from 'react'

const ExpertiseCard = ({heading,content}) => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h2 style={{"color":"#fff"}}  className="text-4xl md:text-6xl font-gilda mb-24 text-center">Our Area of Expertise</h2>
            <h3 style={{"color":"#c4dcdf"}}  className="uppercase text-2xl md:text-4xl text-center">{heading}</h3>
            <p  style={{"color":"#ecf3f4"}} className="w-3/5 italic font-light text-lg md:text-xl text-center mt-4">
                {content}
            </p>
            <a href="https://www.goodlives.in/experts/" target="_blank" rel="noreferrer"
                className="flex justify-center items-center text-black rounded-full px-8 py-3 mt-8 hover:bg-red-100 bg-red-50 hover:transform hover:transform scale-125"> Browse our Experts</a>

        </div>
    )
}

export default ExpertiseCard
