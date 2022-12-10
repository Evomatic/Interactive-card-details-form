import './CompleteView.css';

import { Box } from '@mui/material';

import completeIcon from './assets/icon-complete.svg';

function CompleteView() {
  return (
    <Box className="complete-view-container">
      <img className="complete-icon" src={completeIcon} alt="complete icon" />
      <span className="thank-you-text">THANK YOU!</span>
      <span className="descriptive-text">
        We&apos;ve added your card details
      </span>
    </Box>
  );
}

export default CompleteView;
