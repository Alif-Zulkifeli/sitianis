import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageComponent from './../components/ImageComponent';
import { useState, useEffect } from "react";

export default function Home() {

  return (

    <div className=' min-w-screen overflow-hidden ' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>

      <div className=" bg-cover bg-center min-h-screen bg-fixed " >
        <div className='text-center font-curve pt-16' >

          <p data-aos="fade-right" data-aos-duration="1000"  className='text-5xl' > Siti Anis </p>
          <p data-aos="fade-left" data-aos-duration="1000"  className='text-3xl'> Faculty of Science </p>
          <p data-aos="fade-left" data-aos-duration="1000"  className='text-xl'   >University of Technology, KL</p>
        </div>

<div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
      
      <Image
      className='rounded-xl'
        alt="Vercel logo"
        src="/img/001.jpg"
        width={1000}
        height={1000}
        style={{
          maxWidth: '90%',
          height: 'auto',
        }}
      />
</div>
        

        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        Graduation is not the end, it's the beginning. It's a time to celebrate the past and look forward to the future. It's a time to reflect on all the hard work and determination that got you to this point. 🎉
        </div>

        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        
        It's a time to set new goals and start pursuing your dreams. It's a time to say goodbye to old friends and hello to new ones. But most of all, it's a time to be proud of yourself and all that you've accomplished. So enjoy this moment and make the most of it 🎉
        </div>

        <div className='grid grid-cols-2 gap-4' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/003.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/004.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/005.jpg" />
        </div>
        </div>


        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/006.jpg" />
        </div>

     

        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/007.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/008.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/009.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/010.jpg" />
        </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/011.jpg" />
        </div>

    



        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/012.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/013.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/014.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/015.jpg" />
        </div>
        </div>


        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        Graduation is not the end, it's the beginning. It's a time to celebrate the past and look forward to the future. It's a time to reflect on all the hard work and determination that got you to this point. 🎉
        </div>

        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        
        It's a time to set new goals and start pursuing your dreams. It's a time to say goodbye to old friends and hello to new ones. But most of all, it's a time to be proud of yourself and all that you've accomplished. So enjoy this moment and make the most of it 🎉
        </div>
     


        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/017.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/018.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/019.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/020.jpg" />
        </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/021.jpg" />
        </div>

        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/022.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/023.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/024.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/025.jpg" />
        </div>
        </div>


        
      </div>
    </div>

  )
}


