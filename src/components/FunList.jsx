import React from 'react';

const FunList=(props)=>{
    return(
        <div>
            <ol>
                <li>{props.name}</li>
                <li>{props.gender}</li>
                <li>{props.age}</li>     
            </ol>      
        </div>
    );
}

export default FunList;




