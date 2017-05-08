import React from 'react'
import ReactTable from 'react-table'

const SearchResult = props => {
  const data = props.venue
  const columns = [
    {
      header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      header: 'City',
      accessor: 'location.city'
    },
    {
      header: 'Street Address',
      accessor: 'location.address'
    },
    {
      header: 'Latitude',
      accessor: 'location.lat'
    },
    {
      header: 'Longitude',
      accessor: 'location.lng'
    }
  ]
  return <ReactTable className='-striped -highlight' data={data} columns={columns} />
}

export default SearchResult
