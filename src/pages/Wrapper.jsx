import React, { useEffect } from 'react'
import { supabase } from '../auth/supabaseClient'
import { Navigate } from 'react-router-dom'
function Wrapper({children}) {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const session = async () => {
            const session = supabase.auth.getSession();
            setAuthenticated(!!session);
            setLoading(false);
        }
        session();
    }, []);
    if (loading) {
        return <h1>Loading...</h1>
    }
    else {
        if (authenticated) {
            return <>{children}</>
        }
        return <Navigate to="/login" />
    }
}

export default Wrapper;
