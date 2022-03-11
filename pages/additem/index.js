import Menu from '../component/menu'
import React from 'react';
import styles from './additem.module.css';
import { Power, ArrowLeft, Plus } from 'react-feather';
import { Link, TextField, Button, FormControlLabel, Switch, Snackbar } from '@material-ui/core';

export default function AddItem() {

  const [state, setState] = React.useState({
    Archive: true,
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/stock" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>List Of Items</p>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Item Name" variant="outlined" size="small" className='LoginInput' />                
              </div>
              <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} className={`${styles.AddEditBU}`}><Plus/> Add</Button>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Item Name"defaultValue="Reshmi" variant="outlined" size="small" className='LoginInput' />                
              </div>
              <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} className={`${styles.AddEditBU}`}><Plus/> Edit</Button>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button className={`${styles.LoginBU}`}><Plus/></Button>
              </div>
            </div>

            </div>
          </div>
        </div>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="New item added successfully"
          key={vertical + horizontal}
        />

    </div>
  )
}
