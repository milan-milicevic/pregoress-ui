import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

/* Fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* Pages */
import { HomePage } from 'pages/Home';

/* Styles */
import GlobalStyle from 'global-styles';

// If more pages were necessary we would than have a routes folder where we would map all of those routes and nest them if we have to

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <HomePage />
  </StrictMode>,
  document.getElementById('root')
);
