import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import AppLayout from "../layouts/AppLayout";
import DemoLayout from "../layouts/DemoLayout";
import SearchPage from "../pages/search";
import ViewPage from "../pages/view";

const routers = [
    {
        path: '/',
        element: <HomePage/>,
        layout: 'AppLayout'
    },
    {
        path: '/about',
        element: <AboutPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/contact',
        element: <ContactPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/search/:slug',
        element: <SearchPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/view/:slug',
        element: <ViewPage/>,
        layout: 'AppLayout'
    }
];

routers.map(router => {

    if (router.layout === 'AppLayout') {
        router.element = <AppLayout>
            {router.element}
        </AppLayout>
    }

    return router;
})

export default routers;