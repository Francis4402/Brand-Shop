import {MdOutlineBrandingWatermark, MdOutlineLocationOn} from 'react-icons/md'
import {BsTruck} from 'react-icons/bs'
import { Link, NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/Authprovider'

const Navbar = () => {

  
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");

  const handleToggle = e => {
    if(e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);

  const {user, logOut} = useContext(AuthContext)

  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchdata = async () => await fetch('https://ecombackend-production-1c34.up.railway.app/cartview')
        
        .then(res => res.json())
        .then((data) => {
          setData(data);      
        })
        .catch(error => console.error('Error fetching data', error));

        fetchdata();

        const updateInterval = setInterval(fetchdata, 1000);

        return () => {
          clearInterval(updateInterval);
        };

    }, [])

  const handleLogOut = () => {
    logOut()
    .then(() => console.log('User Logged Out Successfully'))
    .catch(error => console.error(error))
  }

  const HomeRoutes = <>
      <NavLink to="/"><label className="btn btn-ghost"><li>Home</li></label></NavLink>
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:flex hidden">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><li>Products</li></label>
      </div> 
      <div className="drawer-side">
      
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu py-10 sm:w-72 w-52 min-h-full bg-base-200">

          <div className="drawer">
            <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content space-y-3">
              <div className='justify-center flex'>
                <img className='w-32' src='/MainLogo.png' alt='image' />
              </div>
              {/* Page content here */}

              <div className='justify-end flex'>
                <label htmlFor="my-drawer2" className="btn btn-ghost drawer-button">Mobiles</label>
              </div>
              
            </div> 
            <div className="drawer-side z-10">
        
              <label htmlFor="my-drawer2" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu py-44 md:w-36 w-auto min-h-full bg-base-200 divide-y-2 divide-base-300">
                  <Link to="/applemobiles"><li><p>Apple</p></li></Link>
                  <Link to="/samsungmobile"><li><p>Samsung</p></li></Link>
                  <Link to="/googlepixelmobile"><li><a>Google Pixel</a></li></Link>
                  <Link to="/xiaomimobile"><li><a>Xiaomi</a></li></Link>
                  <Link to="/realmemobile"><li><a>Realme</a></li></Link>
                  <Link to="/nokiamobile"><li><a>Nokia</a></li></Link>
              </ul>
            </div>
          </div>

          <div className="drawer mt-3">
            <input id="my-drawer6" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

              {/* Page content here */}

              <div className='justify-end flex'>
                <label htmlFor="my-drawer6" className="btn btn-ghost drawer-button">Tablet</label>
              </div>
              
            </div> 
            <div className="drawer-side z-10">
        
              <label htmlFor="my-drawer6" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu py-44 md:w-36 w-auto min-h-full bg-base-200 divide-y-2 divide-base-300">
                <Link to="/appletablet"><li><p>Apple</p></li></Link>
                <Link to="/googletablet"><li><p>Google</p></li></Link>
                <Link to="/samsungtablet"><li><p>Samsung</p></li></Link>
                <Link to="/xiaomitablet"><li><p>Xiaomi</p></li></Link>
                <Link to="/lenovotablet"><li><p>Lenovo</p></li></Link>
              </ul>
            </div>
          </div>
          
          <div className="drawer mt-3">
            <input id="my-drawer3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

              {/* Page content here */}

              <div className='justify-end flex'>
                <label htmlFor="my-drawer3" className="btn btn-ghost drawer-button">Headphone</label>
              </div>
              
            </div> 
            <div className="drawer-side z-10">
        
              <label htmlFor="my-drawer3" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu py-44 md:w-36 w-auto min-h-full bg-base-200 divide-y-2 divide-base-300">
                <Link to="/fantechheadphones"><li><p>Fantech</p></li></Link>
                <Link to="/havitheadphones"><li><p>Havit</p></li></Link>
                <Link to="/boseheadphones"><li><p>Bose</p></li></Link>
                <Link to="/gamdiasheadphones"><li><p>Gamdias</p></li></Link>
                <Link to="/razerheadphones"><li><p>Razer</p></li></Link>
              </ul>
            </div>
          </div>


          <div className="drawer mt-3">
            <input id="my-drawer4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

              {/* Page content here */}

              <div className='justify-end flex'>
                <label htmlFor="my-drawer4" className="btn btn-ghost drawer-button">Laptop</label>
              </div>
              
            </div> 
            <div className="drawer-side z-10">
        
              <label htmlFor="my-drawer4" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu py-44 md:w-36 w-auto min-h-full bg-base-200 divide-y-2 divide-base-300">
                <Link to="/razerlaptop"><li><p>Razer</p></li></Link>
                <Link to="/applelaptop"><li><p>Apple</p></li></Link>
                <Link to="/hplaptop"><li><p>HP</p></li></Link>
                <Link to="/delllaptop"><li><p>Dell</p></li></Link>
                <Link to="/asuslaptop"><li><p>Asus</p></li></Link>
              </ul>
            </div>
          </div>

        </ul>
      </div>
    </div>
  </>

  const logins = <>
    {
      !user && <> 
        <NavLink to='/login'><li className='btn btn-ghost'>Login</li></NavLink>
        <NavLink to='/register'><li className='btn btn-ghost'>Register</li></NavLink>
      </>
    }
  </>

  return (
    <div>
      <div className='justify-center md:flex bg-base-200 p-5 hidden'>
        <div className='justify-between flex container'>
          <div className='flex items-center gap-3'>
            <p className='text-gray-500'><MdOutlineBrandingWatermark /></p>
            <p className='uppercase text-xs text-gray-500'>Welcome To worldwide Tech & elecltronics store</p>
          </div>

          <div className='flex items-center gap-8'>
              <div className='flex items-center gap-3'>
                <p className='text-gray-500'><MdOutlineLocationOn /></p>
                <p className='uppercase text-xs text-gray-500'>Store Locator</p>
              </div>
              <div className='flex items-center gap-3'>
                <p className='text-gray-500'><BsTruck /></p>
                <p className='uppercase text-xs text-gray-500'>Free Shipping & Returns</p>
              </div>
          </div>
        </div>
      </div>

      <div className='justify-center flex bg-base-300 p-5'>
        <div className="navbar container">
          <div className="flex-1 md:gap-5 gap-0">
            <Link to="/" className='flex items-center gap-3'>
              <img className='md:w-20 w-12' src='/MainLogo.png' alt='image' />
            </Link>

            <div className='list-none font-bold flex lg:gap-9'>
              {HomeRoutes}
            </div>

            <div>
              <label className="swap swap-rotate">
      
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleToggle} />
                
                {/* sun icon */}
                <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                {/* moon icon */}
                <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
              </label>
            </div>

          </div>


          {
            user ? <div className="flex-none gap-1">
            <Link to="/cartview">
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">
                      {data.length}
                    </span>
                  </div>
                </label>
              </div>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt='i' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <p className="md:text-base text-xs">{user?.displayName}</p>
                </li>
                <Link to='/addproduct'><li><p>Add Product</p></li></Link>
                <label htmlFor="my-drawer" className="drawer-button md:hidden"><li><p>Products</p></li></label>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>
          </div> :  <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-md dropdown-content z-[1] font-bold bg-base-200 p-4 rounded-box">
                                <Link to="/cartview">
                                  <div>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                      <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">
                                          {data.length}
                                        </span>
                                      </div>
                                    </label>
                                  </div>
                                </Link>
                                {logins}
                                <label htmlFor="my-drawer" className="md:hidden btn btn-ghost"><li>Products</li></label>
                                
                            </ul>
                        </div>

                    <ul tabIndex={0} className="menu menu-horizontal px-1 gap-3 hidden lg:flex">
                      <Link to="/cartview">
                        <div>
                          <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                              <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                              <span className="badge badge-sm indicator-item">
                                {data.length}
                              </span>
                            </div>
                          </label>
                        </div>
                      </Link>
                        {logins}
                                            
                    </ul>
                </div>
          }
        </div>

      </div>
    </div>  
    
  )
}

export default Navbar