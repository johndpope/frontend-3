import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StandardProps } from '@material-ui/core';

class Loading extends React.Component<LoadingProps, any, any> {
  render() {
    const { size = 96, className, classes } = this.props;
    if (!classes) return;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        classes={{
          container: classes.root,
        }}
        className={className}>
        <Paper className={classes.paper}>
          <CircularProgress size={size} />
        </Paper>
      </Grid>
    );
  }
}

const styles = ({ palette: { primary } }: Theme) => ({
  root: {
    position: 'absolute',
    height: '100%',
    backgroundColor: 'gray',
    opacity: 0.5,
    zIndex: 1000,
  },
  paper: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  progress: {
    color: primary.dark,
  },
});

export default withStyles(styles as any)(Loading);

export interface LoadingProps extends StandardProps<any, any> {
  size?: number;
}
