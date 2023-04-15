import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const News = ({id, title, description, category}) => {

    const router = useRouter()
    const {pathname} = router

    return (
        <div className="card" key={id}>

            <div className="card-body">

                <h5 className="card-title text-dark">
                    {title}
                </h5>

                <Link
                    className="card-subtitle text-info"
                    href={`${pathname}/${category}`}
                >
                    {category}
                </Link>

                <p className="card-text">{description}</p>

            </div>

        </div>
    )


}

export default News

