import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AuthorRemoveProvider({children}) {

    const {pathname} = useLocation();

    useEffect(() => {
        if (!pathname.startsWith('/author')) {
            localStorage.removeItem('author');
        }
    }, [pathname])

    return children;
}

export default AuthorRemoveProvider;