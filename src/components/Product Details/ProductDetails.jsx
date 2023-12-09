
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom"

const ProductDetails = () => {
  const viewProducts = useLoaderData();
  const {name, price, shortdescription, rating, photo} = viewProducts;



  return (
    <div className="justify-center flex">
      <Helmet>
        <title>Brand-Shop | ProductDetails</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="container space-y-4 shadow p-10">
          <div className="justify-center w-full flex">
            <img src={photo} alt="i" />
          </div>
          <div className="space-y-8">
            <h1 className="card-title flex justify-center">{name}</h1>
            <div className="card-normal">
              <p>{shortdescription}</p>
            </div>
            
            <div className="sm:flex sm:justify-between justify-center grid gap-3 px-10 items-center">
              <p className="flex gap-4 items-center justify-center bg-base-300 px-4 py-5 rounded-lg"><span className="uppercase text-sm font-bold">Price :</span> <span className="text-sm font-semibold">{price} ট</span></p>
              <p className="text-xl bg-base-300 px-4 py-5 justify-center rounded-lg gap-5 items-center flex"><span className="uppercase text-sm font-bold">Rating :</span> <span className="text-sm font-semibold">{rating}</span></p>
            </div>
            
          </div>
          
      </div>
    </div>
  )
}

export default ProductDetails