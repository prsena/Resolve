import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Brand font: Pixelify Sans
import '@fontsource/pixelify-sans/latin-400.css';
import '@fontsource/pixelify-sans/latin-500.css';
import '@fontsource/pixelify-sans/latin-700.css';

// Heading font: Quicksand
import '@fontsource/quicksand/latin-400.css';
import '@fontsource/quicksand/latin-600.css';
import '@fontsource/quicksand/latin-700.css';

// Body font: DM Sans
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import '@fontsource/dm-sans/latin-400-italic.css';

// Technical font: Jetbrains Mono
import '@fontsource/jetbrains-mono/latin-400.css';

import theme from './theme/theme';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
