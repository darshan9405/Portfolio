import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Fragment } from 'react'
import Content from './components/Growth/Growth'
import ContentGraph from './components/ContentGraph/ContentGraph'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
function App () {
  return (
    <Fragment>
      <Container fluid={true} className={classes.container}>
        <Header />
        <Content />
        <Skills />
        <ContentGraph />
        <Projects />
        <Footer />
      </Container>
    </Fragment>
  )
}

export default App
