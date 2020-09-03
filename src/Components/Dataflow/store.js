import * as redux from 'redux'


export const initialState = 
{
    basket:[],
    user:null
}
export const reducer= (state,action) =>
{
                  
    switch (action.type) {

        case 'SET USER':

        return{...state,user:action.user,};
        // Add to basket

        case 'ADD BASKET':
        return{
                ...state,
                basket:[...state.basket,action.datas]
            }; 
        case 'REMOVE BASKET':
        
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((BasketItem)=> BasketItem.id===action.id)
        
        if(index>=0) {
            console.log(newBasket)
            newBasket.splice(index,1);
        }
        else{
        console.warn("can't remove");            
        }
        return{...state,
        basket: newBasket};

        default:

        return state;
        
           }

        }
                
export const store = redux.createStore(reducer);
                
export default store;
                
