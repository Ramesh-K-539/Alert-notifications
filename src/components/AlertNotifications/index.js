// Write your code here
import './index.css'

import {Component} from 'react'
import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Alert Notifications</h1>
        <ul className="ul-list">
          <Notification>Success</Notification>
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
