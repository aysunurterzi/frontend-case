import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import CreateUserPage from './pages/CreateUserPage';
import UserDataPage from './pages/UserDataPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateUserPage />} />
                <Route path="/user-data" element={<UserDataPage />} />
            </Routes>
        </Router>
    );
}

export default App;