const express = require('express')

const app = express()
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors')

const corsoptions = {

    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
    methods:'GET',
}

app.use(cors(corsoptions));


dotenv.config();
app.use(express.json());





app.get('/newsapi/:category', async (req, res)=>{

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





app.listen(process.env.BASE_URL, ()=>{
    console.log('server is starting')
})


