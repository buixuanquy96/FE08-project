import React from 'react';
import {NavLink} from 'react-router-dom';
import { signInRequest } from '../../actions/actions';
import {connect} from 'react-redux';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentDidMount() {
        this.props.allUsers();
    }

    dologin() {
        
        const {email, password} = this.state;
        let { users, history} = this.props;
        console.log(email);
        console.log(password);
        
        //duyet cach thanh phan cua obj co trong mang
        users.forEach(eachRow => {
            if (email === eachRow['email'] && password === eachRow['password']) {
                history.push("/");
                sessionStorage.setItem('TOKEN', JSON.stringify(email))
                
            }
        });

        return 'Error email or password'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let erro = '';
        //khi nhan submit se co 2 van de`
        //1.validate
        //2.checklogin voi function dologin o tren
        Object.keys(this.state).forEach(k => {
            if (!this.state['' + k]) {
                erro = k + 'is required'
            }
        })

        if (erro) {
            ///messs
        } else {
            let resLogin = this.dologin(this.state);
            //console.log(resLogin);
            
            if (resLogin) {
                //messs
            }
        }
    }

    render(){
        //var { email, password} = this.state;
        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Nhập</li>
                    </ol>
                </div>
                <div className="row login">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <h2>Đăng Nhập Tài Khoản</h2>
                            <form onSubmit={this.handleSubmit} action="#">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Mật Khẩu"
                                    onChange={this.handleChange}
                                    required
                                />
                                
                                <button type="submit" className="btn btn-default">Đăng Nhập</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>Bạn Chưa Có Tài Khoản</h2>
                            <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn!</p>
                            
                            <NavLink to="/signup" className="btn btn-default" role="button">Đăng Ký</NavLink>
                        </div>
                    </div>

                </div>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        allUsers: () => {
            dispatch(signInRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);