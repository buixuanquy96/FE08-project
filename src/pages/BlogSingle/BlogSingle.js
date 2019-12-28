import React from 'react';
import {NavLink} from 'react-router-dom';
import Aside from '../../components/Aside'
class BlogSingle extends React.Component{
    render(){
        return(
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div className="col-sm-9">
                        <div className="blog-post-area">
                            <h2 className="title text-center">Nội Dung</h2>
                            <div className="single-blog-post">
                                <h3>Bài Viết 1</h3>
                                <div className="post-meta">
                                    <ul>
                                        <li><i className="fa fa-user"></i> Tác Giả</li>
                                        <li><i className="fa fa-clock-o"></i> Thời Gian</li>
                                        <li><i className="fa fa-calendar"></i> Ngày Tháng</li>
                                    </ul>
                                    <span>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <div >
                                    <img src="images/blog/blog-one.jpg" alt=""/>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 

                                <p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 

                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> 

                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <div className="pager-area">
                                    <ul className="pager pull-right">
                                        <li><button>Lùi</button></li>
                                        <li><button >Tiếp</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rating-area">
                            <ul className="ratings">
                                <li className="rate-this">Đánh giá:</li>
                                <li>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </li>
                                <li className="color">(6 votes)</li>
                            </ul>
                            <ul className="tag">
                                <li>TAG:</li>
                                <li><div className="color" >Pink <span>/</span></div></li>
                                <li><div className="color" >T-Shirt <span>/</span></div></li>
                                <li><div className="color" >Girls</div></li>
                            </ul>
                        </div>

                        <div className="media commnets">
                            <NavLink className="pull-left" to="#">
                                <img className="media-object" src="images/blog/man-one.jpg" alt=""/>
                            </NavLink>
                            <div className="media-body">
                                <h4 className="media-heading">Annie Davis</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="blog-socials">
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-dribbble"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-google-plus"></i></NavLink></li>
                                    </ul>
                                    <NavLink className="btn btn-primary" to="#" >Bài Viết Khác</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="response-area">
                            <h2>Phản Hồi</h2>
                            <ul className="media-list">
                                <li className="media">        
                                    <NavLink className="pull-left" to="#">
                                        <img className="media-object" src="images/blog/man-two.jpg" alt=""/>
                                    </NavLink>
                                    <div className="media-body">
                                        <ul className="sinlge-post-meta">
                                            <li><i className="fa fa-user"></i>Tác Giả</li>
                                            <li><i className="fa fa-clock-o"></i>Thời Gian</li>
                                            <li><i className="fa fa-calendar"></i> Ngày Tháng</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <NavLink className="btn btn-primary" to="#"><i className="fa fa-reply"></i>Trả Lời</NavLink>
                                    </div>
                                </li>
                                
                            </ul>					
                        </div>
                        <div className="replay-box">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h2>Gửi Phản Hồi</h2>
                                    <form>
                                        <div className="blank-arrow">
                                            <label>Tên Của Bạn</label>
                                        </div>
                                        <span>*</span>
                                        <input type="text" placeholder="Viết tên của bạn"/>
                                        <div className="blank-arrow">
                                            <label>Địa Chỉ Email</label>
                                        </div>
                                        <span>*</span>
                                        <input type="email" placeholder="Viết địa chỉ email của bạn"/>
                        
                                    </form>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-area">
                                        <div className="blank-arrow">
                                            <label>Nội Dung</label>
                                        </div>
                                        <span>*</span>
                                        <textarea name="message" rows="11"></textarea>
                                        <NavLink className="btn btn-primary" to="#">Gửi Phản Hồi</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    {/* a */}
                </div>
            </div>
        )
    }
}

export default BlogSingle;