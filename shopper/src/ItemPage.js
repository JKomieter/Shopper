import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';
import Item from './Item';



function ItemPage({items, onAddToCart}) {
    return (
        <div>
            <ul className='Itempage-items'>
                {items.map(item=>
                    <li key={item.id} className="Itempage-item">
                        <Item item={item}>
                            <button
                                className='Item-addToCart'
                                onClick={()=> onAddToCart(item)}>
                                    Add to Cart
                                </button>
                        </Item>
                    </li> )}
            </ul>
        </div>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemPage;