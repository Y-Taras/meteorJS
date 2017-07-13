import React, { PropTypes } from 'react'

const CsvExport = props => {
  const data = props.venue
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    data
      .map(elem => {
        return `${elem.name},${elem.location.city},${elem.location.address},${elem.location.lat},${elem.location.lng}`
      })
      .join('\n')
  var encodedUri = encodeURI(csvContent)

  return (
    <div>
      <a
        className='myButton'
        download='venues.csv'
        onClick={() => window.open(encodedUri)}
      >
        Export CSV
      </a>
    </div>
  )
}

CsvExport.propTypes = {
  venues: PropTypes.arrayOf(PropTypes.object)
}

export default CsvExport
