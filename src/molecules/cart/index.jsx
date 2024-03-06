import { useState } from 'react';
import Icon from '../../atoms/Icon'
import { Link } from 'react-router-dom'

const Cart = ({num})=> {
   
    
    return(

        <div className="cart" >
            <Link to='/cart'>

           <Icon classText='bx bx-cart'/>
           </Link>
           <div className="cart-entry" >{num.length}</div>
          
        </div>

    )
}

export default Cart;

