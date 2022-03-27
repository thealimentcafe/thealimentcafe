import  { useEffect } from "react";
import styles from './login.module.css';
import { TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const userDet = localStorage.getItem("userDet");

  useEffect(() => {
    if(userDet){
      history.push('/dashboard');
    }
  });

  const onSubmit = data => {
    axios.post(process.env.REACT_APP_APIURL+'v1/login',data)
    .then(res => {
      localStorage.setItem('userDet', JSON.stringify(res.data.data));
      history.push("/dashboard");
    }).catch(err =>{
      console.log(err.response.data);
    });
  };

  return (
    <div className={`${styles.LoginBody}`}>
      <img src="/img/login-bg.png" alt="background" className={`${styles.LoginBG}`} />

      <div className={`${styles.LoginSec}`}>
        <img src="/img/logo.svg" alt="logo" className={`${styles.LoginLogo}`} />
        <div className={`${styles.LoginArea}`}>
          <p className={`${styles.Title}`}>LogIn</p>
          <p className={`${styles.SubTitle}`}>Please sign in to continue</p>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div className={(errors.email)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <TextField type="email" id="outlined-basic5" label="User Email" variant="outlined" size="small" className='LoginInput'  {...register("email", { required: true })} autoComplete="off"/>
              {errors.email && <p className="LoginErrorText">Email Can&apos;t Be Blank</p>}
            </div>
          </div>

          <div className={(errors.password)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <TextField type="password" id="outlined-basic" label="Password" variant="outlined" size="small" className='LoginInput' {...register("password", { required: true })} autoComplete="off" />
              {errors.password && <p className="LoginErrorText">Password Can&apos;t Be Blank</p>}
            </div>
          </div>

          <div className={`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <Button type="submit" className="LoginBU">Go</Button>
            </div>
          </div>

          </form>

        </div>
      </div>
    </div>
  )
}
