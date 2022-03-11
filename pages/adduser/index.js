import Menu from '../component/menu'
import React from 'react';
import styles from './adduser.module.css';
import { Power, ArrowLeft } from 'react-feather';
import { Link, TextField, Button, FormControlLabel, Switch, Snackbar } from '@material-ui/core';

export default function AddUser() {
  const [state, setState] = React.useState({
    Archive: true,
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className="PageBody">

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/user" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Subhankar Mondal</p>
            </div>

            <div className={`${styles.LoginInput} Error`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Name" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Name Can't Be Blank</p>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Employee ID" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Employee ID Can't Be Blank</p>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Post" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Post Can't Be Blank</p>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="number" id="outlined-basic" label="Contact No." variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Contact Number Can't Be Blank</p>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Email" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Email Can't Be Blank</p>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Area" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Area Can't Be Blank</p>
              </div>
            </div>

            {/* ************************Not maindate field************************ */}
            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Other" variant="outlined" size="small" className='LoginInput' />
              </div>
            </div>
            {/* ************************Not maindate field************************ */}

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" size="small" className='LoginInput' />
                <p className="LoginErrorText">Password Can't Be Blank</p>
              </div>
            </div>

            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}
            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <FormControlLabel className="ToggleSwitch"
                  control={<Switch checked={state.Archive} onChange={handleChange} name="Archive" color="primary" />}
                  label="Archive"
                />
              </div>
            </div>
            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} className="LoginBU">Add/Edit User</Button>
              </div>
            </div>

            </div>
          </div>
        </div>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="New User Added"
          key={vertical + horizontal}
        />

    </div>
    
  )
}
