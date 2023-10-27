import React from "react";
import offlineImg from "../static/offline_Image.jpg";

const Offline = () => {
    return (
        <div className="user-offline-container">
            <h1 className="user-offline-heading">
                Offline
            </h1>
            <img className="offline-image" src={offlineImg} alt="offline" />
            <p className="user-offline-message">
            😢 offline, Please check your internet connection
            </p>
        </div>
    );
};

export default Offline;