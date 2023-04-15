import React from 'react';
import News from "../../components/News";
import Layout from "../../components/Layout";


const Index = ({articles}) => {


    return (

        <Layout>

            <h1>List of News Articles </h1>

            {articles.map((news) => <News {...news} key={news.id}/>)}
        </Layout>

    )
}

export default Index;

// Only runs on server side
export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()

    console.log("PreRendering News Article List")

    return {
        props: {
            articles: data
        }
    }

}
