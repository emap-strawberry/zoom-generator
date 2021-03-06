import React from 'react'
// recoil
import { getProfile } from 'components/generator/store'
import { useRecoilValue } from 'recoil'
// material ui components
import { makeStyles } from '@material-ui/core/styles';
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";

const styles = {
  main: {
    padding: '1rem',
    paddingRight: '0.2rem',
    paddingTop: 0
  },
  name: {
    fontSize: '3.5em',
    paddingBottom: 0,
    marginBottom: 0
  },
  affiliation: {
    fontSize: '2em'
  },
  description: {
    fontSize: '1.6em',
  },
  freeSpace: {
    fontSize: '1.5em',
    justifyItems: 'center'
  }
}

const useStyles = makeStyles(styles)


export default function ProfileBody() {
  const profile = useRecoilValue(getProfile)
  const classes = useStyles()
  return (
    <>
    <GridItem xs={4}>
      <div className={classes.main}>
        <h1 className={classes.name}>
          <span style={{ fontSize: '0.5em'}}>名前:</span><br/>
          {profile.firstName} {profile.lastName}
        </h1>
        <h1 className={classes.affiliation}>
          <span style={{ fontSize: '0.9em'}}>所属:</span><br/>
          {profile.affiliation}
        </h1>
        <h1 className={classes.description}>
          <span style={{ fontSize: '1.425em'}}>一言:</span><br />
          {profile.description}
        </h1>
      </div>
    </GridItem>
    <GridItem xs={5}>
      <div className={classes.freeSpace}>
        <h1>{profile.freespace}</h1>
      </div>
    </GridItem>
    </>
  )
}
