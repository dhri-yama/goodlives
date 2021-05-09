import React from 'react'

const Blog = ({title,link, description, color}) => {
    return (
        <a href={link} className="w-10/12 mt-4 xl:w-9/12">
            <div style={{"background": `linear-gradient(${color[0]}, ${color[1]})` }}
                className="blog-card px-4 py-2 pb-8 mx-2 flex flex-col  justify-end">
                <h2 className="text-2xl md:text-2xl  lg:text-4xl sans-serif text-white font-semibold leading-tight tracking-tight py-4">{title}</h2>
                <p className="text-white italic ">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default Blog
