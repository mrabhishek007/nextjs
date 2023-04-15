import React from 'react';
import Layout from "../../components/Layout";
import News from "../../components/News";

const ArticleListByCategory = ({articles, category}) => {


    return (
        <Layout>

            <h1>Showing News for Category: {category}</h1>

            {articles.map(article => <News {...article} key={article.id}/>)}


        </Layout>
    );
};

export default ArticleListByCategory;


// Only runs on server side
export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    const {category} = params

    console.log("Cookies", req.headers.cookie)
    console.log("Req Params", query)
    console.log("Params", params)

    res.setHeader("Set-Cookie", ['name=Abhishek'])

    console.log("PreRendering News Article Details Page:", category)



    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }

}
