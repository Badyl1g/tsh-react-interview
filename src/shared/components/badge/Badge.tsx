import { Chip as MatChip, withStyles } from '@material-ui/core';

const Badge = withStyles(({ spacing }) => ({
  root: {
    borderRadius: 0,
  },
  label: {
    fontSize: '1.4em',
    margin: `0 ${spacing()}px`,
  },
}))(MatChip);

export default Badge;
