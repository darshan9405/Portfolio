import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Fragment, useState, useEffect } from 'react'
import Content from './components/Growth/Growth'
import ContentGraph from './components/ContentGraph/ContentGraph'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import RatingCer from './components/RatingAndCerti/RatingCer'
import NavigationBar from './components/Navigation/NavigationBar'
import ScreenToggler from './components/screenToggler/screenToggler'
function App () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isOpen, setOpen] = useState(false)
  const [toggleUp, setToggleUp] = useState(false)
  const [percentageContent, setPercentageContent] = useState(0)
  window.addEventListener('scroll', () => {
    var percentage = (window.scrollY * 100) / window.innerHeight
    if (percentage >= 0) {
      setPercentageContent(percentage)
    }
    if (window.scrollY && toggleUp === false) {
      setToggleUp(true)
    } else if (window.scrollY === 0 && !toggleUp) {
      setToggleUp(false)
    }
  })

  const toggleHandlerOnclick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Fragment>
      <Container fluid={true} className={classes.container}>
        <Header isOpen={isOpen} setOpen={setOpen} />
        {isOpen && <NavigationBar setOpen={setOpen} />}
        {!isOpen && (
          <Fragment>
            <Content />
            <ContentGraph percentage={percentageContent} />
            <Skills />
            <Projects />
            <WorkExperience />
            <RatingCer />
            <Footer />
            {toggleUp && <ScreenToggler toggleHandler={toggleHandlerOnclick} />}
          </Fragment>
        )}
      </Container>
    </Fragment>
  )
}

export default App
