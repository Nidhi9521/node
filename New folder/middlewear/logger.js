const logger = (req,res,next)=>{
    console.log(`logged  ${req.url} ${req.method}`)
    next();
}

module.exports = logger;

