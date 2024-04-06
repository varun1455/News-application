const router = require("express").Router();

const axios = require('axios');

router.get('/newsapi/:category', async (req, res)=>{

    const {category} = req.params

    try{

        const resdata = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=50&apiKey=${process.env.NEWS_API_KEY}`)
        const data = resdata.data
        // console.log(data)

        res.status(201).send(data);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

