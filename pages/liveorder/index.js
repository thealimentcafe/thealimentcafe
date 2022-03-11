import Menu from '../component/menu'
import React from 'react';
import styles from './liveorder.module.css';
import { Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';

export default function LiveOrder() {

  const [state, setState] = React.useState({
    status: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>

        <div className="Header">
          <img src="/img/logo.svg" className="HeaderLogo" />
          <Link href="/home" className="LogoutBU"><Power/> Logout</Link>
        </div>

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Live Order</p>
            </div>

            <div className={`${styles.TableContainer} CheckBoxWithoutLabel`}>
              <table>
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Order</th>
                  <th>Qnt</th>
                  <th>Status</th>
                </tr>
                <tr className={`${styles.Ready}`}>
                  <td>
                    <p>01</p>
                  </td>
                  <td>
                    <p>Subhankar Mondal</p>
                  </td>
                  <td>
                    <p>Reshmi Kebab</p>
                  </td>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>Ready</p>
                  </td>
                </tr>
                <tr className={`${styles.Cooking}`}>
                  <td>
                    <p>02</p>
                  </td>
                  <td>
                    <p>Rahul Dutta</p>
                  </td>
                  <td>
                    <p>Tikka Kebab</p>
                    <p>Tangdi</p>
                    <p>Chicken Afgani</p>
                  </td>
                  <td>
                    <p>1</p>
                    <p>6</p>
                    <p>3</p>
                  </td>
                  <td>
                    <p>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.status}
                            onChange={handleChange}
                            name="status"
                            color="primary"
                          />
                        }
                      />
                      Cooking
                    </p>
                  </td>
                </tr>
                <tr className={`${styles.Delivered}`}>
                  <td>
                    <p>03</p>
                  </td>
                  <td>
                    <p>Sribas Das</p>
                  </td>
                  <td>
                    <p>Chicken Hariyali Kebab</p>
                    <p>BBQ</p>
                    <p>Tandoori Chicken</p>
                    <p>Fish Tikka</p>
                  </td>
                  <td>
                    <p>1</p>
                    <p>6</p>
                    <p>3</p>
                    <p>2</p>
                  </td>
                  <td>
                    <p>Delivered</p>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}
