import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Fragment, useState } from 'react'
import Content from './components/Growth/Growth'
import ContentGraph from './components/ContentGraph/ContentGraph'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import RatingCer from './components/RatingAndCerti/RatingCer'
import NavigationBar from './components/Navigation/NavigationBar'
function App () {
  const [isOpen, setOpen] = useState(false)

  return (
    <Fragment>
      <Container fluid={true} className={classes.container}>
        <Header isOpen={isOpen} setOpen={setOpen} />
        {isOpen && <NavigationBar setOpen={setOpen} />}
        {!isOpen && (
          <Fragment>
            <Content />
            <ContentGraph />
            <Skills />
            <Projects />
            <WorkExperience />
            <RatingCer />
            <Footer />
          </Fragment>
        )}
      </Container>
    </Fragment>
  )
}

export default App
