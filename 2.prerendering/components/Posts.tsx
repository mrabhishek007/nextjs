import React from 'react';
import Link from "next/link";

const Posts = ({posts} : {posts : []}) => {



    return (
        <ul className="list-group">
            {
                posts.map(({id, title, body}) => (
                    <li className="list-group-item" key={id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{body}</p>
                                <Link href={`/posts/${id}`} className="card-link">Details</Link>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default Posts;
