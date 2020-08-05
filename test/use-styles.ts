import { createStyles, EM } from 'mic-global';

export const useStyles = createStyles(
  'demo',
  {
    padding: [EM.M1, EM.M1, EM.L3, EM.M1],
    height: 'auto',
    '& h4': {
      margin: [EM.M1, 0, EM.S2, 0],
      '&::before': {
        content: '"<"',
      },
      '&::after': {
        content: '" />"',
      },
    },
    '& dt': {
      fontWeight: 'bold',
      marginBottom: EM.S2,
      opacity: 0.5
    },
    '& dl': {
      marginTop: EM.S3,
    },
  }
);