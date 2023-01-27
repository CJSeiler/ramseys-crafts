import React from "react";

const Loading = () => {
    return (
        <div className="loading-container flex">
            <div
                className=""
                role="status"
                style={{width: "3rem", height: "3rem"}}
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading