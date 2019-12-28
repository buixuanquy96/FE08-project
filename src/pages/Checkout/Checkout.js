import React from 'react';
import {NavLink} from 'react-router-dom';
import CheckoutItem from './CheckoutItem';

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address:'',
            phone:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log("ok")
    }

   

    render(){
        var item = localStorage.getItem('CART');
        console.log(item)
        
        return(
            <div id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li className="active">Thanh toán</li>
                        </ol>
                    </div>
                    <div className="row login">
                        <div className="col-sm-7">
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
                                        {/* {this.showCartItem(item)} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">
                                <h2>Thông tin thanh toán</h2>
                                <form onSubmit={this.handleSubmit} action="#">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Họ tên"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Địa Chỉ"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Số điện thoại"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    
                                    <button type="submit" className="btn btn-default">Thanh Toán Đơn Hàng</button>
                                </form>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        )
    }


    // showCartItem = (item) =>{
        
    //     var result = null
    //     if(item.length > 0){
    //         result = item.map((item, index)=>{
    //             return(
    //                 <CheckoutItem 
    //                     key={index}
    //                     item={item}
    //                     index={index}
                        
    //                 />
    //             )
    //         })
    //     }
    //     return result;
    // }
}

export default Checkout;