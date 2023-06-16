import styles from "./NotificationsCard.scss";
import InputBox from "../InputBox";

function NotificationsCard() {
    return (
        <div id="notifications-card">
            <h1>Email Notifications</h1>
            <div id="email-checkboxes" className="space-y-2">
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Feedback and surveys</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Reminders about your upcoming trip</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Website improvements and updates</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Disable all</p>
                </span>
            </div>
            <h1>Push Notifications</h1>
            <div id="push-checkboxes" className="space-y-2">
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Feedback and surveys</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Reminders about your upcoming trip</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Website improvements and updates</p>
                </span>
                <span className="flex row-auto space-x-4">
                    <input type="checkbox"></input>
                    <p>Disable all</p>
                </span>
            </div>
        </div>
    )
}

export default NotificationsCard;