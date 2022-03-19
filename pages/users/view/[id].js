import React, { useEffect,useState } from 'react';
import styles from './viewuser.module.css';
import { Power, User, Briefcase, ArrowLeft, Phone, Mail, Navigation, Disc, Lock, Bookmark } from 'react-feather';
import { Link, Button } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from "../../component/header";


export default function ViewUsers() {
  const router = useRouter();
  const [userCall,setUserCall] = useState(false);
  const [userDet,setUserDet] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    
    function fetchUser(){

      setUserCall(true);
      axios.get(process.env.apiUrl+'v1/users/'+id)
      .then(res => {
        let resData = res.data.data;
        setUserCall(true);
        setUserDet(resData);
      }).catch(err =>{
        setUserCall(false);
      });
    }

    if(!userCall && id){
      fetchUser();
    }

  });

  return (
    <div className="PageBody">

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
              <div className={`${styles.BodyHeadArea}`}>
                <Link href="/users/list" className={`${styles.BackBU}`}><ArrowLeft/></Link>
                <p className={`${styles.ViewUserTitle}`}>User Profile</p>
              </div>

              <Link className={`${styles.UserList}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>{userDet?.fullname}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Bookmark/>
                <p className={`${styles.UserListTitle}`}>{userDet?.emplyee_id}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Briefcase/>
                <p className={`${styles.UserListTitle}`}>{userDet?.post}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Phone/>
                <p className={`${styles.UserListTitle}`}>{userDet?.contact_no}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Mail/>
                <p className={`${styles.UserListTitle}`}>{userDet?.email}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Navigation/>
                <p className={`${styles.UserListTitle}`}>{userDet?.area}</p>
              </Link>

              <Link className={`${styles.UserList}`}>
                <Disc/>
                <p className={`${styles.UserListTitle}`}>{userDet?.other}</p>
              </Link>

              {/*<Link className={`${styles.UserList}`}>
                <Lock/>
                <p className={`${styles.UserListTitle}`}>{userDet?.emplyee_id}</p>
              </Link>*/}

            </div>
          </div>
        </div>

    </div>
  )
}
