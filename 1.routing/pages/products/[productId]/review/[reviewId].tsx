import React from 'react';
import {useRouter} from "next/router";

const ReviewId = () => {

    const {query} = useRouter()
    const {reviewId, productId} = query

    return (
        <div>
                <h1>Review Page for Product : {productId}</h1>

                 <h2>Review Id is {reviewId}</h2>

        </div>
    );
};

export default ReviewId;
