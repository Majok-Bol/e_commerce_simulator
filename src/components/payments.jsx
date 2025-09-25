import { useState } from "react";

//handle payments
export default function Payments({order,onClearOrders}){
   const[amount,setAmount]=useState(0);
   const[showInput,setShowInput]=useState(false);
   const[inputValue,setInputValue]=useState("");
   let total=order.reduce((total,item)=>total+item.price,0);
   function handleTopUpClick(){
      setShowInput(true);
   }
   function handleDeposit(){
   const deposit=parseFloat(inputValue);
   if(!isNaN(deposit)&&deposit>=10){
      alert(`${inputValue}  USD deposited successfully`)
      //increase amount
      setAmount((prev)=>prev+deposit);
      //clear input field
      setInputValue("");
      //hide input field
      setShowInput(false);

   }else{
      alert("Minimum deposit is 10 USD")
   }
   }
function handlePayNow() {
  if (total > 0 && amount >= total) {
    alert("Purchase successful");
    setAmount((prev) => prev - total);

    // reset total
    onClearOrders();

  } else if (total === 0) {
    alert("No items to pay for");
  } else {
    alert(
      `Please top up your account\nCurrent balance: ${amount} USD\nDeficit: ${
        total - amount
      } USD`
    );
  }
}

return(<>

   <div className="payments">
      <h2>Ordered items</h2>
  
      <ol>
  {order.map((item,index)=>{
   return <li key={`${item.id}-${index}`}>{item.title}</li>
  })}
      </ol>
          <p>
            <strong>  Quantity: </strong>
       {order.length}<span></span>
      </p>
    
      <p><strong>Amount to pay: </strong>{total.toFixed(2)} USD<span></span></p>
  <p><strong>Current balance: </strong><span>{amount.toFixed(2)} USD</span></p>
  <button onClick={handlePayNow}>Pay now</button>
      {!showInput?(<button onClick={handleTopUpClick}>Top up Account</button>):(
         <div><input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Enter Amount to Deposit"/>
         <button onClick={handleDeposit}>Deposit</button>
               </div>
         )
   
         }

         
         </div>
</>)

   



}