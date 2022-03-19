import React, { useEffect,useState } from 'react';
import styles from './add.module.css';
import { Power, ArrowLeft, Plus } from 'react-feather';
import { Link, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Header from "../component/header";
import withAuth from "../component/withAuth";

function CeateMenu() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors },control } = useForm({
    defaultValues: {
      menu_item: [{ item: 0, unit: 0 }]
    }
  });
  const [noOfItems,setNoOfItems] = useState(1);
  const [itemList,setItemList] = useState({'data':[],'loading':false});
  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({ control, name: "menu_item" });

  useEffect(() => {
    
    function fetchItems(){
      let ilist = itemList;
      ilist = {...ilist,'loading':true};
      setItemList(ilist);
      axios.get(process.env.apiUrl+'v1/items')
      .then(res => {
        let itemList = res.data.data.map((item)=>{
          return {'value':item.id,'label':item.item_name};
        });

        let ilist = {'data': itemList,'loading':true};
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

  const onSubmit = data => {
    axios.post(process.env.apiUrl+'v1/menus',data)
    .then(res => {
      router.push('/menus/list');
    }).catch(err =>{
      console.log(err);
    });
  };

  return (
    <div>

        <Header />

        <div className="Body">
          <div className="Container">
            <div className={`${styles.HomeButtonArea}`}>
              
            <div className={`${styles.BodyHeadArea}`}>
              <Link href="/menus/list" className={`${styles.BackBU}`}><ArrowLeft/></Link>
              <p className={`${styles.ViewUserTitle}`}>Create Menu</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className={`${styles.LoginInput}`}>
              <div className={`${styles.InputArea}`}>
                <TextField id="outlined-basic" label="Menu Name" variant="outlined" size="small" className='LoginInput'  {...register("menu_name")} />             
              </div>
            </div>

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
                <TextField type={'number'} id="outlined-basic" label="Total" variant="outlined" size="small" className='LoginInput' {...register("amount")} />             
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


export default withAuth(CeateMenu);
