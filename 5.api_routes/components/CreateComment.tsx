import React, {useState} from 'react';

const CreateComment = ({fetchComments}) => {


    const [comment, setComment] = useState('')


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const res = await fetch('api/comments', {
                method : "POST",
                body : JSON.stringify({comment}),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            const data = await res.json()
            console.log("Created Comments", data)
            setComment('')
            fetchComments()
        }catch (e) {

        }finally {

        }
    }


    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Create Comment</label>
                <textarea
                    onChange={e => setComment(e.target.value)}
                    value={comment}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>

        </form>
    )
};

export default CreateComment;
