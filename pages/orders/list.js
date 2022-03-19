import React, { useEffect,useState } from 'react';
import styles from './list.module.css';
import { Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { Power, ArrowLeft, Plus } from 'react-feather';
import axios from 'axios';
import Header from "../component/header";


export default function Order() {
  const [itemList,setItemList] = useState({'data':[],'loading':false});
  const [orderList,setOrderList] = useState({'data':[],'loading':false});

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


  const [state, setState] = React.useState({
    payment: false,
    status: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const setPayment = (event,itemId)=>{
    let is_paid = 0;
    if(event.target.checked){
      is_paid = 1;
    }
    axios.put(process.env.apiUrl+'v1/orders/'+itemId,{is_paid:is_paid})
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
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <Link href="/orders/add-order" className={`${styles.HomeMenuBU}`}><Plus/> Take Order</Link>
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
                    {item.is_paid == 1 && <p className={`${styles.Paid}`}>Paid</p>}
                    {item.is_paid == 0 && <p>
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
                  {item.status == 0 && <p>Ready</p>}
                  {item.status == 1 && <p>Cooking</p>}
                  {item.status == 2 && <p>Delivered</p>}
                  </td>
                </tr>)
                })}
                {/*<tr className={`${styles.Ready}`}>
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
                </tr>*/}
           
              </table>
            </div>

          </div>
        </div>

    </div>
  )
}
