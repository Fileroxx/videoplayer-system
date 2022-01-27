import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {

  const { data: session } = useSession()



  return (
    <div className={styles.container}>

    {!session && (
      <>
          <button onClick={ ()=> signIn()}>Sign In</button>
      </>
    )}

      {session && (
        <>
            <h4>You are logged as: {session.user.name} </h4>
            <div className={styles.boxCenter}>
                <h4>Email: {session.user.email}</h4>
                <br />
                {session.user.image && (
                  <span>
                      <img src={session.user.image} alt={session.user.name} />
                  </span>
                )}
            </div>

                <br />
                <br />
            <button className={styles.primaryButton} onClick={() => signOut()}>
                  Sign Out
            </button>
        </>
      )}

    </div>
  )
}
