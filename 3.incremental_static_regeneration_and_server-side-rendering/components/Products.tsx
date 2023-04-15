import React from 'react';
import Link from "next/link";

const Products = ({products} : {products : []}) => {

    return (
        <ul className="list-group">
            {
                products.map(({id, title, price, descriptionj}) => (
                    <li className="list-group-item py-4" key={id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-subtitle">$ {price}</p>
                                <p className="card-text">{descriptionj}</p>
                                <Link href={`/products/${id}`} className="card-link">Details</Link>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default Products;
