// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, changeStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventItem

  const onClickListItem = () => {
    changeStatus(registrationStatus)
  }

  return (
    <li className="list-container" onClick={onClickListItem}>
      <li className="content-container">
        <button type="button">
          <img src={imageUrl} alt="event" className="image-sizing" />
        </button>
        <p className="heading">{name}</p>
        <p className="location">{location}</p>
      </li>
    </li>
  )
}

export default EventItem
