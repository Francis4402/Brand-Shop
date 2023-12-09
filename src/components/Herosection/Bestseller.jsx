import AppleCard from "./BestsellerCards/AppleCard"
import Headphonecard from "./BestsellerCards/Headphonecard"
import Laptopcard from "./BestsellerCards/Laptopcard"
import TabletCard from "./BestsellerCards/TabletCard"


const Bestseller = () => {
  return (
    <div className="flex justify-center bg-base-200 py-5 px-5">
        <div className="container flex justify-center">
          <div>
            <h1 className="text-2xl font-bold py-5">Bestsellers</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <AppleCard />
                <Laptopcard />
                <TabletCard />
                <Headphonecard />
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Bestseller