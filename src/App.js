import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./components/Education"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Certifications from "./components/Certifications"
import ScrollToTop from "./components/ScrollToTop"

function App() {
return (
<div>
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Certifications/>
<Education/>
<Contact/>
<Footer/>
<ScrollToTop/>
</div>
)
}

export default App