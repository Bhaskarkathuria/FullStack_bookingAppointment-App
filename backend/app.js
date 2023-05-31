const express=require('express');
const sequelize=require('./config/database')
const bodyParser = require('body-parser');
const adminRoute=require('./routes/admin')
const app = express();
const cors=require('cors')
app.use(cors())

app.use(bodyParser.json());



app.get('/',(req,res,next)=>{
    res.send('Created');
    
})
app.use('/bookings',adminRoute)

sequelize.sync()
.then(result=>{
    app.listen(5000)
})
.catch(err=>{
    console.log(err)
})
