import { useRoutes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import routers from "../routers/routers";
import AuthorRemoveProvider from "./AuthorRemoveProvider";

function GlobalProvider() {

    const routerArr = routers.map(router => {
        if (router.layout === 'AppLayout' && !router.element.props?.children) {
            router.element = <AppLayout>
                {router.element}
            </AppLayout>
        } 
  
        return router;
    }) 

    const RouterComponent = () => useRoutes(routerArr);

    return (
        <>
            <AuthorRemoveProvider>
                <RouterComponent />
            </AuthorRemoveProvider>
        </>
    );
}

export default GlobalProvider;