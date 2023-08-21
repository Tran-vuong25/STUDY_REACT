import React, { Component } from "react";

// ? Modal có tái sử dụng hay không?
// 1. tái sử dụng -> truyền props từ cha vào
// 2. connect trực tiếp tới redux
export default class Modal extends Component {
  render() {
    const { modal } = this.props;
    return (
      <div>
        <div className="modal" tabIndex={-1} style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={modal.onCancle}
                />
              </div>
              <div className="modal-body">
                <p>{modal.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={modal.onCancle}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  onClick={modal.onOK}
                  type="button"
                  className="btn btn-primary"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
