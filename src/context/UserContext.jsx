// share the user's email using context
import { 
    createContext, useContext,
    useEffect, useMemo, useState
} from 'react';
import { getUser } from '../services/users'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const currentUser = getUser();

    const [user, setUser] = useState(
        currentUser ? { id: currentUser.id, email: currentUser.email } : {}
    );

    const value = useMemo(() => ({ user, setUser }), [user.id, user.email])

    useEffect(() => {
        if (currentUser) setUser(currentUser)
    }, [])

    return (
    <UserContext.Provider value={value}>
        {/* use children prop to render child components from within a Provider */}
        {children}
    </UserContext.Provider>
    )
}



export { UserProvider }