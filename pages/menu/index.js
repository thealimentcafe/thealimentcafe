import Menu from '../component/menu'
import styles from './menu.module.css';
import { Link } from '@material-ui/core';
import { Power, ArrowLeft, FilePlus } from 'react-feather';

export default function MenuList() {
  return (
    <div>

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserTitle}`}>Menu</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link href="/createmenu" className={`${styles.HomeMenuBU}`}><FilePlus/> Create Menu</Link>
            </div>

            <div className={`${styles.TableContainer}`}>
              <table>
                <tr>
                  <th>S.N.</th>
                  <th>Menu</th>
                  <th>Items</th>
                  <th>Units</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>
                    <p>01</p>
                  </td>
                  <td>
                    <p>Reshmi Kebab</p>
                  </td>
                  <td>
                    <p>Reshmi</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>70</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>02</p>
                  </td>
                  <td>
                    <p>Tikka Kebab</p>
                  </td>
                  <td>
                    <p>Tikka</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>60</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>03</p>
                  </td>
                  <td>
                    <p>Hariyali Kebab</p>
                  </td>
                  <td>
                    <p>Hariyali</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>04</p>
                  </td>
                  <td>
                    <p>Boti Kebab</p>
                  </td>
                  <td>
                    <p>Boti</p>
                  </td>
                  <td>
                    <p>10</p>
                  </td>
                  <td>
                    <p>80</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>05</p>
                  </td>
                  <td>
                    <p>Peshwari Tangdi</p>
                  </td>
                  <td>
                    <p>Tangdi</p>
                  </td>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>60</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>06</p>
                  </td>
                  <td>
                    <p>Chicken Afgani</p>
                  </td>
                  <td>
                    <p>Thai</p>
                  </td>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>50</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>07</p>
                  </td>
                  <td>
                    <p>Chicken Tandoori</p>
                  </td>
                  <td>
                    <p>Tandoori</p>
                  </td>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>80</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>08</p>
                  </td>
                  <td>
                    <p>Prawn Tandoori</p>
                  </td>
                  <td>
                    <p>Prawn</p>
                  </td>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>100</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>09</p>
                  </td>
                  <td>
                    <p>Fish Tikka</p>
                  </td>
                  <td>
                    <p>Fish Tikka</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>120</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>10</p>
                  </td>
                  <td>
                    <p>Tandoori Platter</p>
                  </td>
                  <td>
                    <p>Tandoori</p>
                    <p>Tangdi</p>
                    <p>Reshmi</p>
                    <p>Tikka</p>
                  </td>
                  <td>
                    <p>1</p>
                    <p>2</p>
                    <p>2</p>
                    <p>2</p>
                  </td>
                  <td>
                    <p>280</p>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}
