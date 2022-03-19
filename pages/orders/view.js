import React, { useEffect,useState } from 'react';
import styles from './view.module.css';
import { Link } from '@material-ui/core';
import { Power, ArrowLeft } from 'react-feather';
import axios from 'axios';
import Header from "../component/header";
import withAuth from "../component/withAuth";


function ViewOrders() {
  const [orderList,setOrderList] = useState({'data':[],'loading':false});

  useEffect(() => {
    
    function fetchOrders(){
      let olist = orderList;
      olist = {...olist,'loading':true};
      setOrderList(olist);
      axios.get(process.env.apiUrl+'v1/orders')
      .then(res => {
        let olist = {'data':res.data.data,'loading':true};
        setOrderList(olist);
      }).catch(err =>{
        let olist = orderList;
        olist = {...olist,'loading':false};
        setOrderList(olist);
      });
    }

    if(!orderList.loading){
      fetchOrders();
    }

  });

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>View Order</p>
            </div>

            <div className={`${styles.TableContainer}`}>
              <table>
                <tbody>
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Order</th>
                  <th>Qnt</th>
                  <th>Price</th>
                  <th>Offer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
                {orderList.data.map((item,index)=>{
                  return (<tr key={index} className={(item.status == 2)?`${styles.Delivered}`:((item.status == 1)?`${styles.Cooking}`:`${styles.Ready}`)}>
                  <td>
                    <p>{index+1}</p>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                  {item.items.map((subItem,subIndex)=>{
                    return (<p key={subIndex}>{subItem.item}</p>)
                  })}
                  </td>
                  <td>
                  {item.items.map((subItem,subIndex)=>{
                    return (<p key={subIndex}>{subItem.quantity}</p>)
                  })}
                  </td>
                  <td>
                  {item.items.map((subItem,subIndex)=>{
                    return (<p key={subIndex}>{subItem.price}</p>)
                  })}
                  </td>
                  <td>
                    <p>{item.offer}%</p>
                    </td>
                  <td>
                    <p>{item.totalamount}</p>
                  </td>
                  <td>
                  {item.status == 0 && <p>Ready</p>}
                  {item.status == 1 && <p>Cooking</p>}
                  {item.status == 2 && <p>Delivered</p>}
                  </td>
                </tr>)
                })}
                </tbody>
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}

export default withAuth(ViewOrders);
