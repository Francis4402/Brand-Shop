import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Authprovider from './components/Provider/Authprovider';
import Logins from './components/SignUpPages/Logins';
import Register from './components/SignUpPages/Register';
import AddProduct from './components/AddProduct/AddProduct';
import AppleMobiles from './components/ProductPages/Mobiles/apple/AppleMobiles';
import SamsungMobiles from './components/ProductPages/Mobiles/Samsung/SamsungMobiles';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import ProductDetails from './components/Product Details/ProductDetails';
import Googlepixel from './components/ProductPages/Mobiles/GooglePixel/Googlepixel';
import Xiaomiphone from './components/ProductPages/Mobiles/Xiaomi/Xiaomiphone';
import RealmePhone from './components/ProductPages/Mobiles/Realme/RealmePhone';
import AppleTablet from './components/ProductPages/Tablet/Apple/AppleTablet';
import GoogleTablet from './components/ProductPages/Tablet/Google/GoogleTablet';
import Samsungtablet from './components/ProductPages/Tablet/Samsung/Samsungtablet';
import XiaomiTablet from './components/ProductPages/Tablet/Xiaomi/XiaomiTablet';
import LenovoTablet from './components/ProductPages/Tablet/Lenovo/LenovoTablet';
import Fantechheadphone from './components/ProductPages/Headphones/Fantech/Fantechheadphone';
import BoseHeadphones from './components/ProductPages/Headphones/Bose/BoseHeadphones';
import Gamdiasheadphone from './components/ProductPages/Headphones/Gamdias/Gamdiasheadphone';
import Havitsheadphones from './components/ProductPages/Headphones/Havit/Havitsheadphones';
import Razerheadphones from './components/ProductPages/Headphones/Razer/Razerheadphones';
import AppleLaptop from './components/ProductPages/LapTop/Apple/AppleLaptop';
import AsusLaptop from './components/ProductPages/LapTop/Asus/AsusLaptop';
import DellLaptop from './components/ProductPages/LapTop/Dell/DellLaptop';
import HpLaptop from './components/ProductPages/LapTop/Hp/HpLaptop';
import RazerLaptop from './components/ProductPages/LapTop/Razer/RazerLaptop';
import NokiaPhone from './components/ProductPages/Mobiles/Nokia/NokiaPhone';
import Cartview from './components/CartView/Cartview';
import Aboutus from './components/Tarms&About/Aboutus';
import Cookiepolicy from './components/Tarms&About/Cookiepolicy';
import Privacypolicy from './components/Tarms&About/Privacypolicy';
import Termsofuse from './components/Tarms&About/Termsofuse';
import PrivateRoute2 from './components/PrivateRoute/PrivateRoute2';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Page404 from './components/ErrorPages/Page404';
import PageError from './components/ErrorPages/PageError';
import PrivateRoute3 from './components/PrivateRoute/PrivateRoute3';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <PrivateRoute2><Logins /></PrivateRoute2>
      },
      {
        path: '/register',
        element: <PrivateRoute2><Register /></PrivateRoute2>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct /></PrivateRoute>,
      },
      {
        path: '/applemobiles',
        element: <AppleMobiles />
      },
      {
        path: '/samsungmobile',
        element: <SamsungMobiles />
      },
      {
        path: '/googlepixelmobile',
        element: <Googlepixel />
      },
      {
        path: '/xiaomimobile',
        element: <Xiaomiphone />
      },
      {
        path: '/realmemobile',
        element: <RealmePhone />
      },
      {
        path: '/nokiamobile',
        element: <NokiaPhone />
      },
      {
        path: '/appletablet',
        element: <AppleTablet />,
      },
      {
        path: '/googletablet',
        element: <GoogleTablet />,
      },
      {
        path: '/samsungtablet',
        element: <Samsungtablet />,
      },
      {
        path: '/xiaomitablet',
        element: <XiaomiTablet />,
      },
      {
        path: '/lenovotablet',
        element: <LenovoTablet />,
      },
      {
        path: '/fantechheadphones',
        element: <Fantechheadphone />,
      },
      {
        path: '/boseheadphones',
        element: <BoseHeadphones />,
      },
      {
        path: '/gamdiasheadphones',
        element: <Gamdiasheadphone />,
      },
      {
        path: '/havitheadphones',
        element: <Havitsheadphones />,
      },
      {
        path: '/razerheadphones',
        element: <Razerheadphones />,
      },
      {
        path: '/applelaptop',
        element: <AppleLaptop />,
      },
      {
        path: '/asuslaptop',
        element: <AsusLaptop />,
      },
      {
        path: '/delllaptop',
        element: <DellLaptop />,
      },
      {
        path: '/hplaptop',
        element: <HpLaptop />,
      },
      {
        path: '/razerlaptop',
        element: <RazerLaptop />,
      },
      {
        path: '/cartview',
        element: <Cartview />,
      },
      {
        path: '/about',
        element: <Aboutus />,
      },
      {
        path: '/cookie',
        element: <Cookiepolicy />
      },
      {
        path: '/privacypocliy',
        element: <Privacypolicy />
      },
      {
        path: '/terms',
        element: <Termsofuse />
      },
      {
        path: '/updateproduct/:categories/:brandname/:id',
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: async ({params}) => await fetch(`https://brand-shopserve-side.vercel.app//${params.categories}/${params.brandname}/${params.id}`)
      },
      {
        path: '/productdetails/:categories/:brandname/:id',
        element: <PrivateRoute3><ProductDetails /></PrivateRoute3>,
        loader: async ({params}) => await fetch(`https://brand-shopserve-side.vercel.app//${params.categories}/${params.brandname}/${params.id}`)
      },
      {
        path: '/*',
        element: <Page404 />
      }
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
