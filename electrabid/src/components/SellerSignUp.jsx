import React from 'react'

function SellerSignUp() {

    const [userType, setUserType] = React.useState('');

    const handleProceed = async () => {
        console.log(userType)
        //your proceed logic here
    }

    return (
        <div>
            <div className="signup-top">
                <h1 className='text-xl text-[#7e7e7e]'>SignUp &gt;</h1>
                <div className="reg flex justify-between">
                    <h5 className='text-2xl font-semibold'>Seller/Service Provider Registration</h5>
                    <a href="#" className="flex text-sm items-center gap-1 text-red-600">
                        <h5>Need help with Registration?</h5>
                        <img src="https://cdn.hugeicons.com/icons/youtube-solid-standard.svg" alt="" style={{ width: 1.3 + 'rem' }} />
                    </a>
                </div>
                <div className="process flex justify-around bg-[#f3f3f3] rounded-2xl">
                    <div className="first flex gap-2 text-blue-600 font-semibold text-xl">
                        <h3 className=''>1.</h3>
                        <p>Pre-requisites</p>
                    </div>
                    <div className="second flex gap-2 text-xl text-gray-700">
                        <h3>2.</h3>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="third flex gap-2 text-xl text-gray-700">
                        <h3>3.</h3>
                        <p>Registration</p>
                    </div>
                </div>
            </div>
            <div className="signup-bot flex flex-col">
                <div className="redirect text-[0.9rem] text-right">
                    Already Registered with Ministry of Textiles As Weaver or Artisan?<a href="#" className='text-blue-600 font-semibold'>Click Here</a>
                </div>
                <div className="pre-req flex flex-col gap-4 rounded-[0.3rem]">
                    <div className="pre-req-top flex flex-col gap-[0.2rem]">
                        <h1 className='text-[1.8rem] font-semibold text-[#2e2e2e]'>Pre-requisites</h1>
                        <p className='text-[#4e4e4e]'>Registration on GeM should be done by an authorized person (Director of the organisation or a Key Person/Proprietor).</p>
                    </div>
                    <div className="pre-req-form flex flex-col gap-[0.2rem]">
                        <h2 className='text-[1.1rem]'>Business / Organisation Type</h2>
                        <div className="io flex justify-between">
                            <select className="outline-none w-1/2 rounded-xl" value={userType}
                                onChange={(e) => setUserType(e.target.value)}>
                                <option value="">Select type of User</option>
                                <option value="hod">Primary User (HOD)</option>
                                <option value="va">Verifying Authority</option>
                            </select>

                            <button className='text-[1.2rem] font-semibold text-[#8f8f8f] bg-[#d5d5d5] rounded-xl' onClick={handleProceed}>Proceed</button>
                        </div>
                    </div>
                    <a href="#" className="pre-req-bot text-blue-700 font-semibold">
                        VIEW PRE-REQUISITES DOCUMENT
                    </a>
                </div>
                <div className="login text-[0.9rem]">
                    Already registered with GeM?<a href="#" className='text-blue-600 font-semibold'>Click Here To Login</a>
                </div>
            </div>
        </div>
    )
}

export default SellerSignUp