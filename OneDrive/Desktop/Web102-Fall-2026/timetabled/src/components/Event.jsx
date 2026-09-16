import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event} {props.image}</h5>
            <h6>{props.address}</h6>
            
        </td>
    )
}


export default Event