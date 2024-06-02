import React from "react";
import Card from "../../Components/Card/Card.js";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineSupervisorAccount } from "react-icons/md";


export default function Home () {
    return(
        <div>
            <div>Olá, José Erisvaldo ! :D</div>
            <Card to={'realizaragendamentos'} iconLogo={<FaRegCalendarAlt />} title={'Realizar Agendamentos'} iconArrow={<FaArrowRight />} />
            <Card to={'consultaragendamentos'} iconLogo={<FaRegCalendarAlt />} title={'Consutar Agendamentos'} iconArrow={<FaArrowRight />} />
            <Card to={'pagamentosaprovados'} iconLogo={<FaMoneyCheckDollar />} title={'Pagamentos Pendentes'} iconArrow={<FaArrowRight />} />
            <Card to={'pagamentospendentes'} iconLogo={<FaMoneyCheckDollar />} title={'Pagamentos Aprovados'} iconArrow={<FaArrowRight />} />
            <Card to={'clientes'} iconLogo={<MdOutlineSupervisorAccount />} title={'Clientes'} iconArrow={<FaArrowRight />} />
            
        </div>
    )
}