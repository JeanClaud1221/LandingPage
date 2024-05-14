import { useState } from "react"
function DropDownMenu() {
    return (
        <>
            <ul className=" md:hidden absolute space-x-1 space-y-2 z-10 bg-white w-full ">
                <li className=" text-xl font-semibold pt-2">
                    <a href="" className="px-4 py-1">Quote</a>
                </li>
                <li className=" text-xl font-semibold">
                    <a href="" className="px-3 py-1">Help</a>
                </li>
                <li className=" text-xl font-semibold pb-2">
                    <a href="" className="px-3 py-1">Store</a>
                </li>
            </ul>
        </>
    )
}

function NavBar({ logo }) {
    const [displayDropDown, setDropDownDisplay] = useState(false)
    function dropDown() {
        setDropDownDisplay(!displayDropDown)
    }
    return (
        <>
            <div className=" sticky top-0 z-50">

                <div className=" flex  w-full justify-start items-center space-x-2 border-b-2 px-2 bg-white md:py-4">
                    <div>
                        {/* <img src={logo} alt="Company logo" /> */}
                        <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.170456 0.818181V27H9.63068C11.6932 27 13.3679 26.6932 14.6548 26.0795C15.7378 25.5632 16.5763 24.8929 17.1705 24.0687V27H20.3409V0.818181H17.1705V6.09095C17.0266 5.45431 16.7975 4.85155 16.483 4.28267C15.9034 3.22585 15.0213 2.38636 13.8366 1.7642C12.652 1.13352 11.1477 0.818181 9.32386 0.818181H0.170456ZM17.1705 9.45134C17.0713 9.86046 16.9316 10.2299 16.7514 10.5597C16.3594 11.2926 15.8395 11.8722 15.1918 12.2983C14.5526 12.7244 13.858 13.0398 13.108 13.2443V13.5C13.9091 13.5511 14.7145 13.8324 15.5241 14.3438C16.1525 14.7406 16.7012 15.2709 17.1705 15.9346V9.45134ZM9.63068 24.1875H3.34091V15.0852H9.78409C10.9261 15.0852 11.9148 15.3153 12.75 15.7756C13.5852 16.2273 14.2287 16.8324 14.6804 17.5909C15.1321 18.3409 15.358 19.1591 15.358 20.0455C15.358 21.196 14.919 22.1761 14.0412 22.9858C13.1719 23.7869 11.7017 24.1875 9.63068 24.1875ZM9.22159 12.3239H3.34091V3.63068H9.32386C11.0625 3.63068 12.3324 4.03551 13.1335 4.84517C13.9347 5.64631 14.3352 6.62216 14.3352 7.77273C14.3352 8.69318 14.1051 9.49432 13.6449 10.1761C13.1932 10.858 12.5795 11.3864 11.804 11.7614C11.0369 12.1364 10.1761 12.3239 9.22159 12.3239Z" fill="black" />
                        </svg>

                    </div>
                    <div className=" md:hidden">
                        <button onClick={dropDown} className="text-xl px-3 py-1 font-semibold">Menu</button>
                    </div>
                    <ul className=" hidden md:flex space-x-1">
                        <li className=" text-xl font-semibold">
                            <a href="" className="px-3 py-1">Quote</a>
                        </li>
                        <li className=" text-xl font-semibold">
                            <a href="" className="px-3 py-1">Help</a>
                        </li>
                        <li className=" text-xl font-semibold">
                            <a href="" className="px-3 py-1">Store</a>
                        </li>
                    </ul>
                </div>
                {displayDropDown ? <DropDownMenu /> : null}
            </div>
        </>
    )

}
export default NavBar;