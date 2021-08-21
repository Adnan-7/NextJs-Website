import React from 'react';
export const getStaticPaths= async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(fighter=>{
      return  {
            params:{id: fighter.id.toString()}
      }
  })

  return { 
      paths,
      fallback:false
  }
}

export const getStaticProps= async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ id);
    const data = await res.json();

    return{
        props: {fighter:data}
    }

  
}

const Detials = ({fighter}) => {
    return (
        <div>
            <h1>{fighter.name}</h1>
            <p>{fighter.email}</p>
            <p>{fighter.phone}</p>
            <p>{fighter.website}</p>
            <p>{fighter.address.city}</p>
        </div>
    )
}

export default Detials
