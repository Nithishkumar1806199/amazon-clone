import React from 'react'
import './Products1.css'
function Products1() {
    return (
        <div className ="Products_Block">
            <img src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" alt="..." className="Products_image"/>
            <div className ="Products_info">
            <p className="Products_text_title">Amazon Echo</p>
            <p className="Products_text_detail">Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric</p>
            <p className="Products_text_title"><small className="small">INR</small> 9999</p>
            <p className="Products_text">*****</p>
            <button className="Products_btn">Add to Basket</button> 
        </div>
        </div>
    )
}

export default Products1