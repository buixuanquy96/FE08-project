import React from 'react';
import {NavLink} from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone_number: '',
            email: '',
            password: '',
            verify_password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        
        console.log(this.state);
        var {name, phone_number, email, password, verify_password} = this.state;
        var {history} = this.props;
        //this.props.userSignupRequest(this.state);
        if(password === verify_password){
            callApi('user', 'POST', {
                name: name,
                phone_number: phone_number,
                email: email,
                password: password
            }, 
            {withCredentials: true}).then(res => {
                history.push("/login"); 
            }) 
        }else{
            console.log("Error")
        }
        e.preventDefault();
    }
    render(){
        var {name, phone_number, email, password, verify_password} = this.state;

        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Ký</li>
                    </ol>
                </div>

                <div className="row signup">
                    <div className="col-sm-6 col-sm-offset-2">
                        <div className="login-form">
                            <h2>Đăng Ký Tài Khoản</h2>
                            <form onSubmit={this.handleSubmit} action="#" className="signup-form">  
                                <input 
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={name}
                                    placeholder="Họ Tên" 
                                    onChange={this.handleChange} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    id="phone_number" 
                                    name="phone_number" 
                                    value={phone_number} 
                                    placeholder="Số Điện Thoại"
                                    onChange={this.handleChange} 
                                    required
                                />
                                <input
                                    type="email"
                                    id="email" 
                                    name="email" 
                                    value={email}
                                    placeholder="Email"  
                                    onChange={this.handleChange}
                                    required
                                />
                                <input 
                                type="password"
                                    id="password" 
                                    name="password" 
                                    value={password} 
                                    placeholder="Mật Khẩu" 
                                    onChange={this.handleChange} 
                                    required
                                />
                                <input 
                                    type="password"
                                    id="verify_password" 
                                    value={verify_password}
                                    name="verify_password"
                                    placeholder="Xác Nhận Mật Khẩu" 
                                    onChange={this.handleChange} 
                                    required
                                />
                                <button type="submit" className="btn btn-default">Đăng Ký</button>
                                
                            </form>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Signup;