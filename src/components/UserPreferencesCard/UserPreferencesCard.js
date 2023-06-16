import styles from "./UserPreferencesCard.scss";

function UserPreferencesCard() {
    return (
        <div id="user-preferences-card">
            <div id="user-preferences-heading">
                <h1>User Preferences</h1>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Preferred Language</b></h2>
                <p>English</p>
            </div>
            <button>Edit</button>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Preferred Currency</b></h2>
                <p>Singapore Dollar</p>
            </div>
            <button>Edit</button>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Time Zone</b></h2>
                <p>(GMT +08:00) Singapore</p>
            </div>
            <button>Edit</button>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Date Format</b></h2>
                <p>Day/Month (e.g. 21/3)</p>
            </div>
            <button>Edit</button>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Distance Format</b></h2>
                <p>Kilometers (e.g. 80km)</p>
            </div>
            <button>Edit</button>
            </div>
            <div id="edit-preferences-container">
            <div id="edit-preferences-row">
                <h2><b>Time Format</b></h2>
                <p>24-hour (e.g. 14:00)</p>
            </div>
            <button>Edit</button>
            </div>
        </div>
    )
}

export default UserPreferencesCard;