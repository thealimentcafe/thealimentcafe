import Menu from '../component/menu'
import styles from './stock.module.css';
import { Link } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';

export default function Stock() {
  return (
    <div>

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserTitle}`}>Stock</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link href="/additem" className={`${styles.HomeMenuBU}`}><Plus/> Add Items</Link>
            </div>

            <div className={`${styles.TableContainer}`}>
              <table>
                <tr>
                  <th colSpan={3}>Live Stocks</th>
                </tr>
                <tr>
                  <th>S.N.</th>
                  <th>Items</th>
                  <th>Units</th>
                </tr>
                <tr>
                  <td>
                    <p>01</p>
                  </td>
                  <td>
                    <p>Reshmi</p>
                  </td>
                  <td>
                    <p>200</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>02</p>
                  </td>
                  <td>
                    <p>Tikka</p>
                  </td>
                  <td>
                    <p>150</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>03</p>
                  </td>
                  <td>
                    <p>Hariyali</p>
                  </td>
                  <td>
                    <p>100</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>04</p>
                  </td>
                  <td>
                    <p>Boti</p>
                  </td>
                  <td>
                    <p>500</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>05</p>
                  </td>
                  <td>
                    <p>Tangdi</p>
                  </td>
                  <td>
                    <p>72</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>06</p>
                  </td>
                  <td>
                    <p>Thai</p>
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
                    <p>Tandoori</p>
                  </td>
                  <td>
                    <p>60</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>08</p>
                  </td>
                  <td>
                    <p>Prawn</p>
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
                    <p>100</p>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}
