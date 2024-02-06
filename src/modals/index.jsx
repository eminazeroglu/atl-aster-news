import ModalComponent from "../components/ui/modal";
import { useContextModal } from "../context/ModalContext";

function Modal({children, name, ...props}) {

    const {title, data, open, handleModal} = useContextModal();

    if (!open[name]) return false;

    return (
        <ModalComponent
            title={title[name]}
            open={open[name]}
            onClose={() => handleModal(name)}
            {...props}
        >
            {children}
        </ModalComponent>
    );
}

export default Modal;