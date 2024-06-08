import React, { useState } from 'react';
import styles from './Form.module.css';


const Form = ({ activeTab ,onTabChange}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = (e)=>{
    e.preventDefault();
console.log({email,password});
setEmail('');
setPassword('');

  }

  const handleSignUp = (e)=>{
    e.preventDefault();
    console.log({name,number,email,password});
    setEmail('');
    setName('');
    setNumber('');
    setEmail('');
setPassword('');

      }




  
  if (activeTab === 'login') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
        <form>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control"   name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <div  class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={(e)=>{handleLogin(e)}} >Submit</button>
  <p>Not registered yet? <strong onClick={() => onTabChange('signup')} className={styles.clickHere}>Sign up here</strong></p>
</form>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div  className={styles.form}>
        <form>
        <div class="mb-3">
    <label  class="form-label">Name</label>
    <input type="email" class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Mobile number</label>
    <input type="email" class="form-control" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
    
  </div>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={(e)=>{handleSignUp(e)}} >Submit</button>
  <p>Already signed up? <strong onClick={() => onTabChange('login')} className={styles.clickHere}>Log in here</strong>.</p>
  
</form>
          </div>
      </div>
    );
  }
};

export default Form;
