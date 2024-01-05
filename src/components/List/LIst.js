import React, { useState } from 'react';


const products =[
    {
        'name': 'szampon',
        'price': '21,37'
    },
    {
        'name': 'woda',
        'price': '2,37'
    },
    {
        'name': 'kredki',
        'price': '12,37'
    },
    {
        'name': 'zdjecie',
        'price': '21,37'
    },
]

function List(){
    const [items, setItems] = useState([]);
    const [itemsIndex, setItemsIndex] = useState(0);

    
    function addItem(){
        let product = products[itemsIndex];
        setItemsIndex(itemsIndex+1);
        setItems([...items,product])

    }


    return (
        <>
            <button onClick={addItem} disabled={products.length == itemsIndex}>add item</button>
            <ul>
                {items.map((product) => 
                    (<li >
                        <p>{product.name} {product.price}</p>
                    </li>)
                )}
            </ul>
        </>
    )
}

export default List;
