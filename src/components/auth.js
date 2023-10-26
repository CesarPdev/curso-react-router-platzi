import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ['Admin', 'Pelusa'];

const AuthContext = createContext();

const AuthProvider = (props) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = ({ userName }) => {
        const isAdmin = adminList.find(admin => admin === userName);
        setUser({ userName, isAdmin });
        navigate('/profile');
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

const AuthRoute = (props) => {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to='/login' />
    }

    return props.children
}

export { AuthProvider, useAuth, AuthRoute };