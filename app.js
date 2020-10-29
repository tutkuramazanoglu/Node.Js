const express=require("express");
const app=express();

const request=require("request")
app.listen(2000,()=>{
    console.log("app is runnig port 2000.");
});

app.get("/pictures/:pgNumber",(req,res)=>{
    const pgNumber=req.params.pgNumber;
    console.log(pgNumber);
    // res.render("pics.ejs");


request("https://api.unsplash.com/photos/?client_id=0lQnFWpu5blQIsyh6x6zndGynPLNspZSq1UAr8H7ljM&page="+pgNumber,(error,response,body)=>{
    if(error){
        console.log(error);
    }

    else{
        // console.log(response.statusCode);  //200 means susccessful
        // console.log(body) // it expalains data as a string but we need json
        //create a variable if no error
        const data=JSON.parse(body)
        //console.log(data[0].created_at);
        res.render("pics.ejs",{

            mypics:data
        });

    
    }
}); //uri:string,callback func(error,response,body)

});  //take routes