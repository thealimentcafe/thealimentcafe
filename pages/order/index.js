import Menu from '../component/menu'
import React from 'react';
import styles from './order.module.css';
import { Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';

export default function Order() {

  const [state, setState] = React.useState({
    payment: false,
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
              <p className={`${styles.ViewUserTitle}`}>Order</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link href="/addorder" className={`${styles.HomeMenuBU}`}><Plus/> Take Order</Link>
            </div>

            <div className={`${styles.StockUpdateRow}`}>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Chicken Tikka Kebab</p>
                <p className={`${styles.StockUnit}`}>40</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Chicken Reshmi Kebab</p>
                <p className={`${styles.StockUnit}`}>50</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Chicken Hariyali Kebab</p>
                <p className={`${styles.StockUnit}`}>15</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Peshwari Tangdi</p>
                <p className={`${styles.StockUnit}`}>27</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Chicken Tandoori</p>
                <p className={`${styles.StockUnit}`}>20</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Chicken Afgani Kebab</p>
                <p className={`${styles.StockUnit}`}>60</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Fish Tikka</p>
                <p className={`${styles.StockUnit}`}>55</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Prawn Tandoori</p>
                <p className={`${styles.StockUnit}`}>80</p>
              </div>
              <div className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>Lemon Pepper Grilled Fish</p>
                <p className={`${styles.StockUnit}`}>10</p>
              </div>
            </div>

            <div className={`${styles.TableContainer} CheckBoxWithoutLabel`}>
              <table>
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Order</th>
                  <th>Qnt</th>
                  <th>Price</th>
                  <th>Offer</th>
                  <th>Total</th>
                  <th>Payment</th>
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
                    <p>140</p>
                  </td>
                  <td>
                    <p>0%</p>
                    </td>
                  <td>
                    <p>140</p>
                  </td>
                  <td>
                    <p>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.payment}
                            onChange={handleChange}
                            name="payment"
                            color="primary"
                          />
                        }
                      />
                    </p>
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
                      Ready
                    </p>
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
                    <p>60</p>
                    <p>360</p>
                    <p>150</p>
                  </td>
                  <td>
                    <p>0%</p>
                  </td>
                  <td>
                    <p>570</p>
                  </td>
                  <td>
                    <p>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.payment}
                            onChange={handleChange}
                            name="payment"
                            color="primary"
                          />
                        }
                      />
                    </p>
                  </td>
                  <td>
                    <p>Cooking</p>
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
                    <p>70</p>
                    <p>300</p>
                    <p>240</p>
                    <p>240</p>
                  </td>
                  <td>
                    <p>0%</p>
                  </td>
                  <td>
                    <p>850</p>
                  </td>
                  <td>
                    <p className={`${styles.Paid}`}>Paid</p>
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
