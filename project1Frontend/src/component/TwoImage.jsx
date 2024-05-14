function TwoImage({ subImage = "", mainImage = "", subImageAlt = "", mainImageAlt = "" }) {
    return (
        <div className=" h-96 grid grid-cols-10 grid-rows-11 mb-5 ">
            <div className="bg-green-200 col-span-6 row-span-11 col-start-1 row-start-1 rounded-r-xl"></div>
            <div className=" col-span-3 row-span-5 row-start-4 col-start-2">
                <img src={subImage} alt={subImageAlt} className=" w-full h-full object-cover rounded-xl" />
            </div>
            <div className=" col-span-4 row-span-7 row-start-3 col-start-6">
                <img src={mainImage} alt={mainImageAlt} className=" w-full h-full object-cover rounded-xl" />

            </div>

        </div>
    )
}
export default TwoImage