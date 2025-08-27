import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState("userDetails");
    useEffect(() => {
        if (window.innerWidth < 768) {   // Mobile width
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300`}
            >
                {/* Logo */}
                <div
                    className="flex items-center justify-between border-b"
                    style={{ padding: "16px" }}
                >
                    <h1
                        className={`text-xl font-bold text-gray-700 ${!isOpen && "hidden"}`}
                    >
                        MyDashboard
                    </h1>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 text-xl"
                    >
                        <FiMenu />
                    </button>
                </div>

                {/* Menu */}
                <nav style={{ marginTop: "24px" }}>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <li
                            onClick={() => setActiveMenu("userDetails")}
                            className={`flex items-center rounded-lg cursor-pointer ${activeMenu === "userDetails" ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
                                }`}
                            style={{ padding: "10px 16px" }}
                        >
                            <FiHome className="text-lg" />
                            {isOpen && <span style={{ marginLeft: "12px" }}>User Details</span>}
                        </li>
                        <li
                            onClick={() => setActiveMenu("currentBids")}
                            className={`flex items-center rounded-lg cursor-pointer ${activeMenu === "currentBids" ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
                                }`}
                            style={{ padding: "10px 16px" }}
                        >
                            <FiUser className="text-lg" />
                            {isOpen && <span style={{ marginLeft: "12px" }}>Current Bids</span>}
                        </li>
                        <li
                            onClick={() => setActiveMenu("settings")}
                            className={`flex items-center rounded-lg cursor-pointer ${activeMenu === "settings" ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
                                }`}
                            style={{ padding: "10px 16px" }}
                        >
                            <FiSettings className="text-lg" />
                            {isOpen && <span style={{ marginLeft: "12px" }}>Settings</span>}
                        </li>
                        <li
                            className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer text-red-600"
                            style={{ padding: "10px 16px" }}
                        >
                            <FiLogOut className="text-lg" />
                            {isOpen && <span style={{ marginLeft: "12px" }}>Logout</span>}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto" style={{ padding: "24px" }}>
                {/* Header */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
                    style={{ marginBottom: "24px", gap: "12px" }}
                >
                    <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>

                    <div
                        className="flex items-center gap-3 bg-white rounded-xl shadow"
                        style={{ padding: "8px 12px", margin: "8px 0" }}
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                            alt=""
                            className="rounded-full w-10 h-10"
                            style={{ marginRight: "8px" }}
                        />
                        <div>
                            <p className="text-gray-700 font-medium" style={{ marginBottom: "2px" }}>
                                John Doe
                            </p>
                            <p className="text-xs text-gray-500">
                                Last Login: 27 Aug 2025, 10:15 AM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dynamic Sections */}
                {activeMenu === "userDetails" && (
                    <div className="bg-white rounded-2xl shadow" style={{ padding: "24px" }}>
                        <h3 className="text-lg font-semibold" style={{ marginBottom: "16px" }}>
                            User Details
                        </h3>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 text-gray-700"
                            style={{ gap: "16px" }}
                        >
                            <p><span className="font-medium">Name:</span> John Doe</p>
                            <p><span className="font-medium">Email:</span> john.doe@mail.com</p>
                            <p><span className="font-medium">Phone:</span> +91 9876543210</p>
                            <p><span className="font-medium">City:</span> Varanasi</p>
                        </div>
                    </div>
                )}

                {activeMenu === "currentBids" && (
                    <div className="bg-white rounded-2xl shadow" style={{ padding: "24px" }}>
                        <h3 className="text-lg font-semibold" style={{ marginBottom: "16px" }}>
                            Current Bids
                        </h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <li className="border-b pb-2">Bid #1 – ₹500 – Pending</li>
                            <li className="border-b pb-2">Bid #2 – ₹1200 – Won</li>
                            <li>Bid #3 – ₹750 – Lost</li>
                        </ul>
                    </div>
                )}

                {activeMenu === "settings" && (
                    <div className="bg-white rounded-2xl shadow" style={{ padding: "24px" }}>
                        <h3 className="text-lg font-semibold" style={{ marginBottom: "16px" }}>
                            Settings
                        </h3>
                        <p className="text-gray-700">Here you can manage your preferences.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
