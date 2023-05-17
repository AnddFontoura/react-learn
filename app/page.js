'use client';
import Image from 'next/image'
import styles from './page.module.css'
import MyCard from './components/myCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  
  const dataHome = [
    {
      title: 'Andre',
      description: 'Teste',
      link: 'http://teste.com.br'
    }
  ];

  const [states, setStates] = useState(null);

  useEffect(() => {
    axios.get('https://fontouradesenvolvimento.com.br/site/api/state')
    .then(function (response) {
      console.log(response.data);
      setStates(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);
    
  function CardBody() {

    if (states !== null) {
      return (
        states.map(state =>
          <MyCard
            link={state.id}
            title={state.name}
            description={state.short}
          >
          </MyCard>
        )
      )
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <div className={styles.grid}>
        <CardBody></CardBody>
      </div>
    </main>
  )
}
