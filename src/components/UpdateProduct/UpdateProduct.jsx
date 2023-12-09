import { useState } from "react"
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom"
import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const productupdate = useLoaderData();
    const {_id, name, price, shortdescription, rating, photo} = productupdate;

    const [category, setCategory] = useState('')
    const [, setBrand] = useState('');

    const handleupdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const categories = form.categories.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const UpdateNewProduct = {name, brandname, categories, price, shortdescription, rating, photo}

        const baseUrl = 'https://brand-shopserve-side-francisms-projects.vercel.app/';
        const url = `${baseUrl}${category}${brandname ? '/' + brandname : ''}${_id ? '/' + _id : ''}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(UpdateNewProduct)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Product Updated Successfully',
              icon: 'success',
              confirmButtonText: 'ok'
            })
          }
        })
        .catch(error => console.error(error))
    }

    const handleChange = (e) => {
      setCategory(e.target.value)
      setBrand("");
    }

    const handleBrand = e => {
      setBrand(e.target.value);
    }

  return (
    <div className="hero mt-4">
            <Helmet>
        <title>Brand-Shop | UpdateProduct</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Update Product</h1>
        </div>

        <div className="justify-start flex w-full">
          <Link to='/'><button className="btn btn-neutral">Back</button></Link>
        </div>
        

        <div className="space-y-6 justify-center grid p-5 lg:shadow-lg rounded-lg bg-base-200">
        

        <form onSubmit={handleupdateProduct} className="space-y-8">
            <div className="sm:flex grid gap-5">
                <div className="grid gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input name="photo" defaultValue={photo} type="url" placeholder="ImageURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input name="name" defaultValue={name} type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input name="price" defaultValue={price} type="text" placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select name="categories" className="p-3 rounded-md bg-base-300" onChange={handleChange} required>
                      <option value="">Select Category</option>
                      <option value="mobiles">Mobiles</option>
                      <option value="tablet">Tablet</option>
                      <option value="headphones">HeadPhones</option>
                      <option value="laptop">Laptop</option>
                  </select>
                </div>
              </div>


              <div className="grid h-fit gap-3">
                  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input name="shortdescription" defaultValue={shortdescription} type="text" placeholder="Description" className="input input-bordered" required />
                </div>

                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  
                  <select name="rating" defaultValue={rating} className="p-4 rounded-md bg-base-300" required>
                    <option>Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>

                  <select
                    name="brandname" required 
                    className="p-4 rounded-md bg-base-300"
                    onChange={handleBrand}
                  >
                    <option value="">Select Brand</option>
                    {category === "mobiles" && (
                      <>
                        <option value="applem">Apple</option>
                        <option value="samsungm">Samsung</option>
                        <option value="googlem">Google Pixel</option>
                        <option value="xiaomim">Xiaomi</option>
                        <option value="realmem">Realme</option>
                        <option value="nokiam">Nokia</option>
                      </>
                    )}
                    {category === "tablet" && (
                      <>
                        <option value="applet">Apple</option>
                        <option value="googlet">Google</option>
                        <option value="samsungt">Samsung</option>
                        <option value="xiaomit">Xiaomi</option>
                        <option value="lenovot">Lenovo</option>
                      </>
                    )}
                    {category === "headphones" && (
                      <>
                        <option value="fentechH">Fantech</option>
                        <option value="havitH">Havit</option>
                        <option value="bossH">Bose</option>
                        <option value="gamdiasH">Gamdias</option>
                        <option value="razerH">Razer</option>
                      </>
                    )}
                    {category === "laptop" && (
                      <>
                        <option value="razerL">Razer</option>
                        <option value="appleL">Apple</option>
                        <option value="hpL">HP</option>
                        <option value="dellL">Dell</option>
                        <option value="asusL">Asus</option>
                      </>
                    )}
                    {category === "keyboard" && (
                      <>
                        <option value="asusk">Asus</option>
                        <option value="razerk">Razer</option>
                        <option value="fantechk">Fantech</option>
                        <option value="a4techk">A4Tech</option>
                        <option value="walttonk">Walton</option>
                      </>
                    )}
                  </select>

                  
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-block btn-neutral">Update Product</button>
            </div>
        </form>
      </div>

      </div>
    </div>
  )
}

export default UpdateProduct