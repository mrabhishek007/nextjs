import React from 'react';
import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout >
            <h1 className="mb-3">Next JS Pre Rendering</h1>

            <ul className="list-group">
                <li className="list-group-item">
                    <Link href='/products'>Products</Link>
                </li>
                <li className="list-group-item">
                    <Link href='/news'>News</Link>
                </li>
            </ul>
        </Layout>
    );
};

export default Index;
