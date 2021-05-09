import React from 'react'
import {useState} from 'react'
import getintouch from './../assets/images/getintouch.png'
import AnimatedH from './AnimatedH'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const handleChange = (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(comment)
    }
    return (
        <div className="flex flex-col lg:flex-row-reverse w-full xl:w-10/12 m-auto" >
            <img src={getintouch} alt="" style={{"transform": "scaleX(-1)"}} className="w-9/12 m-auto md:w-2/5 object-cover object-center" />
            <div className="w-full flex flex-col justify-center items-center mt-6">
                <h3 className="text-6xl font-thin lg:text-5xl xl:text-6xl">Still have doubts?</h3>
                
                <AnimatedH text={"Contact Us."}/>
                <p className="text-xl font-thin italic">Email Address: contact@goodlives.in</p>
                <form onSubmit={handleChange} className="flex flex-col lg:flex-col justify-center items-center w-full">
                    <input 
                        onChange={e => setName(e.target.value)}
                        placeholder="Name" type="text"
                        className="bg-transparent p-4 border-b-2 focus:outline-none focus:border-blue-300 focus:border-b-8 rounded-xl w-3/4 lg:w-3/5 mt-8 h-12 px-4"/>
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email" type="text"
                        className="bg-transparent p-4 border-b-2 focus:outline-none focus:border-blue-300 focus:border-b-8 rounded-xl w-3/4 lg:w-3/5 mt-8 h-12 px-4"/>
                    <textarea 
                        onChange={e => setComment(e.target.value)}
                        placeholder="Comment" type="text"
                        className="bg-transparent p-4 border-b-2 focus:outline-none focus:border-blue-300 focus:border-b-8 rounded-xl w-3/4 lg:w-3/5 mt-8 h-28 px-4"/>
                        
                    <button className="bg-yellow-400 h-12 w-3/4 md:w-1/2 rounded-full block mt-8 text-white border-gray-50 mx-2" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
