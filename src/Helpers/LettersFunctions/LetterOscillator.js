import { Fragment, useState, useEffect } from 'react'
import classes from './LetterOscillator.module.css'
const LetterOscillator = props => {
  const arrChar = props.char
  const [renderChar, setRenderChar] = useState('A')
  useEffect(() => {
    if (renderChar !== arrChar) {
      setTimeout(() => {
        var nxtChar = renderChar.charCodeAt(0) + 1
        setRenderChar(String.fromCharCode(nxtChar))
      }, 85)
    }
  }, [renderChar, arrChar])
  return (
    <Fragment>
      <p className={classes.FlipWords}>{renderChar}</p>
    </Fragment>
  )
}
export default LetterOscillator
