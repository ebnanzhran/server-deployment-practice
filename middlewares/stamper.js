
module.exports=(req,res,next)=>{
    req.timeStamp=new Date();
    next();  
    console.log('what after next');
  }



