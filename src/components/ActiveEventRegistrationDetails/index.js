// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {currentStatus} = props
  console.log(currentStatus)

  const initial = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="yetToRegister"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yetToRegister"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const yetToRegister = () => (
    <div>
      <p>A live performance brings so much to your relationship with dance</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegister"
      />
      <button type="button">Register Here</button>
    </div>
  )

  switch (currentStatus) {
    case 'INITIAL':
      return initial()
    case 'REGISTERED':
      return registered()
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosed()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
