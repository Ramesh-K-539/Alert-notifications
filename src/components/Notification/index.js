// Write your code here
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <li className="list-item">
      <div className="container">
        <AiFillCheckCircle className="icon" />
        <div>
          <h1 className="notification-heading">{children}</h1>
          <p className="description">
            You can access all the files from folder
          </p>
        </div>
      </div>
      <GrFormClose className="close-icon" />
    </li>
  )
}

export default Notification
