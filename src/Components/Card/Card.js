import React from "react";

export default function Card ({iconLogo, title,iconArrow}) {
    return(
        <div className=" mt-5 p-5 h-22 flex justify-between items-center bg-blue-600 hover:bg-blue-500 text-white ">
            <div className="text-3xl">{iconLogo}</div>
            <div className="text-1xl">{title}</div>
            <div className="text-3xl">{iconArrow}</div>
        </div>
    )
}