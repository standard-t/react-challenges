import { useState } from 'react';
import { Button } from 'react-bootstrap';

const initialItems = [
    { id: 1, name: 'T-Shirt', quantity: 0 },
    { id: 2, name: 'Jeans', quantity: 0 },
    { id: 3, name: 'Shoes', quantity: 0 }
];


export default function Shopping() {
    const [items, setItems] = useState(initialItems);

    const handleAdd = (itemID: any) => {
        setItems(currentItems => currentItems.map(item => itemID === item.id ? { ...item, quantity: item.quantity + 1 } : item)
        );
    };


    const handleRemove = (itemID: any) => {
        setItems(currentItems => currentItems.map(item => itemID === item.id ? { ...item, quantity: item.quantity - 1 } : item)
        )
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div>
            <h2>Shopping Cart</h2>
            <br />
            <h4 data-testid="total">Total Items: {totalItems}</h4>
            <div>
                {items.map(item => (
                    <div key={item.id} data-testid={`item-${item.id}`}>
                        <span>{item.name}</span>
                        <span>Quantity: {item.quantity}</span>
                        <Button onClick={() => handleRemove(item.id)} className='btn-danger m-1'
                            data-testid={`remove-${item.id}`}
                            disabled={item.quantity === 0}
                        >
                            -
                        </Button>
                        <Button onClick={() => handleAdd(item.id)} className='btn-success m-1'
                            data-testid={`add-${item.id}`}
                        >
                            +
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}