import React from 'react';
import Posts from "../../components/Posts";

const Index = ({posts}: { posts: any }) => {
    return (
        <div className="container">
            <h1>Posts List</h1>

            <Posts posts={posts}/>

        </div>
    );
};

export default Index;

// Only runs on server side
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log("Post List data", data)
    return {
        props: {
            posts: data
        }
    }
}
