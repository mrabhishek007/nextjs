import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";


const PostDetails = ({postDetails}: { postDetails: any }) => {

    const {query, isFallback} = useRouter()
    const {postId} = query


    if (isFallback) return <h1 className="container">Loading....</h1>

    const {title, body} = postDetails

    return (
        <div className="container">
            <h1>Post Details of {postId}</h1>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>

            <Link href="/posts" className="btn btn-primary">Back</Link>

        </div>
    );
};

export default PostDetails;


// PostID with 1-5 will be generated at the build time
export async function getStaticPaths() {

    const pathList = []

    for (let i = 1; i <= 5; i++) {
        pathList.push({
            params: {
                postId: i + ""
            }
        })
    }


    return {
        paths: pathList,

        // fallback: false
        //  When fallback is false getStaticPaths will be rendered to HTML at build time by getStaticProps. If path not matched fallback would be 404 page

        fallback: true,
        //  fallback: true
        //  When fallback is true the non matched path (Path which is not returned by getStaticProps) will not result at 404 page
        //  instead next js will serve fallback version of the page on the first request for example: Here loading... will appear
        // In the background nextjs will statically generate the requested path html & json by running getStaticProps.
        // When the data is fetched the json will be populated with the fallback content.
        // Now new subsequent requests to the same path will serve the generated page just like other pages generated at the build time
        // Ex : When we don't know about no of blogs available then this options would be utilized
        // In above example Post Id 1-5 will be generated at build time while other post will be generated dynamically once user visit page for the first time

        // fallback : "blocking"
        // This is similar to fallback true but instead showing fallback ui , the browser will transition from requesting the page to the "the full page" is loaded.
        // There is no flash of loading/fallback state

    }

}


// Only runs on server side
export async function getStaticProps(context: any) {

    const {params} = context
    const {postId} = params


    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    const data = await response.json()

    // If no data available in server return Not found page
    if(!data.id) return {
        notFound : true
    }

    console.log(`Post Details for ${postId}`, data)
    return {
        props: {
            postDetails: data
        }
    }
}

