import Link from 'next/link';
import React from 'react';
import styles from '../../styles/fighters.module.css'
export const getStaticProps= async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props:{fighters:data}
  }
}

function Fighters({fighters}) {
  return ( 
  <div>
    <h1>All Fighters</h1>
    {fighters.map(fighter=>(
      <Link href={'/fighters/'+ fighter.id} key={fighter.id}>
      <a className={styles.single}>
        <h3>{fighter.name}</h3>
      </a>
      </Link>
    ))}
  </div>
  );
}

export default Fighters;
