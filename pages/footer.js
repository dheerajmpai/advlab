import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://hyperweb.ai">
        Hyperweb Media Private Limited
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


const footers = [
  {
    title: 'Company',
    description: [
      { 'title': 'Team', 'url': '/team' },
      { 'title': 'History', 'url': '/history' },
      { 'title': 'Contact Us', 'url': '/contactus' },
      { 'title': 'Locations', 'url': '/locations' },
    ],
  },
  {
    title: 'Features',
    description: [
      { 'title': 'Latest Updates', 'url': '/team' },
      { 'title': 'Random feature', 'url': '/history' },
      { 'title': 'Team feature', 'url': '/contactus' },
      { 'title': 'Developers', 'url': '/locations' },
    ],

  },
  {
    title: 'Resources',
    description: [
      { 'title': 'Resource', 'url': '/team' },
      { 'title': 'Resource name', 'url': '/history' },
      { 'title': 'Another resource', 'url': '/contactus' },
      { 'title': 'Final resource', 'url': '/locations' },
    ],
  },
  {
    title: 'Legal',
    description: [
      { 'title': 'Privacy policy', 'url': '/privacy' },
      { 'title': 'Terms of use', 'url': '/terms' },
    ],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item.title}>
                    <Link href={item.url} variant="subtitle1" color="textSecondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
