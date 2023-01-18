import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext';
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useUserAuth();

    if (!user) {
        navigate('/login');
    }
    return children;
};

export default ProtectedRoute;
