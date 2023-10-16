import React from 'react'
import style from "./explore.module.css"
import pic from "./Explore.png"

const ExploreWork = () => {
  return (
   <section id={style.homePage1}>
    <nav>
        <article className={style.text}>
            <h1>Here Are Some -</h1>
            <h2>Projects By Developers</h2>
            <p>An interactive debugger is an outstanding example of what is not needed - it encourages trial-and-error hacking rather than systematic design, and also hides marginal people barely qualified for precision programming.</p>

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.1" stroke="currentColor" aria-hidden="true" class="mr-2 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path></svg>Harlan Mills */}

        </article>
        <article className={style.img}>
            <img src={pic}/>


        </article>

    </nav>
   </section>

    )
}

export default ExploreWork