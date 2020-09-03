import React from 'react'
import {useStateValue} from '../Dataflow/StateProvider'

import './Products.css'



export function Products({id,title,detail,image,price,ratings}) {


const [{Basket},dispatch ] = useStateValue(); 
const addBasket = () =>
  {
   dispatch({
     type:"ADD BASKET",
     datas:{id,title,detail,image,price,ratings}
   })
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
            <button className="Products_btn" onClick={addBasket}>Add to Basket</button> 
        </div>
        </div>

        </div>
    )
}

export default Products
