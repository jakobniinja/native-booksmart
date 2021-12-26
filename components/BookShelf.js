import React from 'react'
import { View, Text } from 'react-native'


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
    marginBottom: "20px"
  },
  text: {
      display: "flex",
      flexDirection: 'column',
      height: 60,
      width: 100,

  },
  textStyle:{
        fontSize: 9,
        fontWeight: 300
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function BookShelf() {
  const classes = useStyles();

    return (
        <View  style={{marginTop:"7%"}}>
          <Button variant="outlined" title="secondary" style={{marginBottom: "7%"}}   >Extend Collection </Button>
              <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
              <Paper className={classes.text}  >
                  <Text className={classes.textStyle} >points :14 </Text>
                  <Text className={classes.textStyle} >pages : 320 </Text>
                  <Text className={classes.textStyle} >lastRead : 02/17</Text>
                   </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
        </View>
    )
}
