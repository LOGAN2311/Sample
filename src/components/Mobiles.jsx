import React from 'react';
import MobileList from './MobileList';

const Mobiles=()=>{
    return(
        <div>
            <MobileList image="https://m.media-amazon.com/images/I/71FYSKYFupS._AC_UY327_FMwebp_QL65_.jpg" name="Realme C11" price="Rs. 6,999"/><hr/>
            <MobileList image="https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_UY327_FMwebp_QL65_.jpg" name="Samsung Galaxy M32" price="Rs. 14,999"/><hr/>
            <MobileList image="https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY327_FMwebp_QL65_.jpg" name="Redmi 9" price="Rs. 8,999"/><hr/>
        </div>
    );
}

export default Mobiles;
