import React from 'react'
import Header from '../Header/Header'
import './Checkout.css'

import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Dataflow/StateProvider';

function Checkouts() {
    
    const checkout =()=>{
     alert("Unga veetu varum innum konjam nal la may be vara ma kuda polam");
    }

    const [{ basket }] = useStateValue();
    return (
        <div>
            <Header/>
            {/* ad Banner */}
            <div className="Checkout_layout">

            <div className="Checkout_page">
            <div className="checkout_ad">
            <img src ="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout_ad_image" alt='...'/>
            </div>
            {/* Subtotal with Checkout*/}

            <CurrencyFormat 

            renderText = {(value) => (
                        <>
                        <div className="checkout_subtotal">
                        <p className="Checkout_Subtotal_text">Subtotal ({basket.length}Items) : {value}</p>
                        <button className="Checkout_subtotal_btn" onClick = {checkout}>Proceed to Checkout</button>
                        </div>
                        </>
                )}                   
                
            value={basket?.reduce((amount,item) => item.price+amount,0)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} />

            {/* if no products added */}
            {/* Products */}
            </div>
            <div className="Checkout__message_block">
                {basket.length === 0 ? (<div className="Checkout__message_block_1">
                    <div>
                    <h1 className="Checkout__message"><strong>Your Shopping basket is empty</strong></h1>
                    <h6>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</h6>
                    </div>
                </div>):(<div>
                        {basket.map(item =>(

                            <CheckoutProducts
                            id={item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            detail ={item.detail}
                            ratings ={item.ratings}
                            />
                        )
                        )}       
                    </div>)}
            </div>
            </div>
        </div>
    )
}

export default Checkouts
