const defaultState = [];

const products=(state=defaultState, action)=>{
	//console.log(action)
    switch(action.type){
		case "FETCH_PRODUCTS":
            state = action.products
                return [...state]
        case "ADD_CART":
        	state.push(action.product)
        	return [...state]       
        default:
            return [...state];


    }
}

export default products;