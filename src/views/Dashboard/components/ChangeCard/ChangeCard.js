import * as React from 'react';
import { Swipeable, direction } from 'react-deck-swiper';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardButtons from '../CardButtons';
import Card from '../Card';
import useStyles from './styles';

const INITIAL_CARDS_STATE = [
  {
    id: 1,
    title: 'This is react deck swiper',
    text: 'It allows you to build tinder-like swipeable cards easily',
    url: 'https://images.unsplash.com/photo-1496248051939-0382a018e59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'and it\'s awesome!',
    text: 'So, what are you waiting for? 🚀',
    url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'and it\'s awesome!',
    text: 'So, what are you waiting for? 🚀',
    url: 'https://images.unsplash.com/photo-1496248051939-0382a018e59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'and it\'s awesome!',
    text: 'So, what are you waiting for? 🚀',
    url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
];

const ChangeCard = () => {
  const classes = useStyles();

  const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);
  const [cards, setCards] = React.useState(INITIAL_CARDS_STATE);

  const handleOnSwipe = (swipeDirection) => {
    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection('your right');
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection('your left');
    }

    setCards((prev) => prev.slice(1));
  };

  const renderButtons = ({right, left,}) => (
    <CardButtons
      right={right}
      left={left}
    />
  );

  return (
    <Grid container spacing={3} className={classes.centerContent}>

      {
        cards.length > 0 && (
          <Grid item xs={12} className={classNames(classes.marginTop2, classes.centerContent)}>
            {
              lastSwipeDirection
                ? (
                  <Typography variant="body1">
                    {'Looks like you have just swiped to '}
                    {lastSwipeDirection}
                    ? 🔮
                  </Typography>
                )
                : (
                  <Typography variant="body1">
                    Try swiping the card below!
                  </Typography>
                )
            }
          </Grid>
        )
      }

      <Grid item xs={12} className={classNames(classes.marginTop2, classes.centerContent)}>
        {
          cards.length > 0
            ? (
              <Swipeable
                renderButtons={renderButtons}
                onSwipe={handleOnSwipe}
              >
                <Card item={cards[0]} />
              </Swipeable>
            )
            : (
              <Typography variant="body1">
                Looks like you have reached the end here =)
              </Typography>
            )
        }
      </Grid>
    </Grid>
  );
};

export default ChangeCard;
