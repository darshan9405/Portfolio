import classes from './ContentGraph.module.css'
const ContentGraph = () => {
  return (
    <div className={classes.contentGraph} id={'Academics'}>
      <h2 style={{ fontSize: '2.5rem' }}>Academics</h2>
      <br />
      <br />
      <div className={classes.growthCard}>
        <div className={classes.graphDiv}>
          <div className={`${classes.graph}`} id='graph1'>
            <span className={classes.blink}>•</span>
            <div className={classes.card}>
              <ul>
                <li style={{ margin: '0' }}>
                  Bachelor of Engineering in Information Technology from Pune
                  Institute of Computer Technology, Pune.
                </li>
              </ul>
            </div>
          </div>
          <div id={'line1'}></div>
          <div className={`${classes.graph}`} id='graph2'>
            <span className={classes.nonblink}>•</span>
            <div className={classes.card}>
              <ul>
                <li>
                  Junior college from Shri Balaji Junior College, Ichalkaranji
                </li>
                <li>HSC 84.9%</li>
                <li>Jee Main 96%ile</li>
                <li>Mht Cet 99.6%ile</li>
              </ul>
            </div>
          </div>
          <div className={classes.graph}>
            <span className={classes.nonblink}>•</span>
            <div className={classes.card}>
              <ul>
                <li>
                  Schooling from D.K.T.E English Medium Highschool, Ichalkaranji
                </li>
                <li>SSC 93.6%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentGraph
