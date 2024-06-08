import {useState} from 'react'
import styles from './AdminLogin.module.css';

 const AdminLogin = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleLogin = (e)=>{
      e.preventDefault();
  console.log({email,password});
  setEmail('');
  setPassword('');
  
    }


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

</form>
    </div>
  </div>
  )
}


export default AdminLogin;