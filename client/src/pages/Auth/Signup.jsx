import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/ui/Button'
import {motion, AnimatePresence} from 'framer-motion'

const Signup = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const displayLoginBtn = () => {
    console.log("you have clicked the btn")
    return (
        <button
        className='bg-[#e63946] text-white py-3 px-12 rounded-md hover:bg-[#d90429] flex justify-center gap-2 cursor-pointer'>Login</button>
    )
  }
   
    const Welcome = () => (
        
        <div className='welcome px-10 py-3 h-screen text-white animate-fade-in'>
            <nav>
                <label>
          <h1 className="font-bold text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

            </nav>
            <div className='step-animation flex items-end mt-53 justify-between px-15'>
            <div className='w-[70%] flex flex-col h-auto justify-end'>
                <h2 className='text-7xl'><em>Welcome to Cooker<sub className="text-[#ffffffad] font-[Inter] text-[35px]">CMR</sub> Cookbook Society</em></h2>
                <p className='text-[#ffffffaf] mb-8 w-[70%]'>Your journey into Cameroon's most sophisticated digital culinary circle begins here. Create and share with masters of the craft</p>
                <div>
                    <div>
                        <button
                        className='bg-[#e63946] text-white py-3 px-12 rounded-[18px] hover:bg-[#d90429] flex justify-center gap-2 cursor-pointer'
                        onClick={() => setStep(2)}>Let's Get Started</button>
                        <button></button>
                        <span
                        onClick={() => {displayLoginBtn()}}>Already have an account</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col quote rounded-[40px] border-2 border-[#ffffff13] p-5 h-fit w-75 rotate-3 text-[#ffffffa2]">
                <img src="./fork_spoon.svg" alt="" className='w-6'/>
                <em className="text-[#ffffffa2]">"Africa has 5,000 years of culinary history... we must avoid subjects that divide rather than unite. Eating is a civilized act."</em>
                <span className='text-[13px] py-3'> - CHRISTIAN ABEGAN</span>
            </div>

            </div>
        </div>
    )

    const Form = () => (
        <div>
            <div>
                <div className='px-10 py-3 h-screen animate-fade-in'>
            <nav>
                <label>
          <h1 className="font-bold text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

            </nav>
            
            <div className='py-18 gap-5 step-animation flex justify-center'>
                <div>
                    <h1 className='text-4xl'><em>Compose Your Portfolio</em></h1>
                    <p>Tell the world about your culinary perspective</p>
                    <input className="border w-75 h-75 rounded-[100%] flex items-center justify-center" type='file' placeholder='Upload Avatar' />
                </div>
            <form className='bg-white rounded-[20px] p-10 leading-10 flex flex-col'>
            <label htmlFor="">USER NAME</label>
            <input className="bg-[#0000000c] w-87.5 rounded-sm p-1" type="text" placeholder='e.g Vincent' />
            <label htmlFor="">EMAIL</label>
            <input className="bg-[#0000000c] w-87.5 rounded-sm p-1" type='email' placeholder='Bamenda, North West' />
            <label htmlFor="">PASSWORD</label>
            <input className="bg-[#0000000c] w-87.5 rounded-sm p-1" type='password' placeholder='chef1234'/>

            <div className="flex justify-center mt-8">
            <Button
            onClick={() => {navigate('/feed')}}>Complete Profile</Button>
            </div>

            <button
        type="button"
        onClick={() => setStep(1)}
      >
        Go Back
      </button>
        </form>
        
        </div>

            </div>
            </div>
            
        </div>
    )
  return (
    <div>
        {step === 1 ? <Welcome/> : <Form/>}
    </div>
  )
}

export default Signup