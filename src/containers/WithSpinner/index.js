import React from "react"
import ClipLoader from "react-spinners/ClipLoader"

import useStyles from "./styles"

const withSpinner = (Comp, nodeName) => ({ isLoading, children, ...props }) => {
  const { spinner, view, invisible } = useStyles()

  const isEmpty = props[nodeName] === null || props[nodeName].length === 0

  return (
    <>
      {isEmpty && !!isLoading && (
        <div className={spinner}>
          <ClipLoader size={70} color={"#7ed321"} isLoading={!!isLoading} />
        </div>
      )}
      <div className={isEmpty && !!isLoading ? invisible : view}>
        <Comp {...props}>{children}</Comp>
      </div>
    </>
  )
}

export default withSpinner
