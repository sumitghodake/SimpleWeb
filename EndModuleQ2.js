var exp=require('express');
var bp=require('body-parser');

var app=exp();
app.use(bp.urlencoded({extended: false})) 
app.listen(9000,function(){
    console.log("server started")
});

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/login.html");
})
app.post('/getDataTable',function(req,res){
    res.write("<table border=1>");
    res.write("<tr>");
    res.write("<td>"+req.body.n1+"</td>");
    res.write("<td>"+req.body.bdate+"</td>");
    res.write("<td>"+req.body.e1+"</td>");
    res.write("<td>"+req.body.q1+"</td>");
    res.write("</tr>");
    res.write("</table>");
    res.end();
    
})
app.all('*',function(req,res){
    res.send("Invalid URL");
})