import React, { useState } from 'react'

function BuyerSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');




  const handleSignUp = async () => {
    console.log(name, email, mobile, password);

    //your proceed logic here
  }

  return (
    <div>
      <div className="signup-top p-4">
        <h1 className='text-xl text-[#7e7e7e]'>SignUp &gt;</h1>

        <div className="reg flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Primary User (HOD) / Verifying Authority Registration</h2>
          <a href="#" className="flex text-sm items-center gap-1 text-red-600">
            <span>Need help with Registration?</span>
            <img src="https://cdn.hugeicons.com/icons/youtube-solid-standard.svg" alt="YouTube" className="w-5" />
          </a>
        </div>

        <div className="process flex justify-around bg-[#f3f3f3] rounded-2xl">
          <div className="first flex gap-2 text-blue-600 font-semibold text-xl">
            <h3>1.</h3>
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
            <p className='text-[#4e4e4e]'>Please select your Role in the Buyer Organisation</p>
          </div>

          {/* Signup Form */}

          <div
            className="flex justify-center items-center"
            style={{ padding: "20px", margin: "0" }}
          >
            <div
              className="bg-white rounded-lg shadow-lg w-full max-w-md"
              style={{ padding: "30px", margin: "10px" }}
            >
              <h2
                className="text-2xl font-bold text-center text-gray-800"
                style={{ marginBottom: "20px" }}
              >
                Sign Up
              </h2>
              <form>
                {/* Name */}
                <div style={{ marginBottom: "15px" }}>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    style={{ padding: "10px" }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "15px" }}>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07222e] outline-none"
                    style={{ padding: "10px" }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                {/* Mobile */}
                <div style={{ marginBottom: "15px" }}>
                  <label className="block text-gray-700 font-medium mb-1">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07222e] outline-none"
                    style={{ padding: "10px" }}
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                  />
                </div>

                {/* Password */}
                <div style={{ marginBottom: "20px" }}>
                  <label className="block text-gray-700 font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07222e] outline-none"
                    style={{ padding: "10px" }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#07222e] text-white rounded-lg "
                  style={{ padding: "12px", marginTop: "10px" }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>






          <div className="bot-text">
            <p className='font-semibold'>If you want to register as the buyers/ users involved in procurement process please contact Primary user (HOD) of your organisation</p>
            <span className='text-[0.8rem]'>Note:- Only non buying roles i.e. Primary User (HOD)/ Verifying Authority can get registered from here.</span>
          </div>
        </div>
        <div className="login text-[0.9rem]">
          Already registered with GeM?<a href="#" className='text-blue-600 font-semibold'>Click Here To Login</a>
        </div>
      </div>
    </div>
  )
}

export default BuyerSignUp
