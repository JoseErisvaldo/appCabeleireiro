import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArrowRight ({to}) {
    return(
    <Link to={to} className='text-2xl'>
        <FaArrowRight />
    </Link>
    )
}