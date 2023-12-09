import Banner from "../BannerSection/Banner"
import Footer from "../FooterSection/Footer"
import Applesection from "../Herosection/Applesection"
import Bestseller from "../Herosection/Bestseller"
import Displayaddbanner from "../Herosection/Displayaddbanner"
import Headphonesection from "../Herosection/Headphonesection"
import Samsungsection from "../Herosection/Samsungsection"
import {Helmet} from "react-helmet";

const Home = () => {
  
  return (
    <div className="w-full">
      
      <Helmet>
        <title>Brand-Shop | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      
      <Banner />
      <Applesection />
      <Headphonesection />
      <Samsungsection />
      <Displayaddbanner />
      <Bestseller />
      <Footer />
    </div>
  )
}

export default Home