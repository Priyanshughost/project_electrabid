import React from 'react'

function Card() {
  return (
    <div className='flex p-2 flex-col justify-center prod-card'>
            <div className="title text-[1.2rem] font-semibold text-blue-500">
            Oxygen Gas & Accessories
            </div>
            <div className="desc text-[0.8rem] flex items-center">
                Oxygen Concentrator
                Oxygen Flow Meter
                Compressed oxygen IS:309
                O2 Gas Cylinders - Steel
                HF Nasal O2 Therapy Unit
                <img src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/oxygen-v2_1619619912.jpg?version=20250610115317" alt="" />
            </div>
            <a className='text-orange-400 font-semibold' href="#">View All</a>
    </div>
  )
}

export default Card