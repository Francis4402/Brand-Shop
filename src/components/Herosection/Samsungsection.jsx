import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import DisplaySamsung from "./DisplaySamsung";

const Samsungsection = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://brand-shopserve-side-francisms-projects.vercel.app/mobiles/samsungm')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error));
    }, [])

  return (
    <div className="justify-center flex p-10 bg-base-200">
        <div className="container text-center justify-center grid">
            {
                data.length === 0 ? (
                    <p className="text-3xl font-bold p-10">No Produtcs available</p>
                ) : (
                    <div className="flex justify-center w-full">
                        <div className='flex sm:container sm:h-[400px] w-72 h-64 shadow'>
                            <Marquee pauseOnHover={true}>
                                {
                                    data.map(movedata => <DisplaySamsung key={movedata._id} movedata={movedata} />)
                                }
                            </Marquee>
                        
                        </div>
                    </div>
                    
                )
            }
            
        </div>       
    </div>
  )
}

export default Samsungsection