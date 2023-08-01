import React, { Component } from "react";

/**
 * State là một trạng thái component
 * Khi mà chúng ta tương tác trên giao diện mà có sự thay đổi
 * State là thuộc tính kế thừa từ lớp Component
 */

export default class State extends Component {
  // 1. Cách khai báo State
  // 2. Chú ý khai báo tất cả State ở trong thuộc tính State.
  state = {
    isLogin: false,
    todo: [],
    value: "",
  };

  handleLogin = () => {
    const newState = {
      isLogin: true,
    };
    // * 2. Cách set lại state.
    // mỗi lần chúng ta set lại state thì react nó tự động render lại UI (re-render);
    // setState: là method kế thừa từ component
    //? Sẽ tự động merge những state mới và cũ lại với nhau.
    this.setState(newState);
    // this.state.isLogin = true;
    // console.log(this.state.isLogin)
    // this.render(); Không cần gọi lại method này
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
      // ? Sử dụng state nào thì nên khai báo rõ ở trên thuộc tính state
      isComplete: true, //! Nó sẽ thêm vào state cho chúng ta nếu chưa có. TRÁNH DÙNG
    });
  };

  renderContent = () => {
    if (this.state.isLogin) {
      return <p>Cyber Soft</p>;
    }

    return (
      <button
        onClick={this.handleLogin}
        className="btn btn-outline-success mx-2"
        type="button"
      >
        Login
      </button>
    );
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              {/* 1. Xử lý thông tin trực tiếp tại đây: toán tử ba ngôi */}

              {this.state.isLogin ? (
                <p>Cyber Soft</p>
              ) : (
                <button
                  onClick={this.handleLogin}
                  className="btn btn-outline-success mx-2"
                  type="button"
                >
                  Login
                </button>
              )}

              {this.renderContent()}

              <button
                onClick={this.handleLogout}
                className="btn btn-outline-success"
                type="button"
              >
                LogOut
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
