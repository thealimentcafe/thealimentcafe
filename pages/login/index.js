import Menu from '../component/menu'
import styles from './login.module.css';
import { Camera } from 'react-feather';
import { TextField, Button } from '@material-ui/core';

export default function Login() {
  return (
    <div className={`${styles.LoginBody}`}>
      <img src="/img/login-bg.png" className={`${styles.LoginBG}`} />

      <div className={`${styles.LoginSec}`}>
        <img src="/img/logo.svg" className={`${styles.LoginLogo}`} />
        <div className={`${styles.LoginArea}`}>
          <p className={`${styles.Title}`}>LogIn</p>
          <p className={`${styles.SubTitle}`}>Please sign in to continue</p>

          <div className={`${styles.LoginInput} Error`}>
            <div className={`${styles.InputArea}`}>
              <TextField id="outlined-basic" label="User Name" variant="outlined" size="small" className='LoginInput' />
              <p className="LoginErrorText">Invalid User Name</p>
            </div>
          </div>

          <div className={`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <TextField type="password" id="outlined-basic" label="Password" variant="outlined" size="small" className='LoginInput' />
              <p className="LoginErrorText">Invalid Password</p>
            </div>
          </div>

          <div className={`${styles.LoginInput}`}>
            <div className={`${styles.InputArea}`}>
              <Button className="LoginBU">Go</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
