import React from 'react';
import {useRouter} from "next/router";

const Index = () => {

    const {query} = useRouter()


    return (
        <h1>
            Product List page
        </h1>
    );
};

export default Index;
