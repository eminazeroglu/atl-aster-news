import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import SearchPage from "../pages/search";
import ViewPage from "../pages/view";
import AuthorPage from "../pages/author";

const routers = [
    {
        path: '/',
        name: 'home',
        element: <HomePage/>,
        layout: 'AppLayout'
    },
    {
        path: '/about',
        name: 'about',
        element: <AboutPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/contact',
        name: 'contact',
        element: <ContactPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/search/:slug',
        name: 'search',
        element: <SearchPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/view/:slug',
        name: 'view',
        element: <ViewPage/>,
        layout: 'AppLayout'
    },
    {
        path: '/author/:slug',
        name: 'author',
        element: <AuthorPage/>,
        layout: 'AppLayout'
    }
];

export default routers;