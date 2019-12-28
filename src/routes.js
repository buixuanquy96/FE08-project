import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';


import Checkout from './pages/Checkout/Checkout';
import News from './pages/News/News';
import Products from './pages/Products/Products';
import ProductFilter from './pages/Products/ProductFilter';
import Signup from './pages/Signup/Signup'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BlogSingle from './pages/BlogSingle/BlogSingle';
import CartContainer from './pages/Cart/CartContainer';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/login',
        exact: false,
        main: ({history}) => <Login history={history} />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer />
    },
    {
        path: '/news',
        exact: false,
        main: () => <News />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '/products/:slug',
        exact: false,
        main: ({match}) => <ProductFilter match={match}/>
    },
        {
        path: '/products',
        exact: false,
        main: () => <Products/>
    },
    {
        path: '/signup',
        exact: false,
        main: ({history}) => <Signup history={history} />
    },
    {
        path: '/product-details/:id',
        exact: false,
        main: ({match}) => <ProductDetails match={match}/>
    },
    {
        path: '/blog-single',
        exact: false,
        main: () => <BlogSingle />
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;