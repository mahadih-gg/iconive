'use client';
import A__Input from '@/components/Form/A__Input';
import Link from 'next/link';
import { Raleway } from 'next/font/google';
import A__Select from '@/components/Form/A__Select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import BillingAddressForm from './billing-address-form';
import { CartContent } from '@/components/common/cart/cart-content';
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const countries = [
    { value: 1, label: 'India' },
    { value: 2, label: 'USA' },
    { value: 3, label: 'Canada' },
    { value: 4, label: 'Australia' },
    { value: 5, label: 'United Kingdom' },
]

const cities = [
    { value: 1, label: 'Mumbai' },
    { value: 2, label: 'Delhi' },
    { value: 3, label: 'Bangalore' },
    { value: 4, label: 'Chennai' },
]

const states = [
    { value: 1, label: 'Maharashtra' },
    { value: 2, label: 'Delhi' },
    { value: 3, label: 'Karnataka' },
    { value: 4, label: 'Tamil Nadu' },
]

export default function Checkout__Form() {
    const [billingAddress, setBillingAddress] = useState(false);

    return (
        <div className="max-w-[1300px] mx-auto py-10">
            <div className="grid grid-cols-8 gap-0 shadow-xl px-6 py-10 border">
                <div className="col-span-5  border-r pr-8">
                    <div className="text-base md:text-lg font-[400]">Already a member? <Link href="/login" className="text-[#000] underline">Login here</Link></div>
                    <form className="pt-10">
                        <h3 className={`${raleway.className} text-lg md:text-[24px] font-[400] pb-8 text-[#212529]`}>Delivery Address</h3>

                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-8">
                                <A__Input type="text" required name="name" label="Name" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                                <A__Input type="text" required name="number" label="Phone Number" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <A__Input type="text" required name="email" label="Email" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                                <A__Input type="text" required name="alternate_number" label="Alternate Phone Number" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <A__Input type="text" required name="address" label="Address" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                                <A__Select name="country" label="Country" options={countries.map((country) => ({ value: country.value.toString(), label: country.label }))} defaultValue={{
                                    value: countries[0].value.toString(),
                                    label: countries[0].label
                                }} height="45px" required />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <A__Select name="city" label="City" options={cities.map((city) => ({ value: city.value.toString(), label: city.label }))} defaultValue={{
                                    value: cities[0].value.toString(),
                                    label: cities[0].label
                                }} height="45px" required />
                                <A__Select name="state" label="State" options={states.map((state) => ({ value: state.value.toString(), label: state.label }))} defaultValue={{
                                    value: states[0].value.toString(),
                                    label: states[0].label
                                }} height="45px" required />
                            </div>

                        </div>

                        <div className="flex items-center space-x-2 pt-8">
                            <Switch id="billing-address" checked={billingAddress} onCheckedChange={setBillingAddress} />
                            <Label htmlFor="billing-address" className="text-[14px] font-[400] text-[#666]">Billing Another Address</Label>
                        </div>


                        {
                            billingAddress ? <BillingAddressForm /> : null
                        }

                        {/* <div className="pb-8 pt-[60px] flex justify-center">
                            <Button className="w-full uppercase max-w-[400px] h-[50px] text-xl font-[600]">Checkout</Button>
                        </div> */}
                    </form>
                </div>
                <div className="col-span-3  h-[500px] p-5">
                    <CartContent isCheckout={true} />
                </div>

            </div>
        </div>
    )
}

