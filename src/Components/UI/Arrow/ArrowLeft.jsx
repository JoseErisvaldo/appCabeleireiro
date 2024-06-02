import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArrowLeft ({to}) {
    return(
    <Link to={to} className='text-2xl'>
        <FaArrowLeft />
    </Link>
    )
}