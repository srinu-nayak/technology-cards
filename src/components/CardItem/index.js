import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`list-container ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>
      <div className="image-card">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
