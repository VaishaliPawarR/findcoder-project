import React from 'react'
import pic from "./hire.png"
import style from "./hire.module.css"

const HireTalents = () => {
  return (
    <section id={style.homePage1}>
    <nav>
        <article className={style.text}>

            <h1> Find a -</h1>
            <h2>Perfect Talent</h2>
            <p>We have already mentioned what may, perhaps, appear paradoxical to some of our readers, — that the division of labour can be applied with equal success to mental as to mechanical operations, and that it ensures in both the same economy of time.</p>

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.1" stroke="currentColor" aria-hidden="true" class="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path></svg>Harlan Mills */}

        </article>
        <article className={style.img}>
            <img src={pic}/>


        </article>

    </nav>
   </section>


  )
}

export default HireTalents

