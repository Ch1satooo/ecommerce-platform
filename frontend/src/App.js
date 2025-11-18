// App.js

/**
 * The root component of the User Interface (UI) tree.
 * This component acts as the main UI entry point and is rendered
 * by index.js as the application's root component.
 * All other components typically branch off from here.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // named import
import Login from './pages/Login';  // default import

// Component Function
/**
 * Naming convention note:
 * Component names must start with a capital letter (e.g., <Button />).
 * Standard HTML elements use lowercase names (e.g., <div />).
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
