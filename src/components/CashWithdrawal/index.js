import {Component} from "react" 

import DenominationItem from "../DenominationItem"

import "./index.css"

class CashWithdrawal extends Component{
    state={
        balance:2000
    }
   
    updateBalance=(value)=>{
        this.setState((prevState)=>({balance:prevState.balance-value}))
    }

    render(){
        const {balance}=this.state 
        const {denominationsList}=this.props 

        return(
             <div className="app-container">
                <div className="app-content-container">
                  <div className="profile-container">
                     <div className="initail-container">
                         <p className="initial">S</p>
                     </div>
                     <p className="profile-name">Sarah Williams</p>
                  </div>
                  <div className="balance-container">
                      <p className="balance-text">Your Balance</p>
                      <p className="balance">{balance}</p>
                  </div>
                  <p className="withdraw-text">Withdraw</p>
                  <p className="description">CHOOSE SUM (IN RUPEES)</p>
                  <ul className="denomination-list">
                      {denominationsList.map((eachDenamination)=>(
                        <DenominationItem key={eachDenamination.id} denominationDetails={eachDenamination} 
                           updateBalance={this.updateBalance}
                        />
                      ))}
                  </ul>
                </div>
             </div>
        )
    }
}

export default CashWithdrawal