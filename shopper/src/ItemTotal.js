import React from "react";
import PropTypes from 'prop-types';



function ItemTotal({items}) {
    console.log(items.length)
    const total = items.reduce((total, item)=> {
        total += item.price 
        return total
    }, 0)

    return (
        <span className="itemTotal">Total: ${total}</span>
    )
}

ItemTotal.propTypes = {
    items: PropTypes.array.isRequired
}

export default ItemTotal;