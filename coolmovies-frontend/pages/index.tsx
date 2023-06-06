import { css } from '@emotion/react';
import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material';
import type { NextPage } from 'next';
import { listReviewsActions, useAppDispatch, useAppSelector } from '../redux';

const primary = '#a32cc4';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const listReviewState = useAppSelector((state) => state.review);
  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Typography>{'EcoPortal'}</Typography>
      </Paper>

      <div css={styles.body}>
        <Typography variant={'h1'} css={styles.heading}>
          {'EcoPortal Coolmovies Reviews'}
        </Typography>
        <Typography variant={'subtitle1'} css={styles.subtitle}>
          {`Read and Change some Movies Reviews by clicking the Button below`}
        </Typography>

        <div css={styles.mainControls}>
          <Button
            variant={'outlined'}
            onClick={() =>
              dispatch(
                listReviewState.reviews
                  ? listReviewsActions.clearData()
                  : listReviewsActions.fetch()
              )
            }
          >
            {listReviewState.reviews ? 'Hide Review' : 'Fetch Review'}
          </Button>
        </div>

        <Zoom in={Boolean(listReviewState.reviews)} unmountOnExit mountOnEnter>
          <TextField
            css={styles.dataInput}
            multiline
            label={'Some Data'}
            defaultValue={JSON.stringify(listReviewState.reviews)}
          />
        </Zoom>
      </div>
    </div>
  );
};

const styles = {
  root: css({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  navBar: css({
    background: primary,
    height: 50,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    borderRadius: 0,
    p: {
      color: 'white',
    },
  }),
  body: css({
    alignSelf: 'stretch',
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  heading: css({ marginTop: 16, fontSize: '2.75rem', textAlign: 'center' }),
  subtitle: css({
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: 300,
    margin: '24px 0',
    maxWidth: 600,
    textAlign: 'center',
  }),
  mainControls: css({
    alignItems: 'center',
    button: { marginRight: 16 },
    color: primary,
    display: 'flex',
  }),
  dataInput: css({
    alignSelf: 'stretch',
    margin: '32px 0',
  }),
};

export default Home;
