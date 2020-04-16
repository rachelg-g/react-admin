import React from 'react'

const MyUrlField = ({ record = {}, source }) => {
  return <a href={record[source]}>{record[source]}</a>
}

export default MyUrlField
