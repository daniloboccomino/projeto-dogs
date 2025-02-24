import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryBar, VictoryChart, VictoryPie } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    })
    setGraph(graphData)
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.graphItem} ${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={40}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.8,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 12,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar
            alignment='start'
            data={graph}
          />
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
