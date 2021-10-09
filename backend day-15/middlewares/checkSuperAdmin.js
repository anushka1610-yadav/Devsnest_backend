const check=(req,res,next)=>{
    if(req.session.User.role==="Super-admin"){
        next()
    }
    else{
        res.status(401).send("You dont have admin access")
    }
}

module.exports = check