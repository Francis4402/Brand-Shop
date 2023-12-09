import { useEffect, useState } from "react"
import DisplayApple from "./DisplayApple";
import { Helmet } from "react-helmet";


const AppleMobiles = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://brand-shopserve-side-francisms-projects.vercel.app/mobiles/applem')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error));
    }, [])

  return (
    <div className="justify-center bg-base-100 flex p-10">
              <Helmet>
        <title>Brand-Shop | Apple</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="container text-center justify-center grid">
            <h1 className="text-3xl font-bold p-10">Apple Phones</h1>
            {
                data.length === 0 ? (
                    <p className="text-3xl font-bold p-10">No Produtcs available</p>
                ) : (
                    <div className='gap-10 grid lg:grid-cols-3 md:grid-cols-2'>
                        {
                            data.map(movedata => <DisplayApple key={movedata._id} movedata={movedata} datadelete={data} setdataDelete={setData} />)
                        }
                    </div>
                )
            }
            
        </div>       
    </div>
  )
}

export default AppleMobiles