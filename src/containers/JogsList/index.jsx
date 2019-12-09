import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getJogs } from "../../store/actions/jogs"
import EmptyList from "../../components/EmptyList"

const JogsList = ({ getJogs, jogs }) => {
  useEffect(() => {
    getJogs()
  }, [getJogs])

  return (
    <>
      {jogs.length ? (
        jogs.map((jog) => (
          <div key={jog.id}>
            <p>{jog.distance}</p>
            <p>{jog.time}</p>
            <p>{jog.date}</p>
          </div>
        ))
      ) : (
        <EmptyList></EmptyList>
      )}
    </>
  )
}

export default connect(({ jogs }) => ({ jogs: jogs }), { getJogs })(JogsList)
