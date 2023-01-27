import React from "react"
import { ToastContainer } from "react-toastify"

const Toast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            >

            </ToastContainer>
        </div>
    )
}

export default Toast