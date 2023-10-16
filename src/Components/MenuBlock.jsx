// import style from "./findcoder.module.css"

// const MenuBlock = () => {
//   return(
//     <ol id={style.menuBlock}>
//       <li><a href="">Explore Work</a></li>
//       <li><a href="">Hire Talents</a></li>
//       <li><a href="">Dev Board</a></li>
//       <li><a href="">Challenges</a></li>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-gray-700 ml-2 h-5 w-5 group-hover:text-gray-900"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//     </ol>
//   )
// }

// export default MenuBlock

import style from "./findcoder.module.css"
import { Link } from "react-router-dom"

const MenuBlock = () => {
  return(
    <ol id={style.menuBlock}>
      <li><Link to="/">Explore Work</Link></li>
      <li><Link to="/hire">Hire Talents</Link></li>
      <li><Link to="/dev">Dev Board</Link></li>
      <li><Link to="/challenge">Challenges</Link></li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-gray-700 ml-2 h-5 w-5 group-hover:text-gray-900"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </ol>
  )
}

export default MenuBlock