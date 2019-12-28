import React, { Children } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import CartItem from './CartItem';
import CartResult from './CartResult';
import {actDeleteProductInCart, actUpdateProductInCart} from '../../actions/actions';
import {connect} from 'react-redux';

class Cart extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         cartProduct: []
    //     }
    // }

    // componentDidMount(){
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:3000/orders',
    //         data: null
    //     }).then(res =>{
    //         this.setState({
    //             cartProduct: res.data
    //         })
    //     });
    // }   
    
    render(){
        //var {cartProduct} = this.props;
        // console.log(cartProduct)
        //console.log(this.state.count)
        var {children} = this.props;                         
        return(
            <div id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li className="active">Giỏ Hàng</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Sản Phẩm</td>
                                    <td className="description"></td>
                                    <td className="price">Giá</td>
                                    <td className="quantity">Số Lượng</td>
                                    <td className="total">Số Tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                               {/* {showProducts} */}
                               {children}
                            </tbody>
                        </table>
                    </div>
                    {/* <CartResult /> */}
                    {/* {this.showTotalAmount(cartProduct)} */}
                    {/* <div style={{float:"right", fontSize:"20px", paddingRight:"100px", paddingBottom:"20px"}} >
                    <span>Tổng tiền cần thanh toán:</span>
                        <div>
                            <button type="button" 
                            className="btn btn-success btn-lg-buy"
                            onClick={this.addProductDetails}>Mua hàng</button>
                        </div>
                    
                    </div> */}
                </div>
            </div>
        )
    }

    // showCartItem = (cartProduct) =>{
    //     var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    //     var result = null;
    //     if(cartProduct.length > 0){
    //         result = cartProduct.map((item, index)=>{
    //             return(
    //                 <CartItem 
    //                     key={index}
    //                     item={item}
    //                     onDeleteProductInCart = {onDeleteProductInCart}
    //                     onChangeMessage = {onChangeMessage}
    //                     onUpdateProductInCart = {onUpdateProductInCart}
    //                 />
    //             )
    //         })
    //     }
    //     return result }


    // } this.state.cartProduct.map((cartProduct, index)=>{
    //     return <CartItem    key={index}
    //                         cartProduct={cartProduct}
    //                         img={cartProduct.img}
    //                         name={cartProduct.name}
    //                         price={cartProduct.price}/>  
    //      }) 

    // showTotalAmount = (cartProduct) =>{
    //     var result = null;
    //     if(cartProduct.length > 0){
    //         result = <CartResult cartProduct={cartProduct} />
    //     }
    //     return result;
    // }



}

// const mapStateToProps = state =>{
//     return{
//         cartProduct: state.cartProduct
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onDeleteProductInCart: (product) => {
//             dispatch(actDeleteProductInCart(product));
//         },
//         onUpdateProductInCart: (product, quantity) => {
//             dispatch(actUpdateProductInCart(product, quantity));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Cart);
export default Cart;