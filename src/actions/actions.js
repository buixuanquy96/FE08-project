import callApi from './../utils/apiCaller';

export const handlerFetchProducts=()=>{
    return(dispatch)=> {
        return callApi('products','GET', null).then(res =>{
                dispatch(fetchProduct("FETCH_PRODUCTS", res.data))
            });
        }
}

export const fetchProduct=(FETCH_PRODUCTS, products)=>{
    return {
        type: "FETCH_PRODUCTS",
        products
    }
}

export const handlerAddToCartRequest=(product)=>{
    return(dispatch)=> {
        return callApi('order','POST', product).then(res =>{
                dispatch(handlerAddToCart(res.data))
            });
        }
}

export const handlerAddToCart=(product)=>{
    return {
        type: "ADD_CART",
        product
    }
}


export const signInRequest=()=>{
    return(dispatch) =>{
        return callApi('user', 'GET', null).then(res =>{
            dispatch(signIn(res.data))
        })
    }
}


export const signIn=(users)=>{
    return {
        type: 'USER_DATA',
        users
    }
}



// CartProduct
export const actAddToCart = (product, quantity) =>{
    return {
        type: 'ADD_TO_CART',
        product,
        quantity
    }
}


export const actDeleteProductInCart = (product) =>{
    return {
        type: 'DELETE_PRODUCT_IN_CART',
        product
    }
}

export const actUpdateProductInCart = (product, quantity) =>{
    return {
        type: 'UPDATE_PRODUCT_IN_CART',
        product,
        quantity
    }
}