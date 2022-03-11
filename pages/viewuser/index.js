import Menu from '../component/menu'
import styles from './viewuser.module.css';
import { Power, User, Briefcase, ArrowLeft, Phone, Mail, Navigation, Disc, Lock, Bookmark } from 'react-feather';
import { Link, Button } from '@material-ui/core';

export default function ViewUsers() {
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
                <p className={`${styles.ViewUserTitle}`}>User Profile</p>
              </div>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Subhankar Mondal</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Bookmark/>
                <p className={`${styles.UserListTitle}`}>TAC001</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Briefcase/>
                <p className={`${styles.UserListTitle}`}>Store Manager</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Phone/>
                <p className={`${styles.UserListTitle}`}>+91 8981817211</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Mail/>
                <p className={`${styles.UserListTitle}`}>subhankarmondal012@gmail.com</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Navigation/>
                <p className={`${styles.UserListTitle}`}>Kolkata</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Disc/>
                <p className={`${styles.UserListTitle}`}>NA</p>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <Lock/>
                <p className={`${styles.UserListTitle}`}>cSJj@8592</p>
              </Link>

            </div>
          </div>
        </div>

    </div>
  )
}
