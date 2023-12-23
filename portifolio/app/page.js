'use client'
import Link from 'next/link'
import { useState } from 'react';
import { FaCamera } from "react-icons/fa";



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
    <main className="flex min-h-screen overflow-hidden">
      <div className="w-1/2 bg-black h-screen">
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
        <FaCamera/>Edit Cover Photo
      </label>
          <div className="bg-white rounded-full h-28 w-28 -bottom-14 left-4 z-10 absolute">
            <button className="w-9 items-center justify-center flex h-9 rounded-full bg-gray-200 -right-1 bottom-2 z-20 absolute"><FaCamera/></button>
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
          <button className="bg-white py-1 px-3 rounded text-xl">Contact me</button>
          <Link href="/cv" className=' text-white font-bold'>Download CV</Link>
        </div>
        <hr className='mt-2' />
        <p className='mt-2 mx-4 text-[#E9C33D] text-[15px'>I craft outstanding and user-friendly digital solutions
          for both web and mobile platforms.</p>
        <div className='mt-5 flex flex-col px-5 gap-1'>
          <Link href='#about' className='text-white'>ABOUT</Link>
          <Link href='#about' className='text-white'>EXPERIENCE</Link>
          <Link href='#about' className='text-white'>PROJECTS</Link>
        </div>
      </div>
      <div className="w-1/2 overflow-y-scroll"></div>
    </main>
  )
}
