import Head from 'next/head'
import styles from '../styles/Home.module.css'


export const getServerSideProps = (ctx)=>{
  return {
    props: {
      locale: ctx.locale || null,
      locales: ctx.locales || null
    }
  }
}
export default function Home(props) {
  return (
      <div>
          <h1>Locale: {props.locale}</h1>
          <h2>Locales: {props.locales.join(" ")}</h2>
      </div>
  )
}
