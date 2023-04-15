import React from 'react';
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import Loader from "../../components/Loader";
import {useRouter} from "next/router";
import Link from "next/link";

const CommentDetail = ({comment}) => {

        const {query, isFallback} = useRouter()
        const {commentId} = query


        return (
            <Layout>

                <Link href="/comments">Back</Link>


                <h1>Comment Details for: {commentId}</h1>


                {
                    isFallback ?

                        <Loader/>

                        :
                        <Comment {...comment}/>

                }


            </Layout>
        );
    }
;

export default CommentDetail;


// CommentID with 1-3 will be generated at the build time
export async function getStaticPaths() {

    const pathList = []

    for (let i = 1; i <= 3; i++) {
        pathList.push({
            params: {
                commentId: i + ""
            }
        })
    }


    return {
        paths: pathList,
        fallback: true,
        //  fallback: true
        //  When fallback is true the non matched path (Path which is not returned by getStaticProps) will not result at 404 page
        //  instead next js will serve fallback version of the page on the first request for example: Here loading... will appear
        // In the background nextjs will statically generate the requested path html & json by running getStaticProps.
        // When the data is fetched the json will be populated with the fallback content.
        // Now new subsequent requests to the same path will serve the generated page just like other pages generated at the build time
    }

}


// Only runs on server side
export async function getStaticProps(context: any) {

    const {params} = context
    const {commentId} = params


    // Calling own apis is not recommended in getStaticProps & getServerSideProps. Instead same logic can be used here
    // in order to avoid extra delay in next js request response server handling
    const response = await fetch('http://localhost:3000/api/comments/' + commentId)
    const data = await response.json()

    console.log(`Comment Details for ${commentId}`, data)


    // If no data available in server return Not found page
    if (!data?.id) return {
        notFound: true
    }

    return {
        props: {
            comment: data
        }
    }
}
