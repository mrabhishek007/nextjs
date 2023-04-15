export default function handler(req, res) {

    const params = req.query.params
    console.log("Params", params)
    return res.status(200).json(params)

}

