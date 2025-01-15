import Heading from "@/components/common/Heading";
import Testimonial__Carousel from "./Testimonial__Carousel";

const data = [
    {
        name: "Clint Eastwood",
        description: "“I'm absolutely in love with my wig from Iconive! The quality is exceptional, and it looks incredibly natural”",
        rating: 5,
    },
    {
        name: "Clint Eastwood",
        description: "“I'm absolutely in love with my wig from Iconive! The quality is exceptional, and it looks incredibly natural”",
        rating: 4,
    },
]

export default function Testimonial__Section() {
    return (
        <div className="bg-[#f9f5f0] py-[40px] md:py-[80px]">
            <div className="container">
                <Heading title="What people are saying" className="text-center" /> 
                <Testimonial__Carousel data={data} />   
            </div>
        </div>
    )
}