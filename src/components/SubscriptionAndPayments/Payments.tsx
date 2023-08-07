import className from "classnames";
import { DropdownOperations } from "./DropdownOperations";
import { devConstant, payArray, tableHead } from "./devConstant";
import { Dispatch, FC, SetStateAction } from "react";
import React from "react";
import styles from "./SubscriptionAndPayments.module.scss";


  const {subscription , balance , statusNotActive, whyNoSubscription, answerSubscription, dateAnswerSubscription} = devConstant;
const status = statusNotActive;

export const Payments: FC = () => {
    const [repeatSelected, setRepeatSeleted] = React.useState("Все");
    return (
        <>
<div className={ className(styles.title) }>
<h2 className={ className(styles.titleText) }>
    История платежей
</h2>

<DropdownOperations repeatSelected={repeatSelected} setRepeatSeleted={setRepeatSeleted} />
</div>
<table className={'.tableHead'}>
        <tr className={styles.table__trHead}>
            <td className={styles.table__trHead}> {tableHead.data}</td>    
            <td> {tableHead.sum}</td>    
            <td> {tableHead.operatin}</td>    
            <td> {tableHead.annotation}</td>    
            <td> {tableHead.statusPay}</td>    
        </tr>
    {payArray.map((item, index) => 
        // (index > 10 && break;
        (index <= 10 && (repeatSelected === "Все" || repeatSelected === item.operatin)) && 
        <tr  className={styles.table__tr} key={index} >
            <td  className={styles.table__tr}> {item.data.d + ' ' + item.data.h}</td>    
            <td> {item.sum}&#8381;</td>    
            <td> {item.operatin}</td>    
            <td> {item.annotation}</td>    
            <td className={(item.status === 'Отклонено') ? styles.redColorText : ''}>{item.status}</td>    
        </tr>

	)
    }

</table>


</>
    )
    }