import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsCartPlus} from 'react-icons/bs';
import Swal from 'sweetalert2'

const AppleCard = () => {

    const [data, setData] = useState([]);
    
    const {categories, brandname , photo , name , price,_id} = data;
    
    useEffect(() => {
        fetch('https://ecombackend-production-1c34.up.railway.app/mobiles/applem/65311b4ce5a2cb5ec7ab4580')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data', error));
    }, [])

    const handleAddtocart = () => {
      fetch('https://ecombackend-production-1c34.up.railway.app/cartview', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Added to Cart',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }
      })
    }

  return (
    <div className="justify-center flex">
      <div className="container">
        <div className="card md:w-80 w-full justify-center text-center bg-base-300 shadow-xl">
          <figure><img width="100%" src={photo} alt="i" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <hr className='border' />
            <p className='text-xl font-semibold text-base-content'>{price} ট</p>
            <div className="card-actions sm:justify-between justify-center">

            <button onClick={() => handleAddtocart(_id)} className="btn btn-neutral"><BsCartPlus className='text-lg' /> Buy Now</button>
              
              <Link to={`/productdetails/${categories}/${brandname}/${_id}`}>
                <button className="btn btn-warning">Details</button>
              </Link>
                    
            </div>
                                
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppleCard