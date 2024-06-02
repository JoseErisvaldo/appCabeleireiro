import React from "react";
import Card from "../../Components/Card/Card.js";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineSupervisorAccount } from "react-icons/md";


export default function Home () {
    return(
        <div>
            <div>Olá, José Erisvaldo ! :D</div>
            <Card iconLogo={<FaRegCalendarAlt />} title={'Realizar Agendamentos'} iconArrow={<FaArrowRight />} />
            <Card iconLogo={<FaRegCalendarAlt />} title={'Consutar Agendamentos'} iconArrow={<FaArrowRight />} />
            <Card iconLogo={<FaMoneyCheckDollar />} title={'Pagamentos Pendentes'} iconArrow={<FaArrowRight />} />
            <Card iconLogo={<FaMoneyCheckDollar />} title={'Pagamentos Aprovados'} iconArrow={<FaArrowRight />} />
            <Card iconLogo={<MdOutlineSupervisorAccount />} title={'Clientes'} iconArrow={<FaArrowRight />} />
            
        </div>
    )
}