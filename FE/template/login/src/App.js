// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';

function App() {
    return (
        <ThemeProvider>
            {/* <StyledChart /> */}
            <Router />
        </ThemeProvider>
    );
}

export default App;
