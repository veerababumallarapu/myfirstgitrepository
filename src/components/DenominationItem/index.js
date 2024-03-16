import "./index.css"

const DenominationItem =(props)=>{
    const {denominationDetails,updateBalance}=props 
    const {value}=denominationDetails
    const onClickButton=()=>{
       updateBalance(value)
    }

    return(
         <li className="list-item">
           <button className="button" type="button" onClick={onClickButton}>
              {value}
           </button>
         </li>
    )
}

export default DenominationItem