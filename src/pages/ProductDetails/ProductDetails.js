import React from 'react';
import Aside from '../../components/Aside';
//import Item from '../../components/Item';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: [],
        }
    }
    componentDidMount(){
        var {id}=this.props.match.params
        axios({
            method: 'GET',
            url: `http://localhost:3000/products/${id}`,
            data: null
        }).then(res =>{
            this.setState({
                product: res.data
            })
        });
    }

     render(){
        var {id, name, price, img}=this.state.product
        return(
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div className="col-sm-9 padding-right">
                        <div className="product-details">
                            <div className="col-sm-5">
                                <div className="view-product">
                                    <img src={"../" + img} alt="Photo" /> 
                                </div>
                                <div id="similar-product" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <NavLink to="#"><img src="images/product-details/similar1.jpg" alt=""/></NavLink>
                                                <NavLink to="#"><img src="images/product-details/similar2.jpg" alt=""/></NavLink>
                                                <NavLink to="#"><img src="images/product-details/similar3.jpg" alt=""/></NavLink>
                                            </div>
                                            <div className="item">
                                                <NavLink to="#"><img src="images/product-details/similar1.jpg" alt=""/></NavLink>
                                                <NavLink to="#"><img src="images/product-details/similar2.jpg" alt=""/></NavLink>
                                                <NavLink to="#"><img src="images/product-details/similar3.jpg" alt=""/></NavLink>
                                            </div>
                                            
                                            
                                        </div>

                                        
{/*                                        <a className="left item-control" to="#similar-product" data-slide="prev">
                                        <i className="fa fa-angle-left"></i>
                                        </a>
                                        <a className="right item-control" to="#similar-product" data-slide="next">
                                        <i className="fa fa-angle-right"></i>
                                        </a>*/}
                                </div>

                            </div>
                            <div className="col-sm-7">
                                <div className="product-information">
                                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                                    <h2>{name}</h2>
                                    <p>SKU: ESP00{id}</p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <span>
                                        <span>${price}</span>
                                        <label>Số Lượng:</label>
                                        <input type="text" value="3" />
                                        <button type="button" className="btn btn-fefault cart">
                                            <i className="fa fa-shopping-cart"></i> &nbsp;
                                            Thêm Vào Giỏ Hàng
                                        </button>
                                    </span>
                                    <p><b>Tình Trạng:</b> Còn Hàng</p>
                                    <p><b>Trạng Thái:</b> Mới</p>
                                    <p><b>Thương Hiệu:</b> E-SHOPPER</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="reviews">
                            <h2>Bình Luận</h2>
                            <div className="single-blog-post">
                                <div className="post-meta">
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-user"></i>Tác Giả</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-clock-o"></i>Thời Gian</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-calendar-o"></i>Ngày Tháng</NavLink></li>
                                    </ul>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p><b>Viết Bình Luận</b></p>
                                
                                <form action="#" >
                                    <span>
                                        <input type="text" placeholder="Tên Của Bạn"/>
                                        <input type="email" placeholder="Địa Chỉ Email"/>
                                    </span>
                                    <textarea name="" ></textarea>
                                    <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                                    <button type="button" className="btn btn-default pull-right">
                                        Gủi Bình Luận
                                    </button>
                                </form>
                            </div>
                        
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ProductDetails;