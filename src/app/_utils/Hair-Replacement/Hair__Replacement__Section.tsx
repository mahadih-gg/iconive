import Heading from "@/components/common/Heading";
import Hair__Replacement__Item from "./Hair__Replacement__Item";
import View__Button from "@/components/common/View__Button";


const Hair__Replacement__Section = () => {
    return (
        <div className="  py-[40px]  md:py-[80px]">
            <div className="container pb-[30px] md:pb-[150px]">
                <Heading  isSubMbHide={true}   className="text-center" title="Men’s Hair Replacement System" subTitle="Explore our exceptional selection of premium wigs designed to provide a flawless fit and timeless style for men of all ages" />
            </div>

            <div className="bg-[#F9F5F0] pb-[80px] ">
                <div className="container grid grid-cols-2 md:grid-cols-5 gap-4">
                    <Hair__Replacement__Item />
                    <Hair__Replacement__Item />
                    <Hair__Replacement__Item />
                    <Hair__Replacement__Item />
                    <Hair__Replacement__Item />
                </div>
                <div className="flex justify-center items-center pt-[30px] md:pt-[60px]">
                    <View__Button href="/hair-base-systems" label="View Hair Base Systems" />
                </div>
            </div>

        </div>
    )
}

export default Hair__Replacement__Section;