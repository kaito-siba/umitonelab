import * as styles from './App.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Works } from './components/Works/Works'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
