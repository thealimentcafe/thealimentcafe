import Menu from '../component/menu'
import React from 'react';
import styles from './sales.module.css';
import { Link, InputLabel, MenuItem, FormControl, Select, TextField } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Header from "../component/header";
import withAuth from "../component/withAuth";


const menuList = [
  { title: 'Reshmi Kebab' },
  { title: 'Tikka Kebab' },
  { title: 'Hariyali Kebab' },
  { title: 'Boti Kebab' },
  { title: 'Peshwari Tangdi' }
];

function Sales() {

  const [filteBy, filterBy] = React.useState('');
  const [select, setFilter] = React.useState('');

  const handleChange = (event) => {
    filterBy(event.target.value);
  };
  const handleChange2 = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Sales</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <div className={`${styles.SalesDropDownDiv}`}>
                <FormControl variant="outlined" className="LoginInput">
                  <InputLabel id="demo-simple-select-outlined-label">Filter by</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={filteBy}
                    onChange={handleChange}
                    label="Filte by"
                  >
                    <MenuItem value="menu">Menu</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={`${styles.SalesDropDownDiv}`}>
                <Autocomplete className="LoginInput"
                  id="combo-box-demo"
                  options={menuList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Choose" variant="outlined" />}
                />
              </div>
            </div>

            <div className={`${styles.TableContainer}`}>
              <table>
                <tr>
                  <th>S.N.</th>
                  <th>Menu</th>
                  <th>Qnt</th>
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
                    <p>20</p>
                  </td>
                  <td>
                    <p>1400</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>02</p>
                  </td>
                  <td>
                    <p>Hariyali Kebab</p>
                  </td>
                  <td>
                    <p>10</p>
                  </td>
                  <td>
                    <p>700</p>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>TOTAL</th>
                  <th>2100</th>
                </tr>
              </table>
            </div>

            {/* *******************When user select filter by date******************** */}
            <div className={`${styles.TableContainer}`}>
              <table>
                <tr>
                  <th>S.N.</th>
                  <th>Date</th>
                  <th>Qnt</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>
                    <p>01</p>
                  </td>
                  <td>
                    <p>10/03/2022</p>
                  </td>
                  <td>
                    <p>20</p>
                  </td>
                  <td>
                    <p>1400</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>02</p>
                  </td>
                  <td>
                    <p>11/03/2022</p>
                  </td>
                  <td>
                    <p>10</p>
                  </td>
                  <td>
                    <p>700</p>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>TOTAL</th>
                  <th>2100</th>
                </tr>
              </table>
            </div>
            {/* *******************When user select filter by date******************** */}

          </div>
        </div>

    </div>
  )
}

export default withAuth(Sales);