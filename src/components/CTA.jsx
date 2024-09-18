import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Have a question or just want to say hello? <br className="sm;block hidden"/>We're all ears and excited to connect!</p>
      <Link to="/contact" className="btn">
      Contact
      </Link>
    </section>
  )
}

export default CTA
