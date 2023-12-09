import { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import { Helmet } from "react-helmet";

const Cartview = () => {

  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://brand-shopserve-side-francisms-projects.vercel.app/cartview')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error));
    }, [])

  return (
    <div className="justify-center flex p-10">
        <Helmet>
            <title>Brand-Shop | Cartview</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="container text-center justify-center grid">
            <h1 className="text-3xl font-bold p-10">Cart</h1>
            {
                data.length === 0 ? (
                    <p className="text-3xl font-bold p-10">No produtcs added in cart</p>
                ) : (
                    <div className='gap-10 grid'>
                        {
                            data.map(movedata => <CartDetails key={movedata._id} movedata={movedata} datadelete={data} setdataDelete={setData} />)
                        }
                    </div>
                )
            }
            
        </div>       
    </div>
  )
}

export default Cartview