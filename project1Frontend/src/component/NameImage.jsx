function NameImage({ image, name }) {
    return (
        <>
            <div className=" relative flex justify-center mb-5">
                <img src={image} alt="Background image" className="object-cover h-60 w-full" />
                <span className=" absolute bottom-1/2 text-3xl font-bold">{name}</span>
            </div>
        </>
    )

}
export default NameImage;