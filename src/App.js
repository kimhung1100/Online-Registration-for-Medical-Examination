import { Fragment, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import {UserContext} from './components/UserContext';
function App() {
    const [user,setUser] = useState({
        key: 0,
        login: false,
        userName:"",
        password:"",
        phone:"",
        gender:"",
        role: 'Khach Hang'
    });
    const value = useMemo (() => ({user, setUser}), [user,setUser]);
    const [admin,setAdmin] = useState({
        key: 0,
        login: false,
        name: "",
        userName:"",
        password:"",
        department:"",
        role: "",
        status: ""
    });
    return (
        <Router>
            <div className="App">
            <UserContext.Provider value={[[user,setUser], [admin, setAdmin]]}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        {
                            /* if (route.path === './gioi-thieu') {
                            handleTrangChu();
                        } */
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                </UserContext.Provider>
            </div>
        </Router>
    );
}

export default App;
