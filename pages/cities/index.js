'use client';
import Image from 'next/image'
import styles from '@/app/page.module.css'
import MyCard from '@/components/myCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cities() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    let urlSearch = new URLSearchParams(window.location.search);
    let stateId = urlSearch

    axios.get('https://fontouradesenvolvimento.com.br/site/api/city?stateId=' + stateId)
    .then(function (response) {
      setCities(response.data);
    })
  }, []);
    
  function CardBody() {

    if (cities !== null) {
      return (
        cities.map(city =>
          <MyCard
            link={city.id}
            title={city.name}
            description={city.short}
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
