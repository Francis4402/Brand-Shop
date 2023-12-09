import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';
import {BsCartPlus} from 'react-icons/bs';

const DisplayBossheadphones = ({movedata, datadelete, setdataDelete}) => {
    const {user} = useContext(AuthContext)
    const {_id, shortdescription, name, photo, categories, brandname, price} = movedata;
  
  
    const handleDelete = (productId) => {
      console.log(productId);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then(result => {
        if(result.isConfirmed){
          fetch(`https://brand-shopserve-side.vercel.app//headphones/bossH/${productId}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
            )
            
            const remaining = datadelete.filter(prod => prod._id !== productId);
            setdataDelete(remaining);
            }
          })
        }
      })
    }


    const handleAddtocart = () => {
      fetch('https://brand-shopserve-side.vercel.app//cartview', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(movedata)
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
          <div className="card md:w-80 w-full bg-base-200 shadow-xl">
            <figure><img width="100%" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{shortdescription}</p>
              <hr className='border' />
              <p className='text-xl font-semibold'>{price} ট</p>
              <div className="card-actions sm:justify-between justify-center">
                <button onClick={() => handleAddtocart(_id)} className="btn btn-neutral"><BsCartPlus className='text-lg' /> Buy Now</button>
                <Link to={`/productdetails/${categories}/${brandname}/${_id}`}>
                  <button className="btn btn-warning">Details</button>
                </Link>
                      
              </div>
                {
                  user && (
                    <div className='card-actions sm:justify-between justify-center'>
                      <Link to={`/updateproduct/${categories}/${brandname}/${_id}`}>
                        <button className="btn btn-accent">Update</button>
                      </Link>
                      <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
                    </div>
                    
                  )
                }
                
              
            </div>
          </div>
        </div>
      </div>
    )
}

DisplayBossheadphones.propTypes = {
    movedata: PropTypes.object,
    datadelete: PropTypes.array,
    setdataDelete: PropTypes.func
  }
  

export default DisplayBossheadphones