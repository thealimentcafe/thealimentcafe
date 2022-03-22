import styles from './login.module.css';
import { Camera } from 'react-feather';
import { TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    axios.post(process.env.apiUrl+'v1/login',data)
    .then(res => {
      localStorage.setItem('userDet', JSON.stringify(res.data.data));
      router.push('/home');
    }).catch(err =>{
      console.log(err.response.data);
    });
  };

  return (
    <div className={`${styles.LoginBody}`}>
      <img src="/img/login-bg.png" className={`${styles.LoginBG}`} />

      <div className={`${styles.LoginSec}`}>
        <img src="/img/logo.svg" className={`${styles.LoginLogo}`} />
        <div className={`${styles.LoginArea}`}>
          <p className={`${styles.Title}`}>LogIn</p>
          <p className={`${styles.SubTitle}`}>Please sign in to continue</p>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div className={(errors.email)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <TextField type="email" id="outlined-basic5" label="User Email" variant="outlined" size="small" className='LoginInput'  {...register("email", { required: true })} />
              {errors.email && <p className="LoginErrorText">Email Can&apos;t Be Blank</p>}
            </div>
          </div>

          <div className={(errors.password)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <TextField type="password" id="outlined-basic" label="Password" variant="outlined" size="small" className='LoginInput' {...register("password", { required: true })} />
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
