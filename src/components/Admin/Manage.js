import React, { useEffect, useState } from 'react';
import Admin from './Admin';

const Manage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    const handleDelete = (id) => {
        fetch('http://localhost:5055/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete')
            })
    }

    return (
        <div>
        <Admin />
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map(product =>
                    <tr>
                        <th scope="row">{product.car}</th>
                        <td>${product.price}</td>
                        <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>

    </div>
    );
};

export default Manage;