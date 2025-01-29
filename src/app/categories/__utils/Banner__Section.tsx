export const BannerSection = () => {
    return (
        <div className="relative h-[680px] w-full  bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url('/images/Category__Banner.jpg')` }} >
            <div className="container flex flex-col h-full text-right items-end justify-center">
                <h1 className="text-[28px] md:text-[54px] text-shadow-lg font-[600] text-white uppercase">
                    Gents collection
                </h1>
                <p className="text-white  text-base font-[400] max-w-[800px] text-shadow-lg">
                At Iconive, we understand that men also need a perfect hairstyle to complement their personality and style. Our collection of gents wigs is designed with precision to cater to the needs of men who are looking for a stylish and comfortable hair solution. Whether you are experiencing hair loss or simply want to experiment with different looks, our gents wig collection has got you covered. From classic and professional to trendy and modern, our wigs are available in a variety of styles and colors to suit every occasion
                </p>
            </div>
        </div>
    )
}