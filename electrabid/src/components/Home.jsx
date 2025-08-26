import React from 'react'
import Card from './Card'
import ImageSlider from './ImageSlider.jsx';

const sliderImages = [
  "https://assets-bg.gem.gov.in/resources/upload/shared_doc/ar-products-web_1705664141.jpg?version=20250610115317",
  "https://assets-bg.gem.gov.in/resources/upload/shared_doc/odop_blue-min_1664774870.jpg?version=20250610115317", // Add more if needed
  "https://assets-bg.gem.gov.in/resources/upload/shared_doc/cautionary-message_webbanner_1747207285.jpg?version=20250610115317",
  "https://assets-bg.gem.gov.in/resources/upload/shared_doc/web-banners_hindi-08_1730889956.png?version=20250610115317"
];

function Home() {
  return (
    <div className='flex flex-col items-center box-border'>
      <ImageSlider/>
      <div className="outlet w-full flex flex-col items-center">
        <div className="heading flex flex-col gap-4">
          <img src="https://assets-bg.gem.gov.in/resources/images/vocal.png" alt="" />
          <h1 className='text-center text-3xl'>GeM Outlet Stores</h1>
        </div>
        <div className="photos grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] w-[85%] gap-8">
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/saras-icon-min.png" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/web_banner_ODOP.jpg" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/startup-runway-icon-min.png" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/banner/1st_Banner.jpg" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/india-handloom-icon-min.png" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/india-handicraft-icon-min.png" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/images/WEb-banner-initiative-section.png" alt="" className='w-full'/>

          </div>
          <div>
            <img src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/millets-lan1_1678775654.jpg" alt="" className='w-full'/>

          </div>
        </div>
      </div>
      <div className="prod-categ flex flex-col gap-6 w-[90%] items-center">
        <h1 className='text-3xl text-center'>Popular Product Categories</h1>
        <div className="cards grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-8 w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button>Explore The Market</button>
      </div>
      <div className="serv-categ flex flex-col items-center gap-8 w-[90%] rounded-xl">
        <h1 className='text-4xl'>Popular Service Categories</h1>
        <div className="serv-bot flex flex-col items-center w-[90%] gap-16">
          <div className="services flex w-full justify-between">
            <div className="prod flex flex-col items-center text-[1.2rem] font-semibold justify-between">
              <img src="https://assets-bg.gem.gov.in/resources/images/manpower.svg?version=20250610115317" alt="" />
              <h2>Security Manpower</h2>
            </div>
            <div className="prod flex flex-col items-center text-[1.2rem] font-semibold justify-between">
              <img src="https://assets-bg.gem.gov.in/resources/images/catering.svg?version=20250610115317" alt="" />
              <h2>Catering</h2>
            </div>
            <div className="prod flex flex-col items-center text-[1.2rem] font-semibold justify-between">
              <img src="https://assets-bg.gem.gov.in/resources/images/hr.svg?version=20250610115317" alt="" />
              <h2>Human Resource</h2>
            </div>
            <div className="prod flex flex-col items-center text-[1.2rem] font-semibold justify-between">
              <img src="https://assets-bg.gem.gov.in/resources/images/cloud.png?version=20250610115317" alt="" />
              <h2>Cloud</h2>
            </div>
            <div className="prod flex flex-col items-center text-[1.2rem] font-semibold justify-between">
              <img src="https://assets-bg.gem.gov.in/resources/images/vehicle-hiring.svg?version=20250610115317" alt="" />
              <h2>Vehicle Hiring</h2>
            </div>
          </div>
          <button>VIEW ALL SERVICES</button>
        </div>
      </div>
      <div className="stats w-full flex flex-col items-center text-white">
        <div className="stats-top text-3xl font-light">
          <h1 className='text-center'>Why you should choose GeM</h1>
        </div>
        <div className="stats-bot flex flex-col w-[90%] items-center gap-2">
          <div className="row1 flex w-full justify-evenly flex-nowrap">
            <div className='flex flex-col items-center'>
              <h1>11,116</h1>
              <p>Product Categories</p>
            </div>
            <span className="v-line"></span>
            <div className='flex flex-col items-center'>
              <h1>1451400</h1>
              <p>Order Value (Cr.)</p>
            </div>
            <span className="v-line"></span>
            <div className='flex flex-col items-center'>
              <h1>341</h1>
              <p>Service Categories</p>
            </div>
          </div>
          <span className='line'></span>
          <div className="row2 grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))]">
            <div className='flex flex-col text-center items-center'>
              <img src="https://assets-bg.gem.gov.in/resources/images/various-products-v4.svg?version=20250610115317" alt="" />
              <p>Rich Listing of Products / Services</p>
            </div>
            <div className='flex flex-col text-center items-center'>
              <img src="https://assets-bg.gem.gov.in/resources/images/integrated-payment-system-v4.svg?version=20250610115317" alt="" />
              <p>Integrated Payment System</p>
            </div>
            <div className='flex flex-col text-center items-center'>
              <img src="https://assets-bg.gem.gov.in/resources/images/direct-purchase-v4.svg?version=20250610115317" alt="" />
              <p>Multiple Procurement Modes - Direct Purchase / Bid / RA</p>
            </div>
            <div className='flex flex-col text-center items-center'>
              <img src="https://assets-bg.gem.gov.in/resources/images/online-ordering-v4.svg?version=20250610115317" alt="" />
              <p>Great Transparency and Speed of Procurement</p>
            </div>
            <div className='flex flex-col text-center items-center'>
              <img src="https://assets-bg.gem.gov.in/resources/images/buyer-supplier-v4.svg?version=20250610115317" alt="" />
              <p>Online Ordering and Contract Generation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home