import FocusTrap from "focus-trap-react";

const Modal = (props) => {
    const closeModal = () => {
        localStorage.setItem("isNoticeAccepted", JSON.stringify(true));
        props.setShowModal(false);
    }

    return (
        <FocusTrap active={props.showModal}>
            <div className="notice__container">
                <div className="notice" aria-modal={props.showModal} aria-label="user notice of mock website">
                    <h1>User Notice: Mock E-commerce Website</h1>
                    <p>Please note that Ramsey's Craft Store is a mock e-commerce platform created for educational purposes only. 
                        This website does not process payments, fulfill orders, or sell any products displayed. It is designed to 
                        simulate a shopping experience. No actual transactions or shipments will 
                        occur on this website.
                    </p>
                    <button className="notice__button" onClick={closeModal}>ACCEPT</button>
                </div>
            </div>
        </FocusTrap>
    );
};

export default Modal;