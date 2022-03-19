import React, { useEffect,useState } from 'react';
import styles from './list.module.css';
import { Link } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from "../component/header";


export default function Stock() {
  const router = useRouter();
  const [itemList,setItemList] = useState({'data':[],'loading':false});

  useEffect(() => {
    
    function fetchItems(){
      let ilist = itemList;
      ilist = {...ilist,'loading':true};
      setItemList(ilist);
      axios.get(process.env.apiUrl+'v1/items')
      .then(res => {
        let ilist = {'data':res.data.data,'loading':true};
        setItemList(ilist);
      }).catch(err =>{
        console.log(1111);
        let ilist = itemList;
        ilist = {...ilist,'loading':false};
        setItemList(ilist);
      });
    }

    if(!itemList.loading){
      fetchItems();
    }

  });

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserTitle}`}>Stock</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link href="/stocks/add-item" className={`${styles.HomeMenuBU}`}><Plus/> Add Items</Link>
            </div>

            <div className={`${styles.TableContainer}`}>
              <table>
                <tbody>
                <tr>
                  <th colSpan={3}>Live Stocks</th>
                </tr>
                <tr>
                  <th>S.N.</th>
                  <th>Items</th>
                  <th>Units</th>
                </tr>

                {itemList.data.map((item,index)=>{

                  return (<tr>
                    <td>
                      <p>{(index+1)}</p>
                    </td>
                    <td>
                      <p>{item.item_name}</p>
                    </td>
                    <td>
                      <p>{item.live_stock}</p>
                    </td>
                  </tr>);

                })}
                </tbody>
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}
