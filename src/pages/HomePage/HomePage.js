import React from 'react';
import Slider from '../../components/Slider'
import Aside from '../../components/Aside'
import Items from '../../components/Items';
import Item from '../../components/Item';
import axios from 'axios';
import {connect} from 'react-redux';
import * as action from '../../actions/actions';

import img1 from '../../images/home/girl1.jpg';
import img2 from '../../images/home/girl2.jpg';
import img3 from '../../images/home/girl3.jpg';
import img4 from '../../images/home/girl1.jpg';
import img5 from '../../images/home/girl2.jpg';
import img6 from '../../images/home/girl3.jpg';


const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
  ];

class HomePage extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products?_page=1&_limit=9',
            data: null
        }).then(res =>{
            this.setState({
                products: res.data
            })
        });
    }

    render(){
        var {products} = this.state;
        return(
            <div>
                <Slider 
                input={collection}
                ratio={`2.5:1`}
                mode={`automatic`}
                timeout={`5000`}
                />
                <div className="container" >
                    <div className="row">
                        <Aside />
                        <Items>
                            {this.showProducts(products)}
                        </Items>
                    </div>
                </div>
            </div>
        )
    }

    showProducts(products){
        var result = null;
        //console.log(products)
        var {onAddToCart} = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Item 
                key={index} 
                product={product}
                onAddToCart = {onAddToCart}
                />
            });
        }
        return result;

    }
}


const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        listProducts: (product)=>{
            dispatch(action.handlerFetchProducts(product));
        },
        onAddToCart: (product) =>{
            dispatch(action.actAddToCart(product, 1));
        }
    }
}

// export default HomePage;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);