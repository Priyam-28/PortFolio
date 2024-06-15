import Parallax from "./components/parallax/Parallax"
import "./app.scss";
import Portfolio from "./components/projects/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <section >
        <Parallax />
      </section>
      <Portfolio/>
      <section >
        <Contact />
      </section>
    </div>
  )
}

export default App
