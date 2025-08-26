import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='foot-wrap box-border'>
    <div className="footer grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-8 w-Full text-center">
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            WEB INFO
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link className="hover:text-orange-500 transition-colors duration-200">Terms Of Use</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Website Policies</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Document Help</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Sitemap</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Web Information Manager</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            ABOUT GeM
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link className="hover:text-orange-500 transition-colors duration-200">Introduction to GeM</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Statistics</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Right to Information</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Analytics</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">New on GeM</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Testimonials</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Brand GeM</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            News & Events
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link className="hover:text-orange-500 transition-colors duration-200">Newsroom</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Gallery</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Notifications</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">CCM Schedule</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Forums</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            Resources
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link className="hover:text-orange-500 transition-colors duration-200">GeM Handbook</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">OM’s/Circulars</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Terms and Conditions</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Policies/Manuals</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Miscellaneous</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">GeM Integration Toolkit</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">MoU's</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            Training
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link className="hover:text-orange-500 transition-colors duration-200">Interactive Training Courses</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">LMS</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Training Calendar</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Training Module</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Business Facilitators</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">Gem Logo</Link>
            <Link className="hover:text-orange-500 transition-colors duration-200">List of Suspended Sellers</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="title font-bold text-[0.9rem] cursor-pointer">
            Need Help ?
          </div>
          <div className="options text-[0.8rem] flex flex-col text-[#959595] gap-2 cursor-pointer">
            <Link href="">FAQs</Link>
            <Link href="">Feedback</Link>
            <Link href="">Raise a Ticket</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Careers</Link>
            <Link href="">Useful Links</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Footer