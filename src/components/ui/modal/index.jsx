import { Modal as AntModal } from 'antd';

function Modal({open, onClose, title = false, children, ...props}) {
    return (
        <AntModal
            open={open}
            onCancel={onClose ? onClose : () => {}}
            footer={''}
            title={title}
            {...props}
        >
            {children}
        </AntModal>
    );
}

export default Modal;