import Menu from '../component/menu'
import styles from './home.module.css';
import { Power } from 'react-feather';
import { Link } from '@material-ui/core';

export default function Home() {
  return (
    <div className="PageBody">

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
              {/* ********************User name should be visible on span area*************** */}
              <p className={`${styles.HomeTitle}`}>Hello, <span>Admin</span></p>
              {/* ********************User name should be visible on span area*************** */}
              
              <Link href="/user" className={`${styles.HomeMenuBU}`}>USER</Link>
              <Link href="/vieworder" className={`${styles.HomeMenuBU}`}>VIEW ORDER</Link>
              <Link href="/sales" className={`${styles.HomeMenuBU}`}>SALES</Link>
              <Link href="/stock" className={`${styles.HomeMenuBU}`}>STOCK</Link>
              <Link href="/menu" className={`${styles.HomeMenuBU}`}>MENU</Link>
              <Link href="/stockupdate" className={`${styles.HomeMenuBU}`}>STOCK UPDATE</Link>
              <Link href="/order" className={`${styles.HomeMenuBU}`}>TAKE ORDER</Link>
              <Link href="/liveorder" className={`${styles.HomeMenuBULive}`}>GO LIVE</Link>

            </div>
          </div>
        </div>

    </div>
  )
}
