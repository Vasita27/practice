/*
import { useState } from 'react';

function App(){
	const [name , setName] =useState('');
	const [email , setEmail] =useState('');
	const [acad , setacad] =useState('');
	const handleOnSubmit=async(e)=>{
		e.preventDefault();
		let result= await fetch(
			'http://localhost:5000/register',{
			method:'post',
			body:JSON.stringify({name ,email , acad}),
		headers:{
			'Content-Type':'application/json'
		}}
		)
    try{
		result= await result.json();
		console.warn(result);
		if(result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
			setacad("");
		}}
    catch(e){
      alert("Email address or academic details already exist");
      setEmail("");
			setName("");
			setacad("");
    }


	}

	return (
		<>
			<h1>This is student's enquiry form </h1>
			<form action="">
				<input type="text" placeholder="name" name="name"
				value={name} onChange={(e) => setName(e.target.value)} /> <br/> <br/>
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} /> <br/> <br/>
				<textarea type="text" placeholder="Enter academic details"
				value={acad} onChange={(e) => setacad(e.target.value)} /> <br/> <br/>
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default App;*/
import {useState} from 'react';

function App(){
	const [name,setName]=useState('');
	const [email,setEmail]=useState('');
	const [acad,setacad]=useState('');

	const handle=async (e)=>{
		e.preventDefault();
		let result=await fetch('https://practice-nu-flame.vercel.app/',{
			method:'post',
			body:JSON.stringify({name, email ,acad}),
			headers:{
				'Content-Type':'application/json'
			}
		})

		try{
			result=await result.json();
			if(result){
				alert('data saved');
				setEmail('');
				setName('');
				setacad('');
			}

		}
		catch(e){
			alert("invalid details");
			setEmail('');
			setName('');
			setacad('');
		}
	}

	return (
		<form action=''>
			<input type='text' name='name' value={name} placeholder='namevasitapuppala' onChange={(e)=>{
				setName(e.target.value)
			}}/>
			<input type='emai;' name='email' value={email} placeholder='email' onChange={(e)=>{
				setEmail(e.target.value)
			}}/>
			<textarea name='acad' value={acad} placeholder='acad' onChange={(e)=>{
				setacad(e.target.value)
			}}/>
			<button onClick={handle}>Submit</button>
		</form>
	);

}
export default App;