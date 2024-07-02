import Parallax from "./components/parallax/Parallax"
import "./app.scss";
import Portfolio from "./components/projects/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Social from "./components/social/Social";

const App = () => {
  return (
    <div>
      <div className="nav">
      <Navbar/>
      </div>
      
      <section>
        <Parallax />
      </section>
      <section className="experience">
      <Experience/>
      </section>
        
      
      <Portfolio/>
      <section >
        <Contact />
      </section>
      <Social className="social"/>
    </div>
  )
}

export default App
