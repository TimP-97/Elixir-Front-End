import Image from 'next/image'
import styles from './page.module.css'
import Layout from './components/layout'
import BackgroundImage from './components/backgroundImage'

export default function Home() {
  return (
    <>
    <Layout />
  
   <h2>Background?</h2>
  
   <BackgroundImage />
   </>
  )
}
