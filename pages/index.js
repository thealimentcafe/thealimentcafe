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
    <div className={styles.container}>
      <img src="/loader.gif" />
    </div>
  )
}
