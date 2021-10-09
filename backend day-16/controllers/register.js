const User = require('../models/mongo')
const bcrypt = require('bcrypt');

const saltRounds =10

const register=async(req,res)=>{
  const{email, password} = req.body;

  try{
        const alreadyExits= await User.findOne({where:{email}})

        if(alreadyExits)
        {
            res.status(401).send("Email already Exists")
        }
        
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            // Store hash in your password DB.

            const newUSer = new User({email:email.toLowerCase(), password:hash, fullName:"Bodhiswattwa"})

            const savedUser= await newUSer.save()
            res.status(201).send("User Registered")
    
  }
  catch(err){
      console.error(err)
      res.status(500).send("Something went Wrong")
  }
}

const registerSuperAdmin=async(req,res)=>{
    const{email, password} = req.body;
  
    try{
          const alreadyExits= await User.findOne({where:{email}})
  
          if(alreadyExits)
          {
              res.status(401).send("Email already Exists")
          }
          
              const salt = bcrypt.genSaltSync(saltRounds);
              const hash = bcrypt.hashSync(password, salt);
              // Store hash in your password DB.
  
              const newUSer = new User({email:email.toLowerCase(), password:hash, fullName:"Bodhiswattwa", role:"super-admin"})
  
              const savedUser= await newUSer.save()
              req.session.User = savedUser;
              res.status(201).send("User Registered")
      
    }
    catch(err){
        console.error(err)
        res.status(500).send("Something went Wrong")
    }
  }

module.exports= {register, registerSuperAdmin}