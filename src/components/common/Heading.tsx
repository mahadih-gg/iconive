import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const Heading = ({ title, subTitle, className, isSubMbHide }: { title: string, subTitle?: string, className?: string, isSubMbHide?: boolean }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className={`text-[26px] md:text-[35px] font-[500] uppercase ${raleway.className} ${className}`}>
                {title}
            </h2>
            {
                !isSubMbHide &&  (
                    <p className="text-sm md:text-lg font-[400] text-[#999] text-center">
                        {subTitle}
                    </p>
                ) 
            }
        </div>
    )
}

export default Heading;