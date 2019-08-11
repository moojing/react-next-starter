import React,{useContext,useState,useEffect}  from "react"
import {PaymentContext} from '../context'
let PayByCredit = () =>{
    let {paymentData,paymentDispatcher} = useContext(PaymentContext) 
    console.log('paymentData: ', paymentData.data);
    
    let [creditData,setCreditData] = useState(paymentData.data)

     
    console.log('creditData',creditData);
    let onEmailChange = (e)=>{
        console.log(e.target)
        let value = e.target.value
         setCreditData(prev=>{
             console.log('prev: ', prev);
            console.log({...prev,email:value})
            return {...prev,email:value }
        })
    }
    return (
        <>
        <div className="form-group">
            <label >付款人信箱</label>
            <input type="email" onChange={onEmailChange}  /> 
        </div>
        <div className="form-credit form-group">
                <label> 信用卡卡號：</label>
                <input type="text" maxLength="4"/>
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />          
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />
                <span className="visa">
                    VISA
                </span>
        </div>
        <div className="form-expire form-group">
            <label> 有效年月：</label> 
            <input type="text" placeholder="MM" maxLength="2"/>
            <span className="separater-expire"> 
                月  
                <span>/  </span>
            </span>
            <input type="text" placeholder="YYYY" maxLength="4"/>
            <span className="separater-expire"> 年 </span>
        </div>
        <div className="form-expire form-group form-cvv">
            <label> 背後末三碼 </label> 
            <input type="text" placeholder="CVV"  maxLength="3"/>
        </div>
        </>
    )
} 

export default PayByCredit