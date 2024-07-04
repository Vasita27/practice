
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'yourDB',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) : 
	console.log('Connected to yourDB-name database'));
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	acad:{
		type:String,
		required: true,
		unique: true,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 3000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    console.log(req.query.name);
	resp.send("App is Working");
});

app.post("/", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
*/
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/',{
	dbName:'YourDbs',
	useNewUrlParser:true,
	useUnifiedTopology:true
},err=>err?console.log('error'):console.log('Connected'));

const UserSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	acad:{
		type:String,
		required:true,
		unique:true
	}
});

const User=mongoose.model('users',UserSchema);
User.createIndexes();
const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());

app.post('/', async (req,resp)=>{
	try{
	const user=new User(req.body);
	let  result=await user.save();
	result=result.toObject();
	if(result){
		resp.send(req.body);
	}
	else{
		console.log("User already register");
	}}
	catch(e){
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);