import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const CartDetails = ({movedata, datadelete, setdataDelete}) => {

  const {_id, name, photo, categories, brandname, price} = movedata;


  const handleDelete = id => {
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
        fetch(`https://brand-shopserve-side-francisms-projects.vercel.app/cartview/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your Product has been remove from cart.',
              'success'
          )
          
          const remaining = datadelete.filter(prod => prod._id !== id);
          setdataDelete(remaining);
          }
        })
      }
    })
  }

  
  return (
    <div className="justify-center flex">
      <div className="container">
        <div className="card sm:card-side bg-base-100 shadow-xl w-full">
          <figure><img className='sm:w-32 w-full' src={photo} alt="i"/></figure>
          <div className="card-body space-y-3">
            <h2 className="card-title">{name}</h2>
            <p className='text-base-content'>{price} ট</p>
            <div className="card-actions sm:justify-end justify-center">
              <Link to={`/productdetails/${categories}/${brandname}/${_id}`}>
                <button className="btn btn-sm btn-primary">Details</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-warning">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


CartDetails.propTypes = {
  movedata: PropTypes.object,
  datadelete: PropTypes.array,
  setdataDelete: PropTypes.func
}

export default CartDetails