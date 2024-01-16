import { useRoutes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import routers from "../routers/routers";

function GlobalProvider() {

    const routerArr =  routers.map(router => {

        if (router.layout === 'AppLayout') {
            router.element = <AppLayout>
                {router.element}
            </AppLayout>
        }
    
        return router;
    })
    

    const RouterComponent = () => useRoutes(routerArr);

    return (
        <>
            <RouterComponent/>
        </>
    );
}

export default GlobalProvider;