const user=require('../model/user')

exports.addUSer=(req,res,next)=>{
    const email=req.body.email;
    const name=req.body.name;
    user.create({
        name:name,
        email:email
    }).then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
}