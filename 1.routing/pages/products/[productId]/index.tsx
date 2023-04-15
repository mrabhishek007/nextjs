import React from 'react';
import {useRouter} from "next/router";

const Index = () => {

    const {query} = useRouter()

    const productId = query.productId

    return (
        <div>
            <h1>Details about product {productId}</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda dolorum enim esse modi odit
                quaerat quia quidem, ratione repellendus rerum sit. Esse ex minus molestiae necessitatibus soluta sunt,
                voluptatum.
            </p>

        </div>
    );
};

export default Index;
