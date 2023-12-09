import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <Link to="/"><p className="link link-hover">Branding</p></Link>
    <Link to="/"><p className="link link-hover">Design</p></Link>
    <Link to="/"><p className="link link-hover">Marketing</p></Link>
    <Link to="/"><p className="link link-hover">Advertisement</p></Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to="/about"><p className="link link-hover">About Us</p></Link>
    <Link to="/"><p className="link link-hover">Contact</p></Link>
    <Link to="/"><p className="link link-hover">Jobs</p></Link>
    <Link to="/"><p className="link link-hover">Press kit</p></Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link to="/terms"><p className="link link-hover">Terms of use</p></Link>
    <Link to="/privacypocliy"><p className="link link-hover">Privacy policy</p></Link>
    <Link to="/cookie"><p className="link link-hover">Cookie policy</p></Link>
  </nav>
</footer>
  )
}

export default Footer