import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'

import '../../App.css'

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Đăng xuất thành công')
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img style={{ width: 70, height: 70 }} src="/images/logo.png" alt='' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Sản phẩm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Liên hệ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Giới Thiệu</Link>
                        </li>
                    </ul>
                    <form className="d-flex mr-3">
                        <Route render={({ history }) => <Search history={history} />} />
                    </form>
                    <ul className="navbar-nav">
                        {user && user.role === 'admin' ? (
                            <p></p>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart" style={{ textDecoration: 'none' }}>
                                    <span id="cart" className="ml-3">Giỏ hàng</span>
                                    <span className="ml-2" id="cart_count"><i className="bi bi-cart4"></i>{cartItems.length}</span>
                                </Link>
                            </li>
                        )}
                        {user ? (
                            <li className="nav-item dropdown">
                                <Link to="#!" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <figure className="avatar avatar-nav">
                                        <img
                                            src={user.avatar && user.avatar.url}
                                            alt={user && user.name}
                                            className="rounded-circle"
                                        />
                                    </figure>
                                    <span>{user && user.name}</span>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {user && user.role === 'admin' && (
                                        <Link className="dropdown-item" to="/dashboard">Trang quản trị</Link>
                                    )}
                                    {user && user.role !== 'admin' && (
                                        <Link className="dropdown-item" to="/orders/me">Đơn đặt hàng</Link>
                                    )}
                                    <Link className="dropdown-item" to="/me">Thông tin cá nhân</Link>
                                    <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>Đăng xuất</Link>
                                </div>
                            </li>
                        ) : (
                            !loading && <li className="nav-item"><Link to="/login" className="btn" id="login_btn">Đăng nhập</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

        {/* Nội dung chính với padding để tránh bị đè */}
        <div className="main-content" style={{ paddingTop: '70px' }}>
            {/* Nội dung chính của bạn ở đây */}
        </div>
        </Fragment>
    )
}

export default Header
