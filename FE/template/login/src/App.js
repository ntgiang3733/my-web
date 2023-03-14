// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

function App() {
    return (
        <ThemeProvider>
            {/* <StyledChart /> */}
            <Router />
        </ThemeProvider>
    );
}

export default App;
