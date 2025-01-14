        import Image from "next/image";
        import Link from "next/link";
        import { Heart, ZoomIn } from "lucide-react";
        import { ShoppingBag } from "@/components/Icons";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        export default function Product({ product }: { product: any }) {
            return (
                <div className="product_item_wrapper border-2 border-[#BFBFBF] rounded-[10px]">
                    <div className="relative group">  
                        <Image className="object-cover rounded-t-[8px]" src={product.image} alt={product.name} width={320} height={320} />
                        
                        {/* zoom image  icon*/}
                        <div className="group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#00000082] group-hover:to-[#00000054] transition-all duration-500 flex items-center justify-center">
                            <button className="w-[60px] h-[60px] bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                                <ZoomIn width={20} height={20} className="text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="product_item_info p-[10px] md:p-[15px]">
                        <h3 className="text-[15px] md:text-base font-[500] text-[#000000] pb-[10px]">
                            <Link href={`/product/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <p className=" md:block hidden text-[12px] font-[400] text-[#666666]">{product.shortDescription}</p>
                    </div>

                    <div className="flex justify-between items-center px-[15px] pb-[15px]">
                        <h4 className="text-[15px] md:text-[20px] font-[400] text-[#000000]">${product.price}</h4>
                        <div className="flex items-center gap-2 md:gap-4">
                            <button>
                                <Heart  className="w-[16px] h-[16px] md:w-[23px] md:h-[23px] text-primary hover:text-primary transition-all duration-300" />
                            </button>
                            <button>
                                <ShoppingBag className="w-[16px] h-[16px] md:w-[23px] md:h-[23px] text-[#999999] hover:text-primary transition-all duration-300" />
                            </button>

                        </div>
                    </div>

                </div>
            )
        }