import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";

const Comments = () => {

        const [comments, setComments] = useState([])
        const [loading, setLoading] = useState(true)


        const fetchComments = async () => {
            try {
                setLoading(true)
                const response = await fetch('/api/comments')
                const data = await response.json()
                setComments(data)
            } catch (e) {

            } finally {
                setLoading(false)

            }
        }

        useEffect(() => {
            fetchComments()
        }, [])


        return (
            <Layout>

                <h1>Comments List</h1>


                <CreateComment
                    fetchComments={fetchComments}
                />


                {
                    loading

                        ?

                        <Loader/>

                        :

                        comments.map(comment => <Comment fetchComments={fetchComments} key={comment.id} {...comment}/>)

                }


            </Layout>
        );
    }
;

export default Comments;
