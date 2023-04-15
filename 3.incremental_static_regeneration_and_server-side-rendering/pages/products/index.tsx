import React from 'react';
import Products from "../../components/Products";
import Link from "next/link";
import Layout from "../../components/Layout";

const Index = ({products}: { products: any }) => {
    return (
        <Layout>

            <Link className='mb-5 btn btn-primary' href='/'>Home</Link>

            <h1 className="mb-3">Products List</h1>

            <Products products={products}/>

        </Layout>
    );
};

export default Index;

// Only runs on server side
export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    console.log("Product List data", data)
    return {
        props: {
            products: data,
            revalidate: 30
        }
    }
}
