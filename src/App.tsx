import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BlogPage from './pages/BlogPage'
import './styles/App.css'

const App: React.FC = () => {
  const [showBlog, setShowBlog] = useState(false)

  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="blog">
          <button onClick={() => setShowBlog(!showBlog)}>
            {showBlog ? 'Hide Blog' : 'Show Blog'}
          </button>
          {showBlog && <BlogPage />}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
