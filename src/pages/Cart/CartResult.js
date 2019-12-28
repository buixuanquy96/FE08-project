import React from 'react';
import {NavLink} from 'react-router-dom';

class CartResult extends React.Component {
    render(){
        var {cartProduct} = this.props;
        return(
            <div>
                <span>Tổng tiền: $ {this.showTotalAmount(cartProduct)}  </span>
                
                <NavLink to="/checkout" onClick={()=>this.onCheckout(this.showTotalAmount(cartProduct))} className="btn btn-default" role="button">Thanh Toán</NavLink>
              
            </div>
            
        )
    }

    showTotalAmount = (cartProduct) =>{
        var total = 0;
        if (cartProduct.length >0){
            for (var i = 0; i< cartProduct.length; i++){
                total += cartProduct[i].product.price * cartProduct[i].quantity;
            }
        }
        // console.log(total)
        return total;
    }
    onCheckout = (total) =>{
       
        localStorage.setItem('TOTAL', JSON.stringify(total))
    }

}

export default CartResult;
