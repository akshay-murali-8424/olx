import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone]=useState('')
  const [error,setError]=useState('')
  const {firebase}=useContext(FirebaseContext)

  const handleSubmit=async(e)=>{
    try{
      e.preventDefault()
      const res=await firebase.auth().createUserWithEmailAndPassword(email,password)
      res.user.updateProfile({displayName:username})
      await firebase.firestore().collection('users').add({
        id:res.user.uid,
        username:username,
        phone:phone
      })
      history.push("/login")
    }catch(err){
      console.log(err.message)
      setError(()=>err.message)
    }
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fmail">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fmail"
           name="email"
          />
          <br />
          <label htmlFor="fphone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="fphone"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <p style={{color:"red"}}>{error}</p>
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
