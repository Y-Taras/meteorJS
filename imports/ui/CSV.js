import React, { PropTypes } from 'react'

const CsvExport = props => {
  const data = props.venue
  const csvContent = data.reduce((previous, current) => {
    return (
      previous +
      `${current.name},${current.location.city},${current.location.address},${current.location.lat},${current.location.lng}\n`
    )
  }, 'data:text/csv;charset=utf-8,')
  var encodedUri = encodeURI(csvContent)

  return (
    <div>
      <a className='myButton' download='venues.csv' onClick={() => window.open(encodedUri)}>
        Export CSV
      </a>
    </div>
  )
}

CsvExport.propTypes = {
  venues: PropTypes.arrayOf(PropTypes.object)
}

export default CsvExport
