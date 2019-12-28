import React from 'react';
import Item from './Item';
import axios from 'axios';
import {connect} from 'react-redux';
import * as action from './../actions/actions';

class Items extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         products: [],
    //     }
    // }
    // componentDidMount(){
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:3000/products?_page=1&_limit=9',
    //         data: null
    //     }).then(res =>{
    //         this.setState({
    //             products: res.data
    //         })
    //     });
    // }

    render(){  
        // var showProducts = this.state.products.map((product, index)=>{
        //     return <Item    key={index}
        //                     product={product}
        //                     img={product.img}
        //                     name={product.name}
        //                     price={product.price}/>
        // })  
        var {products} = this.props;

        return(
            <div className="col-sm-9 padding-right">
                <div className="features_items">
                    <h2 className="title text-center">sản phẩm nổi bật</h2>
                    <div className="row">
                        {/* {showProducts} */}
                        {this.props.children}
                    </div>
                    
                </div>

                <div className="recommended_items" >
                    <h2 className="title text-center">Sản phẩm khuyến mãi</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="row">
                                {/* {showProducts} */}
                                {this.props.children}
                            </div>    
                        </div>
                        
                    </div>
                </div>
            </div>
            )
        }
    }

    // const mapStateToProps = (state)=>{
    //     return {
    //        products: state.products
    //     }
    // }

    // const mapDispatchToProps = (dispatch, props)=>{
    //     return{
    //         listProducts: (product)=>{
    //             dispatch(action.handlerAddToCartRequest(product));
    //         },
    //         onAddToCart: (product) =>{
    //             dispatch(action.actAddToCart(product, 1));
    //         }
    //     }
    // }

export default Items;
// export default connect(mapStateToProps, mapDispatchToProps)(Items);