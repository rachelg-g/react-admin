import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Launch } from '@material-ui/icons'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    paddingLeft: 2,
  },
})
const MyUrlField = ({ record = {}, source }) => {
  const classes = useStyles()

  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <Launch className={classes.icon} />
    </a>
  )
}

export default MyUrlField
