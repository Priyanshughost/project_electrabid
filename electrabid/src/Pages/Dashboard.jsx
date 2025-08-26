import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Header */}
            <div
                className="h-16 w-full border-b border-gray-800 bg-gray-900 flex items-center justify-between text-white"
                style={{ padding: "0px 20px" }}
            >
                {/* Left Section */}
                <div className="flex items-center gap-3">
                    {/* Toggle button (mobile only) */}
                    <button
                        className="lg:hidden text-white text-2xl"
                        onClick={() => setIsOpen(true)}
                    >
                        <FiMenu />
                    </button>

                    <div className="text-xl font-bold tracking-wide">MyDashboard</div>
                    <div className="text-gray-400 text-sm hidden sm:block">gem.gov.in</div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    <button className="relative">
                        <IoMdNotifications
                            size={25}
                            className="text-gray-300 hover:text-white transition"
                        />
                        <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    <div className="flex flex-col items-end">
                        <span className="font-semibold">Aman Kumar</span>
                        <span className="text-xs text-gray-400">Last login: 7:30 PM Today</span>
                    </div>
                </div>
            </div>

            {/* Layout */}
            <div className="flex bg-white">
                {/* Sidebar */}
                <div
                    className={`
                        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col
                        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                        transition-transform duration-300 z-50 
                        lg:translate-x-0 lg:top-16 lg:h-[calc(100vh-64px)]
                    `}
                    style={{ padding: "20px" }}
                >
                    {/* Close button (mobile only) */}
                    <button
                        className="lg:hidden text-white text-2xl self-end mb-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoMdClose />
                    </button>

                    <ul className="flex flex-col gap-3 w-full">
                        <li className="hover:text-blue-400 cursor-pointer">User Details</li>
                        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
                        <li className="hover:text-red-400 cursor-pointer">Logout</li>
                    </ul>
                </div>

                {/* Content Area */}
                <div
                    className="flex-1 overflow-y-auto bg-white w-full"
                    style={{
                        padding: "32px",
                        height: "calc(100vh - 64px)",
                        marginLeft: "0px",
                    }}
                >
                    {/*  User Details */}
                    <div style={{ marginLeft: "256px" }} className="hidden lg:block">
                        <h1
                            className="text-2xl font-bold"
                            style={{ marginBottom: "24px" }}
                        >
                            User Details
                        </h1>

                        {/* Container */}
                        <div
                            className="bg-gray-100 border border-gray-300 shadow-md rounded-lg"
                            style={{ padding: "24px", maxWidth: "800px" }}
                        >
                            {/* Row: Full Name */}
                            <div
                                className="flex justify-between items-center border-b border-gray-300"
                                style={{ padding: "12px 0" }}
                            >
                                <label className="text-gray-600 font-medium w-1/3">Full Name</label>
                                <p className="text-gray-900 font-semibold w-2/3">Aman Kumar</p>
                            </div>

                            {/* Row: Username */}
                            <div
                                className="flex justify-between items-center border-b border-gray-300"
                                style={{ padding: "12px 0" }}
                            >
                                <label className="text-gray-600 font-medium w-1/3">Username</label>
                                <p className="text-gray-900 font-semibold w-2/3">aman_k</p>
                            </div>

                            {/* Row: Email */}
                            <div
                                className="flex justify-between items-center border-b border-gray-300"
                                style={{ padding: "12px 0" }}
                            >
                                <label className="text-gray-600 font-medium w-1/3">Email Address</label>
                                <p className="text-gray-900 font-semibold w-2/3">aman@example.com</p>
                            </div>

                            {/* Row: User Type */}
                            <div
                                className="flex justify-between items-center border-b border-gray-300"
                                style={{ padding: "12px 0" }}
                            >
                                <label className="text-gray-600 font-medium w-1/3">User Type</label>
                                <p className="text-gray-900 font-semibold w-2/3">Administrator</p>
                            </div>

                            {/* Row: Last Login */}
                            <div
                                className="flex justify-between items-center"
                                style={{ padding: "12px 0" }}
                            >
                                <label className="text-gray-600 font-medium w-1/3">Last Login</label>
                                <p className="text-gray-900 font-semibold w-2/3">7:30 PM, Today</p>
                            </div>
                        </div>
                    </div>

                    {/*  mobile/tablet view  */}
                    <div className="lg:hidden">
                        <h1
                            className="text-2xl font-bold"
                            style={{ marginBottom: "24px" }}
                        >
                            User Details
                        </h1>

                        <div
                            className="bg-gray-100 border border-gray-300 shadow-md rounded-lg"
                            style={{ padding: "24px", maxWidth: "800px" }}
                        >
                            <div className="flex justify-between items-center border-b border-gray-300" style={{ padding: "12px 0" }}>
                                <label className="text-gray-600 font-medium w-1/3">Full Name</label>
                                <p className="text-gray-900 font-semibold w-2/3">Aman Kumar</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-300" style={{ padding: "12px 0" }}>
                                <label className="text-gray-600 font-medium w-1/3">Username</label>
                                <p className="text-gray-900 font-semibold w-2/3">aman_k</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-300" style={{ padding: "12px 0" }}>
                                <label className="text-gray-600 font-medium w-1/3">Email Address</label>
                                <p className="text-gray-900 font-semibold w-2/3">aman@example.com</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-300" style={{ padding: "12px 0" }}>
                                <label className="text-gray-600 font-medium w-1/3">User Type</label>
                                <p className="text-gray-900 font-semibold w-2/3">Administrator</p>
                            </div>
                            <div className="flex justify-between items-center" style={{ padding: "12px 0" }}>
                                <label className="text-gray-600 font-medium w-1/3">Last Login</label>
                                <p className="text-gray-900 font-semibold w-2/3">7:30 PM, Today</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
