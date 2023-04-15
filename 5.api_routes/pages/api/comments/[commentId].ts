import {comments} from "../../../data/comments";

export default function handler(req, res) {

    const {commentId} = req.query

    if (req.method === 'GET') {
        const comment = comments.find(({id}) => id === parseInt(commentId))
        return res.status(200).json(comment)
    }

    if (req.method === 'DELETE') {

        const deletedComment = comments.find(({id}) => id === parseInt(commentId))
        const deletedCommentIndex = comments.findIndex(({id}) => id === parseInt(commentId))
        comments.splice(deletedCommentIndex, 1)

        return res.status(200).json(deletedComment)
    }


}
