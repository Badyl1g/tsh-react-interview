import { Card as MatCard, withStyles } from '@material-ui/core';

const Card = withStyles({
  root: {
    borderRadius: 8,
    boxShadow: 'none',
  },
})(MatCard);

export default Card;
