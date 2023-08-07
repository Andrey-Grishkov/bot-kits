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
        <tr className={styles.table__td}>
            <td className={styles.table__td}> {tableHead.data}</td>    
            <td className={styles.table__td}> {tableHead.sum}&#8381;</td>    
            <td className={styles.table__td}> {tableHead.operatin}</td>    
            <td className={styles.table__td}> {tableHead.annotation}</td>    
            <td className={styles.table__td}> {tableHead.statusPay}</td>    
        </tr>
    {payArray.map((item, index) => 
        (repeatSelected === "Все" || repeatSelected === item.operatin) && 
        <tr key={index} className={styles.table__td}>
            <td > {item.data.d + ' ' + item.data.h}</td>    
            <td> {item.sum}&#8381;</td>    
            <td> {item.operatin}</td>    
            <td> {item.annotation}</td>    
            <td> {item.status}</td>    
        </tr>

	)
    }

</table>


</>
    )
    }