import Menu from '../component/menu'
import React from 'react';
import styles from './stockupdate.module.css';
import { Power, ArrowLeft, Plus } from 'react-feather';
import { Link, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const menuList = [
  { title: 'Reshmi Kebab' },
  { title: 'Tikka Kebab' },
  { title: 'Hariyali Kebab' },
  { title: 'Boti Kebab' },
  { title: 'Peshwari Tangdi' }
];

export default function StockUpdate() {
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
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Stock Update</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserSubTitle}`}>Date: 14/03/2022</p>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Autocomplete className='LoginInput'
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Select Item" size="small" variant="outlined" />}
                />              
              </div>
              <div className={`${styles.InputAreaUnit}`}>
                <TextField id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Autocomplete className='LoginInput'
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Select Item" size="small" variant="outlined" />}
                />               
              </div>              
              <div className={`${styles.InputAreaUnit}`}>
                <TextField id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Autocomplete className='LoginInput'
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Select Item" size="small" variant="outlined" />}
                />               
              </div>              
              <div className={`${styles.InputAreaUnit}`}>
                <TextField id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Autocomplete className='LoginInput'
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Select Item" size="small" variant="outlined" />}
                />               
              </div>              
              <div className={`${styles.InputAreaUnit}`}>
                <TextField id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Autocomplete className='LoginInput'
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Select Item" size="small" variant="outlined" />}
                />               
              </div>              
              <div className={`${styles.InputAreaUnit}`}>
                <TextField id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button className={`${styles.LoginBU}`}><Plus/></Button>
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button className="LoginBU">Submit</Button>
              </div>
            </div>

            </div>
          </div>
        </div>

    </div>
  )
}
