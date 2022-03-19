import styles from './home.module.css';
import { Power } from 'react-feather';
import { Link } from '@material-ui/core';
import withAuth from "../component/withAuth";
import Header from "../component/header";

function Home() {
  return (
    <div className="PageBody">

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
              {/* ********************User name should be visible on span area*************** */}
              <p className={`${styles.HomeTitle}`}>Hello, <span>Admin</span></p>
              {/* ********************User name should be visible on span area*************** */}
              
              <Link href="/users/list" className={`${styles.HomeMenuBU}`}>USER</Link>
              <Link href="/orders/view" className={`${styles.HomeMenuBU}`}>VIEW ORDER</Link>
              <Link href="/sales" className={`${styles.HomeMenuBU}`}>SALES</Link>
              <Link href="/stocks/list" className={`${styles.HomeMenuBU}`}>STOCK</Link>
              <Link href="/menus/list" className={`${styles.HomeMenuBU}`}>MENU</Link>
              <Link href="/stocks/stock-update" className={`${styles.HomeMenuBU}`}>STOCK UPDATE</Link>
              <Link href="/orders/list" className={`${styles.HomeMenuBU}`}>TAKE ORDER</Link>
              <Link href="/orders/live" className={`${styles.HomeMenuBULive}`}>GO LIVE</Link>

            </div>
          </div>
        </div>

    </div>
  )
}


export default withAuth(Home);
