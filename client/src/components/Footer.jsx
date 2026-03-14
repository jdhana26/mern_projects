import React from 'react'
import { Link } from 'react-router-dom'
import {  FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";



const Footer = () => {

  const support = [
    {name:"Help Center", route: "/"},
    {name:"Contact Support", route: "/"},
    {name:"Technical Support", route: "/"},           
    {name:"Service Request", route: "/"},
    {name:"Track Repair Status", route: "/"},
    {name:"FAQ", route: "/"},
    {name:"Cancellation Policy", route: "/"},
    {name:"Refund Policy", route: "/"},
    
  ]
 
  const service = [
    {name:"AC Repair", route: "/"},
    {name:"Refrigerator Repair", route: "/"},
    {name:"Microwave Repair", route: "/"},           
    {name:"TV Repair", route: "/"},
    {name:"Water Purifier Service", route: "/"},
    {name:"Chimney Service", route: "/"},
    {name:"Fan Repair", route: "/"},
    {name:"Mixer Grinder Repair", route: "/"},
    {name:"Installation Services", route: "/"},
    
  ]
   const company = [
    {name:"About Us", route: "/"},
    {name:"Our Techinicians", route: "/"},
    {name:"Careers", route: "/"},           
    {name:"Blog", route: "/"},
    {name:"Customer Reviews", route: "/"},
    {name:"Service Locations", route: "/"},
    {name:"Partners", route: "/"},
    {name:"Press", route: "/"},
    
  ]
   const legal = [
    {name:"Privacy policy", route: "/"},
    {name:"Terms & conditions", route: "/"},
    {name:"Cookie Policy", route: "/"},           
    {name:"Service Agreement", route: "/"},
    {name:"Payment policy", route: "/"},
    {name:"Cancellation Policy", route: "/"},
    {name:"Security Policy", route: "/"},
    {name:"Liability Disclaimer", route: "/"},
    
  ]

  

  return (
    <>
    <div className='bg-gray-200  mt-5 flex flex-row justify-between columns-4 p-25'>
        <div className='columns-3xs flex flex-col justify-center gap-0.5 '>

            <h1 className='font-extrabold'>Support</h1>
            {support.map(({ name, route = "/" }) => (
              <Link className='text-sm' key={name} to={route}>
                {name}</Link>
            ))}
           
    <div className='flex flex-row text-xl gap-2.5 '>
<FaSquareFacebook />
<FaXTwitter/>
<FaInstagram/>
<FaWhatsapp />

</div>
           
        </div>


          <div className='columns-3xs flex flex-col justify-center gap-0.5 '>

            <h1 className='font-extrabold'>Services</h1>
            {service.map(({ name, route = "/" }) => (
              <Link className='text-sm' key={name} to={route}>
                {name}</Link>
            ))}
           
        </div>

          <div className='columns-3xs flex flex-col justify-center mb-7 gap-0.5'>

            <h1 className='font-extrabold'>Company</h1>
            {company.map(({ name, route = "/" }) => (
              <Link className='text-sm' key={name} to={route}>
                {name}</Link>
            ))}
           
             
           
        </div>

        <div className='columns-3xs flex flex-col justify-center mb-7 gap-0.5'>

            <h1 className='font-extrabold'>Legal</h1>
            {legal.map(({ name, route = "/" }) => (
              <Link className='text-sm' key={name} to={route}>
                {name}</Link>
            ))}
           
        </div>

    </div>
<div className='bg-black text-white p-2'>

    <div className='bg-black text-white flex justify-center items-center p-5'>
    <p>&copy; 2026 Applifix. All rights reserved.</p>
    </div>



    </div>

    </>
  )
}

export default Footer
