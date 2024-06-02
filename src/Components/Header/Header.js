import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";


export default function Header () {
    return(
        <div className="flex justify-between text-3xl">
            <div>Logo</div>
            <div><RiAccountCircleLine /></div>
        </div>
    )
}