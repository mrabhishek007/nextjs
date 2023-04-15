import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Comment = ({id, text, fetchComments}) => {

    const {pathname} = useRouter()


    const handleDelete = async () => {
        try {
            const res = await fetch(`api/comments/${id}`, {
                method : "DELETE",
            })
            const data = await res.json()
            console.log("Deleted Comments", data)
            fetchComments()
        }catch (e) {

        }finally {

        }
    }

    return (
        <div className="card">

            <div className="card-body">

                <p className="card-text">{text}</p>

                <div className="d-flex gap-2">
                    <Link
                        className="btn btn-info mt-3 btn-sm"
                        href={`${pathname}/${id}`}
                    >
                        Details
                    </Link>


                    <button
                        className="btn btn-danger mt-3 btn-sm"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>

            </div>

        </div>
    )

}

export default Comment

