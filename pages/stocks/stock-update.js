import React, { useEffect,useState } from 'react';
import styles from './stockupdate.module.css';
import { Power, ArrowLeft, Plus } from 'react-feather';
import { Link, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from 'next/router';
import Select from 'react-select';
import Header from "../component/header";
import withAuth from "../component/withAuth";




function StockUpdate() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors },control,setValue } = useForm({
    defaultValues: {
      menu_item: [{ item: 0, unit: 0 }]
    }
  });
  const [itemList,setItemList] = useState({'data':[],'loading':false});
  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({ control, name: "menu_item" });

  useEffect(() => {
    
    function fetchItems(){
      let iList = itemList;
      iList = {...iList,'loading':true};
      setItemList(iList);
      axios.get(process.env.apiUrl+'v1/items')
      .then(res => {
        let itemList = res.data.data.map((item)=>{
          return {'value':item.id,'label':item.item_name};
        });

        let ilist = {'data': itemList,'loading':true};
        setItemList(ilist);

      }).catch(err =>{
        let iList = itemList;
        iList = {...iList,'loading':false};
        setItemList(iList);
      });
    }

    if(!itemList.loading){
      fetchItems();
    }

  });

  const onSubmit = data => {
    axios.post(process.env.apiUrl+'v1/item-stock-update',data)
    .then(res => {
      router.push('/home');
    }).catch(err =>{
      console.log(err);
    });
  }

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/home" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Stock Update</p>
            </div>

            <div className={`${styles.BodyHeadArea}`}>
              <p className={`${styles.ViewUserSubTitle}`}>Date: 14/03/2022</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

            {fields.map((items,index)=>{
              return (<div key={index} className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Controller
                render={({ field }) => <Select {...field} id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' options={itemList.data}
                value={itemList.data.find(c => c.value === field.value)} onChange={val => field.onChange(val.value)} />  } name={`menu_item.${index}.item`} control={control}
              />    
              </div>
              <div className={`${styles.InputAreaUnit}`}>
              <Controller
                render={({ field }) => <TextField {...field}  type={'number'} id="outlined-basic" label="Unit" variant="outlined" size="small" className='LoginInput' />  }
                name={`menu_item.${index}.unit`}
                control={control}
              />

                             
              </div>

              
            </div>);
            })}

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button onClick={() => { append(); }} className={`${styles.LoginBU}`}><Plus/></Button>
              </div>
            </div>

            

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <Button type="submit" className="LoginBU">Submit</Button>
              </div>
            </div>

            </form>

            </div>
          </div>
        </div>

    </div>
  )
}

export default withAuth(StockUpdate);