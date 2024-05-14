function ThreeImage({ subImageTop = "", subImageBottom = "", mainImage = "", subImageTopAlt = "", subImageBottomAlt = "", mainImageAlt = "" }) {
    return (
        <div className=" h-96 grid grid-cols-11 grid-rows-11 mb-5">
            <div className="bg-blue-300 col-span-9 row-span-11 col-start-3 row-start-1 rounded-l-xl">
            </div>
            <div className=" col-span-3 row-span-4 row-start-2 col-start-2">
                <img src={subImageTop} alt={subImageTopAlt} className=" w-full h-full object-cover rounded-xl " />
            </div>
            <div className=" col-span-3 row-span-4 row-start-7 col-start-2">
                <img src={subImageBottom} alt={subImageBottomAlt} className=" w-full h-full object-cover rounded-xl" />
            </div>
            <div className=" col-span-5 row-span-7 col-start-6 row-start-3">
                <img src={mainImage} alt={mainImageAlt} className=" w-full h-full object-cover rounded-xl" />
            </div>
        </div>
    )
}
export default ThreeImage