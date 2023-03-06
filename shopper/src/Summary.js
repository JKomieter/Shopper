import React from "react";
import PropTypes from 'prop-types';


function Summary({items}) {
    const total = items.reduce((total, item)=> {
        total += item.price 
        return total
    }, 0)


    return (
        <span className="summary">
            <span class="material-symbols-outlined">
                shopping_cart
            </span> {items.length} items 
            ${total}
        </span>
    )
}

Summary.protoTypes = {
    items: PropTypes.array.isRequired
}

export default Summary;