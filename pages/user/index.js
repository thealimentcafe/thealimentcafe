import Menu from '../component/menu'
import styles from './user.module.css';
import { Power, User, Edit, ArrowLeft } from 'react-feather';
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

              <Link href="/viewuser" className={`${styles.UserList} ${styles.Archive}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Subhankar Mondal</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Samsujj Jaman</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList} ${styles.Archive}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Subhankar Sasmal</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Rahul Dutta</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList} ${styles.Archive}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Joydeep Pal</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Snehasish Ghosh</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

              <Link href="/viewuser" className={`${styles.UserList} ${styles.Archive}`}>
                <User/>
                <p className={`${styles.UserListTitle}`}>Sribas Das</p>
                <Button className={`${styles.UserEditBU}`}><Edit/></Button>
              </Link>

            </div>
          </div>
        </div>

    </div>
  )
}
