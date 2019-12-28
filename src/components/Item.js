import React from 'react';
import {NavLink} from 'react-router-dom';
// import {connect} from 'react-redux';
// import * as action from './../actions/actions';
// import axios from 'axios';
// import {actAddToCart} from '../actions/actions';


class Item extends React.Component{

    // checklogin = () => {
    //     // console.log(this.props)
    //     let { history} = this.props;
    //     if (sessionStorage.getItem('TOKEN')) {
    //         //console.log("true")
    //     //   this.addcart(products, count);
    //     //   history.push('/giohang')
    //     } else { 
    //         //history.push('/login') 
    //         console.log("ok")
    //     }
    // }

    // onSave=(id)=>{
    //     //let resLogin = this.dologin(id);
    //     var {product}=this.props
    //         axios({
    //             method: 'POST',
    //             url: 'http://localhost:3000/orders',
    //             data: product
    //         })      
    // }    



    render(){       
        // var {img, price, name, id} = this.props.product
        var {product} = this.props;
        return(
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center img-prod">
                            <NavLink to={`/product-details/${product.id}`} className="product-link">
                                <img src={product.img} alt="" />
                                <h2>{product.price}$</h2>
                                <p>{product.name}</p>
                            </NavLink>
                            <button className="btn btn-default add-to-cart"
                                    onClick = { () => this.onAddToCart(product)}><i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</button>
                            {/* onClick={()=>{this.onSave(id)}} */}
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
        // console.log("ok")
    }
    
}


// const mapDispatchToProps = (dispatch, props)=>{
//     return{
//         onAddToCart: ()=>{
//             dispatch(action.handlerFetchProducts());
//         }
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         onAddToCart: (product) =>{
//             dispatch(actAddToCart(product, 1));
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(Item);
export default Item;