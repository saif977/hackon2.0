exports.getHomePage=(req,res,next)=>{
    res.render("home",{
        pageTitle : "home",
        path : "/"
    });
}

exports.getDonatePage=(req,res,next)=>{
    res.render('donor',{
        pageTitle : "donate",
        path : "/donate"
    });
}