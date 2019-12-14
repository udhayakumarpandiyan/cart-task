import React from 'react';
import { Modal, Button } from 'antd';
import './alertModal.css'

const maskStyle = {
    backgroundColor: '#000',
    opacity: '0.50'
}

const onClose = (props, e) => {
    if (props.onClose) {
        props.onClose();
    }
}
const onYesClick = (props, e) => {
    if (props.onYesClick) {
        props.onYesClick();
    }
}

const AlertModal = (props) => (
    <Modal
        title={props.title}
        centered
        visible={props.open}
        className="alert-custom-modal"
        footer={null}
        maskStyle={maskStyle}
        onOk={() => props.onClose(true)}
        onCancel={() => props.onClose(false)} >
        <div className="content">{props.content}</div>
        {props.confirmation ? <div className="_footer flex flex-center">
            <Button
                type="primary"
                style={{ minWidth: '85px', margin: "0px 10px" }}
                className="back"
                onClick={onClose.bind(this, props)}
            >{props.showNoButton ? "No" : "Cancel"}</Button>
            
            <Button
                type="primary"
                style={{ minWidth: '120px', margin: "0px 10px" }}
                className="next"
                onClick={onYesClick.bind(this, props)}
            >{props.btnTtl}</Button>

        </div> : <div className="_footer flex flex-center">
                <Button
                    type="primary"
                    style={{ minWidth: '85px' }}
                    onClick={onClose.bind(this, props)}
                >{props.info ? "Close" : "Ok"}</Button>
            </div>
        }
    </Modal>
)

export default AlertModal;