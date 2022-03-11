import Menu from '../component/menu'
import React from 'react';
import styles from './addorder.module.css';
import { Power, ArrowLeft, Plus } from 'react-feather';
import { Link, TextField, Button, FormControlLabel, Checkbox, Radio, RadioGroup } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const menuList = [
  { title: 'Reshmi Kebab' },
  { title: 'Tikka Kebab' },
  { title: 'Hariyali Kebab' },
  { title: 'Boti Kebab' },
  { title: 'Peshwari Tangdi' }
];

export default function AddOrder() {

  const [state, setState] = React.useState({
    payment: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState('cash');
  const handleChange2 = (event) => {
    setValue(event.target.value);
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
              <Link href="/order" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Take Order</p>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Name" variant="outlined" size="small" className='LoginInput' />             
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
                <TextField id="outlined-basic" label="Offer" variant="outlined" size="small" className='LoginInput' />             
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <p className={`${styles.TakeOrderText}`}>Total: 250</p>           
              </div>
            </div>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <FormControlLabel className="CheckBox"
                  control={
                    <Checkbox
                      checked={state.payment}
                      onChange={handleChange}
                      name="payment"
                      color="primary"
                    />
                  }
                  label="Paid"
                />           
              </div>
              <div className={`${styles.CheckboxSec}`}>
                <RadioGroup className="CheckboxGroup" aria-label="paymentMethod" name="paymentMethod" value={value} onChange={handleChange2}>
                  <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                  <FormControlLabel value="online" control={<Radio />} label="Online" />
                </RadioGroup>
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
