import Navbar from './Components/Navbar/Navbar'
import style from "./app.module.css"
import SideBar from './Components/SideBar/Siderbar'


export default function Home() {
  return (
    <main className={style.container}>
       <Navbar/>
       <SideBar/>
       <div className={style.subContainer}>
            <div className={style.spanContainer}>
              <span className={style.title}>Welcome to my portfolio</span>
              <span className={style.middleTitle}>Welcome to my portfolio</span>
            </div>
        <div className={style.aboutContainer}>
          <p className={style.about}>My name is <span className={style.name}>Emiliano Prioli</span> and I am a FullStack Developer, but my passion is the Front-end design</p>
        </div>
        <div className={style.proyectsContainer}>
          <h2 className={style.proyectsH2}>Some Proyects</h2>
          <div className={style.medConnectContainer}>
            <iframe className={style.medConnect} src="https://www.youtube.com/embed/G1fRvG-KN2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className={style.medConnectlinksContainer}>
              <a href='https://medconnectfront-production.up.railway.app/' className={style.links}>Link to the proyect</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
