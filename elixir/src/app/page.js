import Image from 'next/image'
import styles from './page.module.css'
import Layout from './components/layout'
import Card from './components/card'
import BackgroundImage from './components/backgroundImage'

export default function Home() {

  return (
    <>
    <Layout />
  
   <Card />
  
   <BackgroundImage />
   </>
  )
}
