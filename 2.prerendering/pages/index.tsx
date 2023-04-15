import React from 'react';
import Link from "next/link";

const Index = () => {
    return (
        <div className="container">
            <h1>Next JS Pre Rendering</h1>

            <ul className="list-group">
                <li className="list-group-item">
                    <Link href='/users'>Users Page</Link>
                </li>
                <li className="list-group-item">
                    <Link href='/posts'>Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Index;
