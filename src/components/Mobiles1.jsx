import React from "react";
import MobileList1 from './MobileList1';

const Mobiles1=()=>{
    return(
        <div>
            <MobileList1 image="https://m.media-amazon.com/images/I/71FYSKYFupS._AC_UY327_FMwebp_QL65_.jpg" alt="Realme C11" name="Realme C11" price="Rs. 6,999"/><hr/>
            <MobileList1 image="https://m.media-amazon.com/images/I/71ZsMOcpePL._AC_UY327_FMwebp_QL65_.jpg" alt="Samsung Galaxy M32" name="Samsung Galaxy M32" price="Rs. 14,999"/><hr/>
            <MobileList1 image="https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY327_FMwebp_QL65_.jpg" alt="Redmi 9" name="Redmi 9" price="Rs. 8,999"/>
        </div>
        );   
}

export default Mobiles1;