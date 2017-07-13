import React from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'

const loadingElement = () => {
  return (
    <div style={{ height: `200px` }}>
      <FaSpinner
        style={{
          display: `block`,
          width: `80px`,
          height: `80px`,
          margin: `150px auto`,
          animation: `fa-spin 2s infinite linear`
        }}
      />
    </div>
  )
}

export default loadingElement
