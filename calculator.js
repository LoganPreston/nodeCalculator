const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
	console.log(req.body);
	var num1=Number(req.body.num1);
	var num2=Number(req.body.num2);
	res.send("Result of that calculation is "+(num1+num2));
});

app.get("/bmiCalculator",function(req,res){
	res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
	var wt=parseFloat(req.body.wt);
	var ht=parseFloat(req.body.ht);
	var bmi=Math.round(wt/Math.pow(ht,2)*10)/10.0;
	res.send("Your BMI is: "+bmi);

});

app.listen(3000);
