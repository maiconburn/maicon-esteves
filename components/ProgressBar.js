import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  line: {
    height: '8px',
    marginBottom: '18px'
  }
}));

export default function ProgressBar(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        if (oldCompleted > props.progress) {
          clearInterval(timer)
          return props.progress
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }
    const timer = setInterval(progress, 100);
    
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress className={classes.line} variant="determinate" value={completed} />
    </div>
  );
}