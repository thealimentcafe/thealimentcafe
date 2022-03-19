import React, { useEffect,useState } from 'react';
import styles from './userlist.module.css';
import { Power, Edit, ArrowLeft } from 'react-feather';
import { Link, Button } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from "../component/header";


export default function Users() {
  const router = useRouter();
  const [userList,setUserList] = useState({'data':[],'loading':false});

  useEffect(() => {
    
    function fetchUsers(){
      let uslist = userList;
      uslist = {...uslist,'loading':true};
      setUserList(uslist);
      axios.get(process.env.apiUrl+'v1/users')
      .then(res => {
        let uslist = {'data':res.data.data,'loading':true};
        setUserList(uslist);
      }).catch(err =>{
        console.log(1111);
        let uslist = userList;
        uslist = {...uslist,'loading':false};
        setUserList(uslist);
      });
    }

    if(!userList.loading){
      fetchUsers();
    }

  });

  const editClick = (e,itemId)=>{
    e.preventDefault();
    router.push('/users/edit/'+itemId);
  }


  return (
    <div className="PageBody">

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              <div className={`${styles.BodyHeadArea}`}>
                <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
                <Link href="/users/add" className={`${styles.HomeMenuBU}`}>CREATE USER</Link>
              </div>

              {userList.data.map((item,index)=>{
                return (<Link href={"/users/view/"+item.id} key={index} className={`${styles.UserList}`}>
                  <div className={`${styles.UserListDe}`}>
                    <p className={`${styles.UserListTitle}`}>{item.fullname}</p>
                    <p className={`${styles.UserListID}`}>{item.emplyee_id} <span className={(item.status)?`${styles.Active}`:`${styles.Archive}`}>{(item.status)?`Active`:`Archive`}</span></p>
                    <p className={`${styles.UserListDesig}`}>{item.post}</p>
                  </div>
                  <Button onClick={(e)=>editClick(e,item.id)} className={`${styles.UserEditBU}`}><Edit/></Button>
                </Link>)
              })}

            </div>
          </div>
        </div>

    </div>
  )
}
