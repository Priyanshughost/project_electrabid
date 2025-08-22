import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [w, setw] = useState(0)
    const [dis, setDis] = useState("block")
    const [tog, settog] = useState("none")
    function handleClose() {
        setw(0)
        setDis("none")
        document.body.classList.remove('overflow-hidden')
    }
    function handleOpen() {
        setw(100)
        setDis("block")
        document.body.classList.add('overflow-hidden')
    }
    function toggle() {
        if (tog == "none") {
            settog("flex")
        }
        else {
            settog("none")
        }
    }
    return (
        <div className='text-xs bg-[#07222e] text-white relative box-border z-2'>
            <div className="nav-btns">
                <div className="mob-nav bg-white absolute h-[100vh] top-0 left-0 z-10 box-border overflow-scroll" style={{ width: `${w}%`, display: dis }}>
                    <div className="mob-top flex justify-between">
                        <img src="src\assets\mob-logo.png" alt="" className="logo" />
                        <img className='close' src="src\assets\close.svg" alt="" onClick={handleClose} />
                    </div>
                    <div className="mob-bot text-black flex flex-col">
                        <div>Need help?</div>
                        <Link className='div'>Raise a Ticket</Link>
                        <div>Forward Auction</div>
                        <div>Bids</div>
                        <Link to="/registration/signUp/buyer" className='div' onClick={handleClose}>Buyer SignUp</Link>
                        <Link to="/registration/signUp/seller" className='div' onClick={handleClose}>Seller SignUp</Link>
                        <Link to="/Login" className='div' onClick={handleClose}>Login</Link>
                        <Link className='div'>GeM Advantages</Link>
                        <Link className='div'>GeM Exclusive</Link>
                        <Link className='div'>Business Opportunities</Link>
                        <Link className='div'>Rate a Seller</Link>
                        <Link className='div'>Seller Details</Link>
                        <Link className='div'>View Contracts</Link>
                        <div>Railway Contracts</div>
                        <Link className='div'>CPPP Tenders</Link>
                        <Link className='div'>ODOP</Link>
                        <Link className='div'>Notifications</Link>
                    </div>
                </div>
                <div className="mob-log bg-white absolute top-[90%] right-0 z-10 box-border overflow-scroll text-black flex flex-col" style={{ display: tog }}>
                    <Link to="/Login" className='div' onClick={toggle}>Login</Link>
                    <Link to="/registration/signUp/buyer" className='div' onClick={toggle}>Buyer SignUp</Link>
                    <Link to="/registration/signUp/seller" className='div' onClick={toggle}>Seller SignUp</Link>
                </div>
                <div className="wrapper flex w-full justify-between">
                    <img src="src\assets\ham.svg" alt="" onClick={handleOpen} />
                    <img src="https://assets-bg.gem.gov.in/resources/images/login-v4.svg" alt="" onClick={toggle} />
                </div>
            </div>
            <div className="top flex justify-between text-[0.65rem]">
                <div className="left flex gap-3">
                    <div className="lang hidden items-center aft justify-between gap-4">
                        English
                        <img src="src\assets\down-arrow.svg" alt="" />
                    </div>
                    <div className="theme aft hidden">
                        Dark Mode
                    </div>
                    <div className="font-size aft gap-[0.3rem] hidden">
                        Font Size
                        <img src="src\assets\minus.svg" alt="" className='w-2.5' />
                        <img src="src\assets\plus.svg" alt="" className='w-2.5' />
                    </div>
                    <div className="skip-btn">
                        Skip To Main Content
                    </div>
                </div>
                <div className="right flex gap-3">
                    <div className="tckt flex aft">
                        Raise a Ticket
                    </div>
                    <span className="v-line"></span>
                    <div className="help-btn flex items-center gap-4">
                        Need Help?
                        <img src="src/assets/down-arrow.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="mid flex lg:justify-between bg-[#07222e] after-mid gap-4 items-center lg:flex-nowrap">
                <img src="src\assets\logo.png" alt="" className='py' />
                <div className="wrap flex justify-between w-full">
                    <div className="mid-sec flex flex-col gap-2">
                        <ul className='flex gap-4'>
                            <li className='border-b-1'>Products</li>
                            <li>Services</li>
                            <li>Content</li>
                            <li id='course'>Interactive Training Courses</li>
                        </ul>
                        <input type="text" placeholder='Looking for something on GeM' className='bg-white search-bar text-[0.9rem] rounded-2xl outline-none' style={{ color: "black" }} />
                    </div>
                    <div className="right-sec flex list-none gap-2">
                        <li className='flex items-center'>
                            Forward Auction
                            <img src="src\assets\down-arrow.svg" alt="" />
                        </li>
                        <li className='flex items-center'>
                            Bids
                            <img src="src\assets\down-arrow.svg" alt="" />
                        </li>
                        <li className='flex items-center signup'>
                            <div className="signup-drop absolute bg-[#07222e]">
                                <Link to="/registration/signUp/buyer">Buyer SignUp</Link>
                                <span className="line"></span>
                                <Link to="/registration/signUp/seller">Seller SignUp</Link>
                            </div>
                            Sign Up
                            <img src="src\assets\down-arrow.svg" alt="" />
                        </li>
                        <Link to='/Login' className='flex items-center cursor-pointer'>
                            Login
                        </Link>

                    </div>
                </div>
            </div>
            <span className='line cont-line'></span>
            <div className="bot flex list-none justify-evenly">
                <div className="categ flex gap-4">
                    <img src="src\assets\ham.svg" alt="" />
                    Categories
                </div>
                <div className="buttons flex gap-4">
                    <li className='flex items-center'>
                        Features & benefits
                        <img src="src\assets\down-arrow.svg" alt="" />
                    </li>
                    <li className='flex items-center'>
                        Business Opportunities
                    </li>
                    <li className='flex items-center'>
                        Seller On GeM
                        <img src="src\assets\down-arrow.svg" alt="" />
                    </li>
                    <li className='flex items-center'>
                        View Contracts
                        <img src="src\assets\down-arrow.svg" alt="" />
                    </li>
                    <li className='flex items-center'>
                        CPPP
                        <img src="src\assets\down-arrow.svg" alt="" />
                    </li>
                    <li className='flex items-center'>
                        ODOP
                    </li>
                </div>
                <div className="noti flex">
                    <div className="new-it flex">
                        <img src="https://assets-bg.gem.gov.in/resources/images/new-on.png" alt="" />
                        New on GeM
                    </div>
                    <img src="src\assets\noti.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav