import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [gemId, setGemId] = useState("")
    const [captcha, setCaptcha] = useState("")
    const [genrateCaptcha, setGenrateCaptcha] = useState("")


    const handleLoginSubmit = async () => {
        if (gemId === "") {
            alert("Please Enter GeM User Id");
            return;
        }
        if (captcha === "") {
            alert("Please Enter Captcha");
            return;
        }
        if (genrateCaptcha === captcha) {

            const res = await axios.post("http://localhost:5000/login", {
                gemId: gemId,
                captcha: captcha
            })
            console.log(res)
            if (res.status === 200) {
                alert("Login Successfully");
                return;
            } else {
                alert("Please Enter Valid Captcha");
                return;
            }


        } else {
            alert("Please Enter Valid Captcha");
            return;
        }
        // your login api here
    }

    function generateRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    }

    useEffect(() => {
        // first time component mount hote hi captcha generate
        setGenrateCaptcha(generateRandomString(6));
    }, []);

    const regenrateCaptcha = () => {
        setGenrateCaptcha(generateRandomString(6));
    };







    return (
        <div className='relative log-con'>
            <div className="float absolute w-[40%] bg-white">
                <h2 className=' bg-[#484848] text-white text-center'>Login in to Government e Marketplace | GeM</h2>
                <div className="log-sec flex flex-col gap-3 text-[0.8rem]">
                    <div className="log-top flex flex-col gap-4">
                        <h3>GeM User Id </h3>
                        <input type="text" className='outline-none' value={gemId}
                            onChange={(e) => setGemId(e.target.value)} />
                    </div>
                    <div className="log-mid flex flex-col gap-4">
                        Type the characters in the box below.
                        <div className="mid-box flex justify-between items-center flex-wrap gap-4">
                            <input type="text" className='outline-none rounded-[0.5rem] bg-[#cbcbcb]' value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
                            <h4>{genrateCaptcha}</h4>
                            <img src="https://sso.gem.gov.in/ARXSSO/images/refresh.png" alt="" className='w-[2rem]' onClick={regenrateCaptcha} />
                        </div>
                    </div>
                    <p>Password shall be entered on next screen post successful GeM login ID and Captcha validation</p>
                    <button className='w-max rounded-2xl bg-[#f57a10] text-white' onClick={handleLoginSubmit}>Submit</button>
                </div>
            </div>
            <div className="not-reg flex flex-col gap-2 text-[#484848]">
                <h2>Not Registered with GeM ? Sign up to experience the Marketplace</h2>
                <div className="btns flex gap-8">
                    <Link to="/registration/signUp/buyer" className='flex items-center gap-[0.4rem] text-[#093385]'>
                        <img src="https://sso.gem.gov.in/ARXSSO/images/new_theme_images/buyer-organisation.svg" alt="" />
                        <h2>Register as Buyer</h2>
                    </Link>
                    <Link to="/registration/signUp/seller" className='flex items-center gap-[0.4rem] text-[#093385]'>
                        <img src="https://sso.gem.gov.in/ARXSSO/images/new_theme_images/sellers-serivce-providers.svg" alt="" />
                        <h2>Register as Seller</h2>
                    </Link>
                </div>
            </div>
            <div className="help bg-[url(https://sso.gem.gov.in/ARXSSO/images/login-back_v1-min.png)] text-white flex flex-col gap-4 bg-no-repeat bg-cover">
                <h1 className='text-[1.7rem]'>Need help with your Login?</h1>
                <div className="raisetckt">
                    <div className="icon-head flex gap-[0.5rem]">
                        <img src="https://sso.gem.gov.in/ARXSSO/images/new_theme_images/ticket.svg" alt="" />
                        <h3 className='font-semibold'>Raise a ticket</h3>
                    </div>
                    <p>
                        Agents and experts available on a single platform ready to help you
                    </p>
                </div>
                <div className="contact">
                    <div className="icon-head flex">
                        <img src="https://sso.gem.gov.in/ARXSSO/images/new_theme_images/phone-new.svg" alt="" />
                        <h3 className='font-semibold'>Contact Us</h3>
                    </div>
                    <div className="details">
                        <p>Email: helpdesk-gem[at]gov[dot]in</p>
                        <p>Call: 1-1800-419-3436 / 1-1800-102-3436</p>
                        <p>(9:00 a.m. - 10:00 p.m. Mon to Sat)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login