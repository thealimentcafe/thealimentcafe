import React, { useEffect,useState } from 'react';
import styles from './list.module.css';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { ArrowLeft, Plus } from 'react-feather';
import axios from 'axios';
import Header from "../../components/header";
import withAuth from "../../components/withAuth";
import { Link } from "react-router-dom";


function Order() {
  const [itemList,setItemList] = useState({'data':[],'loading':false});
  const [orderList,setOrderList] = useState({'data':[],'loading':false});

  useEffect(() => {
    
    function fetchItems(){
      let ilist = itemList;
      ilist = {...ilist,'loading':true};
      setItemList(ilist);
      axios.get(process.env.REACT_APP_APIURL+'v1/items')
      .then(res => {
        let ilist = {'data':res.data.data,'loading':true};
        setItemList(ilist);

        setTimeout(()=>{
          fetchItemsNew();
        },5000);

      }).catch(err =>{
        let ilist = itemList;
        ilist = {...ilist,'loading':false};
        setItemList(ilist);
      });
    }

    if(!itemList.loading){
      fetchItems();
    }

  });

  useEffect(() => {
    
    function fetchOrders(){
      let olist = orderList;
      olist = {...olist,'loading':true};
      setOrderList(olist);
      axios.get(process.env.REACT_APP_APIURL+'v1/take-orders')
      .then(res => {
        let olist = {'data':res.data.data,'loading':true};
        setOrderList(olist);

        setTimeout(()=>{
          fetchOrdersNew();
        },5000);

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

  const fetchItemsNew = () =>{
    axios.get(process.env.REACT_APP_APIURL+'v1/items')
    .then(res => {
      let ilist = {'data':res.data.data,'loading':true};
      setItemList(ilist);

      setTimeout(()=>{
        fetchItemsNew();
      },5000);

  }).catch(err =>{

      setTimeout(()=>{
        fetchItemsNew();
      },5000);

  });
  }

  const fetchOrdersNew = () =>{
      axios.get(process.env.REACT_APP_APIURL+'v1/take-orders')
      .then(res => {
        let olist = {'data':res.data.data,'loading':true};
        setOrderList(olist);

        setTimeout(()=>{
          fetchOrdersNew();
        },5000);

      }).catch(err =>{

        setTimeout(()=>{
          fetchOrdersNew();
        },5000);

      });
  }

  const setPayment = (event,itemId)=>{
    let is_paid = 0;
    if(event.target.checked){
      is_paid = 1;
    }
    axios.put(process.env.REACT_APP_APIURL+'v1/orders/'+itemId,{is_paid:is_paid})
    .then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  }

  const setDelivered = (event,itemId)=>{
    let status = 1;
    if(event.target.checked){
      status = 2;
    }
    axios.put(process.env.REACT_APP_APIURL+'v1/orders/'+itemId,{status:status})
    .then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  }

  return (
    <div>

      <Header />

        

        <div className="Body">
          <div className="Container">

          <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserTitle}`}>Order</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <Link to="/dashboard" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link to="/orders/add-order" className={`${styles.HomeMenuBU}`}><Plus/> Take Order</Link>
            </div>

            <div className={`${styles.StockUpdateRow}`}>
              {itemList.data.map((item,index)=>{
                return (<div key={index} className={`${styles.Stock}`}>
                <p className={`${styles.StockName}`}>{item.item_name}</p>
                <p className={`${styles.StockUnit}`}>{item.live_stock}</p>
              </div>)
              })}
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
                
                {orderList.data.map((item,index)=>{
                  return (<tr key={index} className={(parseInt(item.status) === 2)?`${styles.Delivered}`:((item.status === 1)?`${styles.Ready}`:`${styles.Cooking}`)}>
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
                    {parseInt(item.is_paid) === 1 && <p className={`${styles.Paid}`}>Paid</p>}
                    {parseInt(item.is_paid) === 0 && <p>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e)=>setPayment(e,item.id)}
                            name="payment"
                            color="primary"
                          />
                        }
                      />
                    </p>}
                  </td>
                  <td>
                  {parseInt(item.status) === 0 && <p>Cooking</p>}
                  {(parseInt(item.status) === 1 && parseInt(item.is_paid) === 0) && <p>Ready</p>}
                  {(parseInt(item.status) === 1 && parseInt(item.is_paid) === 1) && <p><FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e)=>setDelivered(e,item.id)}
                            name="payment"
                            color="primary"
                          />
                        }
                      /> Ready</p>}
                  {parseInt(item.status) === 2 && <p>Delivered</p>}
                  </td>
                </tr>)
                })}
                
           
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}

export default withAuth(Order);