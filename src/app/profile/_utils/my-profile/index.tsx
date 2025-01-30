"use client"

import ProfileSidebar from "../profile-sidebar";
import InfoBox from "./info-box";

export default function MyProfile() {
    return (
        <ProfileSidebar>
            <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[22px] font-normal text-[#666666]">Client Name</h3>
                            <p className="text-[30px] font-semibold text-[#1A1A1A]">Clint Eastwood</p>
                        </div>

                        <InfoBox title="E-mail Address" value="Eastwood2255@gmail.com" onEdit={() => {}} />
                        <InfoBox title="Mobile Number" value="+44-20-7224-3688" onEdit={() => {}} />
                        <InfoBox title="Shipping Address" value="221B Baker Street, London United Kingdom" onEdit={() => {}} />
                        <InfoBox title="Date of Birth" value="16 December, 1921" onEdit={() => {}} />
                        <InfoBox title="Gender" value="Male" onEdit={() => {}} />
                    </div>

                    {/* Address Book */}
                    <div>
                        <h2 className="text-[25px] font-semibold py-6 border-t border-[#C1C1C1]">Address Book</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InfoBox title="Home" value="221B Baker Street, London United Kingdom" onEdit={() => {}} />
                            <InfoBox title="Work" value="221B Baker Street, London United Kingdom" onEdit={() => {}} />

                            
                        </div>

                        <button className="mt-6 text-blue-600 flex items-center">
                            <span className="text-2xl mr-2">+</span>
                            Add Another Address
                        </button>
                    </div>
                </div>
            </div>
        </ProfileSidebar>
    )
}

