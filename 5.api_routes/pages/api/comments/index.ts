import {comments} from "../../../data/comments";

export default function handler(req, res) {

    if (req.method === 'GET') {
        return res.status(200).json(comments)
    }

    if (req.method === 'POST') {
        const comment = req.body.comment
        const payload = {
            text: comment,
            id: Date.now(),
        }
        comments.push(payload)
        return res.status(201).json(payload)
    }


}
