'use client'
import Link from 'next/link'
import { useState } from 'react';
import { FaCamera } from "react-icons/fa";
import '../public/styles/gobal.css';
import CUSIP from '../images/cusip23.jpg';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";




export default function Home() {
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="md:flex flex-col  overflow-hidden">
      <div className="w-full z-10 md:w-1/2 bg-black min-h-screen overflow-hidden left-0 top-0 bottom-0 md:fixed">
        <div className="h-[150px] w-full bg-gray-300 relative">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="coverPhotoInput"
            onChange={handleFileChange}
          />
          <label
            htmlFor="coverPhotoInput"
            className="p-1 rounded flex items-center gap-1 z-50 bottom-4 right-4 absolute bg-[#ACA9A9] text-white cursor-pointer"
          >
            <FaCamera />Edit Cover Photo
          </label>
          <div className="bg-white rounded-full h-28 w-28 -bottom-14 left-4 z-10 absolute">
            <button className="w-9 items-center justify-center flex h-9 rounded-full bg-gray-200 -right-1 bottom-2 z-20 absolute"><FaCamera /></button>
          </div>
          <div className="-bottom-14 absolute left-40">
            <h1 className="text-white text-2xl font-bold">Nicodemus Muholo</h1>
            <h3 className="text-[#ecd37b] text-[15px]">Full Stack Software Developer</h3>
          </div>
          {coverPhoto && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${coverPhoto})` }}
            />
          )}
        </div>
        <div className="mt-20 justify-between flex px-5">
          <button className="bg-white py-1 px-3 rounded text-xl hover:bg-[#E9C33D]">Contact me</button>
          <Link href="/cv" className=' text-white font-bold hover:text-[#E9C33D]'>Download CV</Link>
        </div>
        <hr className='mt-2' />
        <p className='mt-2 mx-4 text-[#E9C33D] text-[15px'>I craft outstanding and user-friendly digital solutions
          for both web and mobile platforms.</p>
        <div className='mt-5 flex flex-col px-5 gap-1'>
          <Link href='#about' className='text-white'>ABOUT</Link>
          <Link href='#experience' className='text-white'>EXPERIENCE</Link>
          <Link href='#projects' className='text-white'>PROJECTS</Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 absolute md:right-0 md:top-0 md:bottom-0 overflow-x-hidden">
        <section id='about' className='bg-red-200 h-[100vh]'></section>
        <section id='experience' className='bg-blue-200 h-[100vh]'></section>
        <section id='projects' className='h-[100vh] text-center'>
          <div>
            <h1 className='mb-3 text-2xl font-bold'>Web Development Projects</h1>
            <div
              className="flex overflow-x-scroll pb-5 hide-scroll-bar"
            >
              <div
                className="flex flex-nowrap "
              >
                <div className="inline-block px-3">
                  <div
                    className="w-[200px] flex flex-col border h-[250px] max-w-xs overflow-hidden rounded shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className='bg-white h-[20px] w-full text-[#2dabb1] flex items-center'>
                      <Link className='flex justify-between w-full items-center text-[14px] px-2' href="www.cusip.com">CUSIP <span><FaArrowRight className="transition-transform transform hover:rotate-60" /></span></Link>
                    </div>
                    <div className='h-[200px] w-full'>
                      <Image src={CUSIP} alt="cusip" className="object-cover items-center bg-no-repeat" />
                    </div>
                    <div className='h-[30px] w-full bg-white gap-2 flex'>
                    </div>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div
                    className="w-[200px] border h-[250px] max-w-xs overflow-hidden rounded shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className='h-[220px] w-full'></div>
                    <div className='bottom-0 right-0 left-0 h-[30px] w-full bg-black'></div>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div
                    className="w-[200px] border h-[250px] max-w-xs overflow-hidden rounded shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className='h-[220px] w-full'></div>
                    <div className='bottom-0 right-0 left-0 h-[30px] w-full bg-black'></div>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div
                    className="w-[200px] border h-[250px] max-w-xs overflow-hidden rounded shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className='h-[220px] w-full'></div>
                    <div className='bottom-0 right-0 left-0 h-[30px] w-full bg-black'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h1>Mobile Development Projects</h1>
          </div>
          <div className='mt-5'>
            <h1>Graphic design Projects</h1>
          </div>
        </section>
      </div>
    </main>
  )
}
