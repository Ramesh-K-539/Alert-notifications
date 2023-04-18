// Write your code here
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {MdInfo, MdWarning} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'

import {Component} from 'react'
import Notification from '../Notification'

class AlertNotifications extends Component {
  renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="message-container">
        <h1 className="heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="message-container">
        <h1 className="heading error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon warning" />
      <div className="message-container">
        <h1 className="heading warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon info" />
      <div className="message-container">
        <h1 className="heading info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  render() {
    return (
      <div className="app-container">
        <h1 className="alert-heading">Alert Notifications</h1>
        {this.renderSuccessNotification()}
        {this.renderErrorNotification()}
        {this.renderWarningNotification()}
        {this.renderInfoNotification()}
      </div>
    )
  }
}

export default AlertNotifications
