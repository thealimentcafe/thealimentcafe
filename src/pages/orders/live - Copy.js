import React, { useEffect,useState } from 'react';
import styles from './liveorder.module.css';
import { ArrowLeft } from 'react-feather';
import axios from 'axios';
import Header from "../../components/header";
import withAuth from "../../components/withAuth";
import { Link } from "react-router-dom";
import {  FormControlLabel, Checkbox } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


function LiveOrder() {
  const [itemList,setItemList] = useState({'data':[],'loading':false});
  const [orderList,setOrderList] = useState({'data':[],'loading':false});
  const [open,setOpen] = useState(false);
  const [cItem,setCItem] = useState({});

  useEffect(() => {
    
    function fetchItems(){
      let ilist = itemList;
      ilist = {...ilist,'loading':true};
      setItemList(ilist);
      axios.get(process.env.REACT_APP_APIURL+'v1/items')
      .then(res => {
        let ilist = {'data':res.data.data,'loading':true};
        setItemList(ilist);

        /*setTimeout(()=>{
          fetchItemsNew();
        },5000);*/

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
      axios.get(process.env.REACT_APP_APIURL+'v1/live-orders')
      .then(res => {
        let orderList = res.data.data.map(item =>{
          return {...item,is_cheked:false}
        });
        let olist = {'data':orderList,'loading':true};
        setOrderList(olist);

        /*setTimeout(()=>{
          fetchOrdersNew();
        },5000);*/

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

  const fetchOrdersNew = () =>{
      axios.get(process.env.REACT_APP_APIURL+'v1/live-orders')
      .then(res => {
        let orderList = res.data.data.map(item =>{
          return {...item,is_cheked:false}
        });
        let olist = {'data':orderList,'loading':true};
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

  const changeCookingStatus = (e,itemId)=>{
    let status = 0;
    if(e.target.checked){
      status = 1;
    }
    axios.put(process.env.REACT_APP_APIURL+'v1/orders/'+itemId,{status:status})
    .then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  }

  const onConfirm = ()=>{
    setOpen(false);

    axios.put(process.env.REACT_APP_APIURL+'v1/orders/'+cItem.id,{'status':1})
      .then(res => {
        
      });
  }

  const onCancel = ()=>{
    setOpen(false);
  }

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">

            <div className={`${styles.BodyHeadArea}`}>
              <Link to="/dashboard" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Live Order</p>
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
                  <th>Status</th>
                </tr>
                {orderList.data.map((item,index)=>{
                  return (<tr key={index} className={(item.status === 2)?`${styles.Delivered}`:((item.status === 1)?`${styles.Ready}`:`${styles.Cooking}`)}>
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
                  {parseInt(item.status) === 0 && <p><FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e)=>changeCookingStatus(e,item.id)}
                            name="status"
                            color="primary"
                          />
                        }
                      />Cooking</p>}
                  {parseInt(item.status) === 1 && <p>Ready</p>}
                  {parseInt(item.status) === 2 && <p>Delivered</p>}
                  </td>
                </tr>)
                })}
              </table>
            </div>

          </div>
        </div>

        <Dialog open={open} onClose={() => onCancel()} aria-labelledby="confirm-dialog" >
          <DialogTitle id="confirm-dialog">Are you sure?</DialogTitle>
          <DialogContent>Are you sure?</DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => onCancel()} or="secondary" >No</Button>
            <Button variant="contained" onClick={() => { onConfirm(); }} color="default" >Yes</Button>
          </DialogActions>
        </Dialog>

    </div>
  )
}

export default withAuth(LiveOrder);