import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Index = () => {

    const router = useRouter()

    return (
        <div>
            <h1>
                This is Home page
            </h1>


            <nav>

                <div>
                    <Link href="/blog">Blog List</Link>

                    <ul>
                        <li>
                            <Link href="/blog/first">First Blog</Link>
                        </li>
                        <li>
                            <Link href="/blog/second">Second Blog</Link>
                        </li>
                    </ul>

                </div>

                <div>
                    <Link href="/products">Product List</Link>

                    <ul>
                        <li>
                            <Link href="/products/mobile">Mobile</Link>
                        </li>
                        <li>
                            <Link replace href="/products/any">Any</Link>
                        </li>

                        <li>
                            <span className="text-decoration-underline text-dark" onClick={() => {
                                router.push("/products/" + Math.random())
                            }}>
                                Programmatically Navigation to any product page
                            </span>
                        </li>

                        <li>
                            <h3>Review Pages</h3>

                            <ul>
                                <li>
                                    <Link href="/products/1/review/121">Any Specific Product Review</Link>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <h3>Caching Any Routes starts with /docs </h3>

                            <ul>
                                <li>
                                    <Link href="/docs/dummy">/docs/dummy </Link>
                                </li>
                                <li>
                                    <Link href="/docs/1/1/1/1/1/1/1?query=xyz">/docs/1/1/1/1/1/1/1?query=xyz </Link>
                                </li>
                            </ul>

                        </li>

                    </ul>

                </div>

            </nav>


        </div>
    );
};

export default Index;
