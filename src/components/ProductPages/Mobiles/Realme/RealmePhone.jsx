import { useEffect, useState } from "react";
import Displayrealme from "./Displayrealme";
import { Helmet } from "react-helmet";


const RealmePhone = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ecombackend-production-1c34.up.railway.app/mobiles/realmem')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error));
    }, [])

  return (
    <div className="justify-center flex bg-base-100 p-10">
              <Helmet>
        <title>Brand-Shop | Realme</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="container text-center justify-center grid">
            <h1 className="text-3xl font-bold p-10">Realme Phones</h1>
            {
                data.length === 0 ? (
                    <p className="text-3xl font-bold p-10">No Produtcs available</p>
                ) : (
                    <div className='gap-10 grid lg:grid-cols-3 md:grid-cols-2'>
                        {
                            data.map(movedata => <Displayrealme key={movedata._id} movedata={movedata} datadelete={data} setdataDelete={setData} />)
                        }
                    </div>
                )
            }
            
        </div>       
    </div>
  )
}

export default RealmePhone