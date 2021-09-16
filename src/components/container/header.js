import React, { useState } from 'react';
import image from '../../assets/img/table.jpg'


const Header = () => {

    const [showResults, setShowResults] = useState(false)
    const onClick = () => {
        if (showResults === true) {
            setShowResults(false)
        }
        else

            setShowResults(true)

    }

    const Results = () => (
        <form action="/" method="PUT" id="cart_form">
            <div className="container" id="form_container">
                <div className="row">
                    <div className="col"><img className="card-img-top" src={image} alt="Card caption" /></div>
                    <div className="col-md-auto">
                        <div className="cart_size">
                            <div className="a_prod_name" >Product Name</div>
                            <div className="a_brand_name" >Brand Name</div>
                            <div className="aPrice" >$900</div>
                        </div>
                    </div>
                    <div className="col" id="ex2"><div className="ex2"></div></div>
                </div>
                <div className="row">
                    <div className="col"><img className="card-img-top" src={image} alt="Card caption" /></div>
                    <div className="col-md-auto">
                        <div className="cart_size">
                            <div className="a_prod_name" >Product Name</div>
                            <div className="a_brand_name" >Brand Name</div>
                            <div className="aPrice" >$900</div>
                        </div>
                    </div>
                    <div className="col" id="ex2"><div className="ex2"></div></div>
                </div>
                <div className="row" id="total_row1">
                    <div className="col" >Total</div>
                    <div className="col" >$1800</div>
                </div>
                <div className="row"  id="total_row2">
                    <div className="col" ><a href="#checkout" className="checkout_btn">Checkout</a></div>
                </div>


            </div>
        </form>

    )


    return (




        <div>
            <div className="topnav" id="myTopnav">
                <a className="header" href="#fulhausshop" >FULHAUS SHOP</a>
                <a className="cart" href="#cart" onClick={onClick}>CART</a>


            </div>
            {showResults ? <Results /> : null}


        </div>

    )
}



export default Header
