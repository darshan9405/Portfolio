import classes from './ContentGraph.module.css'
const ContentGraph = () => {
  return (
    <div className={classes.growthCard}>
      <div className={classes.graphDiv}>
        <div className={classes.graph}>
          <span className={classes.nonblink}>•</span>
        </div>
        <div className={classes.line}></div>
        <div className={classes.graph}>
          <span className={classes.nonblink}>•</span>
        </div>
        <div className={classes.line}></div>
        <div className={classes.graph}>
          <span className={classes.blink}>•</span>
        </div>
      </div>
      <div className={classes.infDiv}>
        <div className={classes.card}>Born 12/12/2002</div>
        <br />
        <br />
        <div className={classes.card}>
          <p style={{ margin: '0' }}>
            Schooling and Junior College, from Ichalkaranji.
          </p>
        </div>
        <br />
        <br />
        <div className={classes.card}>
          <p style={{ margin: '0' }}>
            Bachelor of Engineering,Information Technology
            Pune Institute of Computer Technology 
            2021-Present Pune -India
          </p>
        </div>
      </div>
    </div>
  )
}
export default ContentGraph
