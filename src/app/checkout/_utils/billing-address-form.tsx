'use client'
import A__Input from '@/components/Form/A__Input';
import A__Select from '@/components/Form/A__Select';
import { Raleway } from 'next/font/google';


const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
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

export default function BillingAddressForm() {

    return (
        <>

            <h3 className={`${raleway.className} text-lg md:text-[24px] font-[400] py-8 text-[#212529]`}>Billing Address</h3>

            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-8">
                    <A__Input type="text" required name="billing_name" label="Name" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                    <A__Input type="text" required name="billing_number" label="Phone Number" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <A__Input type="text" required name="billing_email" label="Email" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                    <A__Input type="text" required name="billing_alternate_number" label="Alternate Phone Number" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <A__Input type="text" required name="billing_address" label="Address" className="w-full h-[45px] border-[#C6C6C6] rounded-none" />
                    <A__Select name="billing_country" label="Country" options={countries.map((country) => ({ value: country.value.toString(), label: country.label }))} defaultValue={{
                        value: countries[0].value.toString(),
                        label: countries[0].label
                    }} height="45px" required />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <A__Select name="billing_city" label="City" options={cities.map((city) => ({ value: city.value.toString(), label: city.label }))} defaultValue={{
                        value: cities[0].value.toString(),
                        label: cities[0].label
                    }} height="45px" required />
                    <A__Select name="billing_state" label="State" options={states.map((state) => ({ value: state.value.toString(), label: state.label }))} defaultValue={{
                        value: states[0].value.toString(),
                        label: states[0].label
                    }} height="45px" required />
                </div>

            </div>
        </>
    )
}