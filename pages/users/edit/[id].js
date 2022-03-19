import React, { useEffect,useState } from 'react';
import styles from '../../users/adduser.module.css';
import { Power, ArrowLeft } from 'react-feather';
import { Link, TextField, Button, FormControlLabel, Switch, Snackbar } from '@material-ui/core';
import { useForm,Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Header from "../../component/header";

const postList = [
  {label:'Admin',value:'Admin'},
  {label:'Store Manager',value:'Store Manager'},
  {label:'Cook',value:'Cook'},
]

export default function EditUser() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors },setValue,control } = useForm();
  const [userCall,setUserCall] = useState(false);
  const [statusSw,setStatusSw] = useState(false);
  

  const [state, setState] = React.useState({
    Archive: true,
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const handleChange = (event) => {
    setStatusSw(event.target.checked);
  };

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };


  useEffect(() => {
    
    function fetchUser(){
      const { id } = router.query;

      setUserCall(true);
      axios.get(process.env.apiUrl+'v1/users/'+id)
      .then(res => {
        let resData = res.data.data;
        setUserCall(true);

        setValue('fullname',resData.fullname);
        setValue('emplyee_id',resData.emplyee_id);
        setValue('post',resData.post);
        setValue('contact_no',resData.contact_no);
        setValue('email',resData.email);
        setValue('area',resData.area);
        setValue('other',resData.other);
        setValue('status',resData.status);

        let stVal = (resData.status == 1)?false:true;
        setStatusSw(stVal);

      }).catch(err =>{
        setUserCall(false);
      });
    }

    if(!userCall){
      fetchUser();
    }

  });

  const onSubmit = data => {
    
    const { id } = router.query;
    axios.put(process.env.apiUrl+'v1/users/'+id,data)
    .then(res => {
      let newState = state;
      setState({ ...newState, open: true });
      router.push('/users/list');
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
              <Link href="/users/list" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Edit User</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className={(errors.fullname)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic1" label="Name" variant="outlined" size="small" className='LoginInput' {...register("fullname", { required: true })} />
                {errors.fullname && <p className="LoginErrorText">Name Can't Be Blank</p>}
                </div>
            </div>

            <div className={(errors.emplyee_id)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic2" label="Employee ID" variant="outlined" size="small" autoComplete='off' className='LoginInput'  {...register("emplyee_id", { required: true })} />
                {errors.emplyee_id && <p className="LoginErrorText">Employee ID Can't Be Blank</p>}
              </div>
            </div>

            <div className={(errors.post)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
              <Controller
                render={({ field }) => <Select {...field} id="outlined-basi99c" label="Post" variant="outlined" size="small" className='LoginInput' options={postList}
                value={postList.find(c => c.value === field.value)} onChange={val => field.onChange(val.value)} />  } {...register("post", { required: true })} control={control}
              />
                {errors.post && <p className="LoginErrorText">Post Can't Be Blank</p>}
              </div>
            </div>

            <div className={(errors.contact_no)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="tel" id="outlined-basic4" label="Contact No." variant="outlined" size="small" className='LoginInput'  {...register("contact_no", { required: true })} />
                {errors.contact_no && <p className="LoginErrorText">Contact Number Can't Be Blank</p>}
              </div>
            </div>

            <div className={(errors.email)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="email" id="outlined-basic5" label="Email" variant="outlined" size="small" className='LoginInput' {...register("email", { required: true })} />
                {errors.email && <p className="LoginErrorText">Email Can't Be Blank</p>}
              </div>
            </div>

            <div className={(errors.area)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic6" label="Area" variant="outlined" size="small" className='LoginInput' {...register("area", { required: true })} />
                {errors.area && <p className="LoginErrorText">Area Can't Be Blank</p>}
              </div>
            </div>

            {/* ************************Not maindate field************************ */}
            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic7" label="Other" variant="outlined" size="small" className='LoginInput'  {...register("other")} />
              </div>
            </div>
            {/* ************************Not maindate field************************ */}
{/*
            <div className={(errors.password)?`${styles.LoginInput} Error`:`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField type="password" id="outlined-basic8" label="Password" variant="outlined" size="small" className='LoginInput'  {...register("password", { required: true })} />
                {errors.password && <p className="LoginErrorText">Password Can't Be Blank</p>}
              </div>
            </div>
*/}
            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}
           {/* <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <FormControlLabel className="ToggleSwitch"
                  control={(statusSw)?<Switch  defaultChecked onChange={handleChange} color="primary" {...register("status")} />:<Switch onChange={handleChange} color="primary" {...register("status")} />}
                  label={(statusSw)?"Archive":"Active"}
                />

              </div>
            </div>*/}
            {/* ************************Only for Edit and add a snackbar message when user will archive************************ */}

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button type='submit' className="LoginBU">Edit User</Button>
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
          message="User Updated"
          key={vertical + horizontal}
        />

    </div>
    
  )
}
