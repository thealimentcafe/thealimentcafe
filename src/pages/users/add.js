import React from 'react';
import styles from './adduser.module.css';
import { ArrowLeft } from 'react-feather';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useForm ,Controller} from "react-hook-form";
import axios from 'axios';
import Select from 'react-select';
import Header from "../../components/header";
import withAuth from "../../components/withAuth";
import { useHistory,Link } from "react-router-dom";


const postList = [
  {label:'Admin',value:'Admin'},
  {label:'Store Manager',value:'Store Manager'},
  {label:'Cook',value:'Cook'},
]

function AddUser() {
  let history = useHistory();
  const { register, handleSubmit, formState: { errors },control } = useForm();
  

  const [state, setState] = React.useState({
    Archive: true,
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onSubmit = data => {
    axios.post(process.env.REACT_APP_APIURL+'v1/users',data)
    .then(res => {
      let newState = state;
      setState({ ...newState, open: true });
      history.push('/users/list');
    }).catch(err =>{
      console.log(err);
    });
  };

  return (
    <div className="PageBody">

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
            <div className={`${styles.BodyHeadArea}`}>
              <Link to="/users/list" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Add User</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className={(errors.fullname)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic1" label="Name" variant="outlined" size="small" className='LoginInput' {...register("fullname", { required: true })} />
                {errors.fullname && <p className="LoginErrorText">Name Can&apos;t Be Blank</p>}
                </div>
            </div>

            <div className={(errors.emplyee_id)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic2" label="Employee ID" variant="outlined" size="small" autoComplete='off' className='LoginInput'  {...register("emplyee_id", { required: true })} />
                {errors.emplyee_id && <p className="LoginErrorText">Employee ID Can&apos;t Be Blank</p>}
              </div>
            </div>

            <div className={(errors.post)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Controller
                render={({ field }) => <Select {...field} id="outlined-basi99c" label="Post" variant="outlined" size="small" className='LoginInput SelectForm' options={postList}
                value={postList.find(c => c.value === field.value)} onChange={val => field.onChange(val.value)} />  } {...register("post", { required: true })} control={control}
              />
              {errors.post && <p className="LoginErrorText">Post Can&apos;t Be Blank</p>}
              </div>

              
            </div>

            <div className={(errors.contact_no)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="tel" id="outlined-basic4" label="Contact No." variant="outlined" size="small" className='LoginInput'  {...register("contact_no", { required: true })} />
                {errors.contact_no && <p className="LoginErrorText">Contact Number Can&apos;t Be Blank</p>}
              </div>
            </div>

            <div className={(errors.email)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="email" id="outlined-basic5" label="Email" variant="outlined" size="small" className='LoginInput' {...register("email", { required: true })} />
                {errors.email && <p className="LoginErrorText">Email Can&apos;t Be Blank</p>}
              </div>
            </div>

            <div className={(errors.area)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic6" label="Area" variant="outlined" size="small" className='LoginInput' {...register("area", { required: true })} />
                {errors.area && <p className="LoginErrorText">Area Can&apos;t Be Blank</p>}
              </div>
            </div>

            {/* ************************Not maindate field************************ */}
            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic7" label="Other" variant="outlined" size="small" className='LoginInput'  {...register("other")} />
              </div>
            </div>
            {/* ************************Not maindate field************************ */}

            <div className={(errors.password)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="password" id="outlined-basic8" label="Password" variant="outlined" size="small" className='LoginInput'  {...register("password", { required: true })} />
                {errors.password && <p className="LoginErrorText">Password Can&apos;t Be Blank</p>}
              </div>
            </div>

            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}
            {/*<div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <FormControlLabel className="ToggleSwitch"
                  control={<Switch checked={state.Archive} onChange={handleChange} name="Archive" color="primary" />}
                  label="Archive"
                />
              </div>
  </div>*/}
            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button type='submit' className="LoginBU">Add User</Button>
              </div>
            </div>

            </form>

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

export default withAuth(AddUser);