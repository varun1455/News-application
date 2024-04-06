const express = require('express')

const app = express()
const dotenv = require('dotenv');
const cors = require('cors')

const newsroute = require('./fetchdata');

const corsoptions = {

    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
    methods:'GET',
}

app.use(cors(corsoptions));


dotenv.config();
app.use(express.json());





app.use('/', newsroute);





app.listen(process.env.BASE_URL, ()=>{
    console.log('server is starting')
})


