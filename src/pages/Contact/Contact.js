import React from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <div id="contact-page" class="container">
                <div class="bg">
                    <div class="row">    		
                        <div class="col-sm-12">    			   			
                            <h2 class="title text-center">Liên Hệ <strong>Chúng Tôi</strong></h2>    			    				    				
                            <div id="map"></div>
                        </div>			 		
                    </div>    	
                    <div class="row">  	
                        <div class="col-sm-8">
                            <div class="contact-form">
                                <h2 class="title text-center">Liên Lạc</h2>
                                
                                <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                                    <div class="form-group col-md-6">
                                        <input type="text" name="name" class="form-control" required="required" placeholder="Tên"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" name="email" class="form-control" required="required" placeholder="Email"/>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="text" name="subject" class="form-control" required="required" placeholder="Đối Tượng"/>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Nội Dung"></textarea>
                                    </div>                        
                                    <div class="form-group col-md-12">
                                        <input type="submit" name="submit" class="btn btn-primary pull-right" value="Gửi"/>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                        <div class="col-sm-4">
                            <div class="contact-info">
                                <h2 class="title text-center">Thông Tin Liên Hệ</h2>
                                <address>
                                    <p>Công Ty E-Shopper</p>
                                    <p>Địa Chỉ: Đà Nẵng, Việt Nam</p>
                                    
                                    <p>Số Điện Thoại: +84 123 456 789</p>
                                    
                                    <p>Email: xxx@gmail.com</p>
                                </address>
                                <div class="social-networks">
                                    <h2 class="title text-center">Mạng Xã Hội</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="#"><i class="fa fa-facebook"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i class="fa fa-twitter"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i class="fa fa-google-plus"></i></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#"><i class="fa fa-youtube"></i></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>    			
                    </div>  
                </div>	
            </div>
        )
    }
}

export default Contact;