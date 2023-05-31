const express = require('express');
const router=express.Router();
const sequelize=require('../config/database');
const user=require('../model/user');


router.post('/',(req,res,next)=>{
    user.create({
        name: req.body.name,
        email: req.body.email
    })
    .then(users=>{
        res.sendStatus(200).send('User Created')
    })
    .catch(err=>{console.log(err)})
})

router.get('/',(req,res,next)=>{
    user.findAll().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/:id',(req,res,next)=>{
    user.findAll().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

module.exports=router;