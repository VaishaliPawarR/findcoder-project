import style from "./findcoder.module.css"
import LogoBlock from "./LogoBlock"
import MenuBlock from "./MenuBlock"
import BtnBlock from "./BtnBlock"

const FindCoder = () => {
  return (
  <div>
    <section id={style.nav}>
        <article>
            <div className={style.Logo}>
                <LogoBlock/>
            </div>
            <div className={style.Menu}>
                <MenuBlock/>
            </div>
            <div className={style.Btn}>
                <BtnBlock/>
            </div>
        </article>
    </section>
  </div>
  )
}

export default FindCoder