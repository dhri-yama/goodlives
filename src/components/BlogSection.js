import React from 'react'
import blogs from './../assets/datafiles/blogs.json'
import Blog from './Blog'


const BlogSection = () => {
    
    const color=[['#f5ac7d','#f26f79'],['#35c1e9','#456bc4'],['#cbafc0','#884a89']]
    return (
        <div className="w-full lg:w-11/12 m-auto mt-24">
            <h2 className="text-5xl md:text-7xl font-gilda text-center"> Latest Blogs</h2>
            <div className="flex flex-col items-center md:flex-row justify-center mt-12 w-full xl:w-10/12 m-auto">
                {
                    blogs.map((blog,index)=>{
                        return <Blog key={index} title={blog.title} link={blog.link} description={blog.description} color={color[index]}/>
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection
