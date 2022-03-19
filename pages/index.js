import  { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/login');
    }
  });
  return (
    <div className={`${styles.LoginBody}`}>
      <img src="/img/login-bg.png" className={`${styles.LoginBG}`} />
    </div>
  )
}
