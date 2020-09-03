import React from 'react'
import {useStateValue} from '../Dataflow/StateProvider'


import './CheckoutProducts.css'




function CheckoutProducts({id,title,detail,image,price}) {
   
    const [{Basket},dispatch ] = useStateValue(); 
    const RemoveBasket = () =>
    {
      dispatch({type:'REMOVE BASKET',id:id})
    }

    return (
        <div>
             <div className ="Products_Block">
            <img src={image} alt="..." className="Products_image"/>
            <div className ="Products_info">
            <p className="Products_text_title">{title}</p>
            <p className="Products_text_detail">{detail}</p>
            <p className="Products_text_title"><small>$</small>{price}</p>
            {/* <p className="Products_text"></p> */}
            <button className="Products_btn" onClick={RemoveBasket}>Remove from Basket</button> 
        </div>
        </div>
        </div>
    )
}

export default CheckoutProducts
