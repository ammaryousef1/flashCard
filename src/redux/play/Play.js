import { useSelector } from "react-redux"
import { selectAllMean } from "../meanSlice"
import './play.css'

const Play =  () => {
    const mean = useSelector(selectAllMean)

    const renderedwords = mean.map(mean => (
           <main>
              <div className="thefront">
               <h3 className="">{mean.word.substring(0 , 100)}</h3>
              </div>
              <div className="theback">
                <h3>{mean.means}

                </h3>
              </div>
           </main>
    ))

    return (
      <section className="section">
      {renderedwords}
      <button className="btn">Next</button>
      </section>
    )
}

export default Play