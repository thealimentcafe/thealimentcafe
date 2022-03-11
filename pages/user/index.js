import Menu from '../component/menu'
import styles from './user.module.css';
import { Power, Edit, ArrowLeft } from 'react-feather';
import { Link, Button } from '@material-ui/core';

export default function Users() {
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
                <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
                <Link href="/adduser" className={`${styles.HomeMenuBU}`}>CREATE USER</Link>
              </div>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <div className={`${styles.UserListDe}`}>
                  <p className={`${styles.UserListTitle}`}>Subhankar Mondal</p>
                  <p className={`${styles.UserListID}`}>TAC001 <span className={`${styles.Active}`}>Active</span></p>
                  <p className={`${styles.UserListDesig}`}>Store Manager</p>
                </div>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <div className={`${styles.UserListDe}`}>
                  <p className={`${styles.UserListTitle}`}>Subhankar Mondal</p>
                  <p className={`${styles.UserListID}`}>TAC001 <span className={`${styles.Archive}`}>Archive</span></p>
                  <p className={`${styles.UserListDesig}`}>Store Manager</p>
                </div>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

            </div>
          </div>
        </div>

    </div>
  )
}
