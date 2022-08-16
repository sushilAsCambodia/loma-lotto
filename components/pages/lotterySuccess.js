import React from 'react';

function lotterSuccess(props){

    return(
        <>
         <div className="alert alert-success" role="alert">
           <p> Thank You , i have accsepted your request.</p>
           <p> Referance ID : {props.refeId} .</p>
         
        </div>
        </>
    )

}