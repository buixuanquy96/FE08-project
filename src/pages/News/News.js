import React from 'react';
import Aside from '../../components/Aside'
import Blog from '../../components/Blog'

class News extends React.Component{
    render(){
        return(
            <div>
                <div className="container" >
                    <div className="row">
                        <Aside />
                        
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Tin Tức</h2>
                                <Blog />
                                <Blog />
                                <Blog />
                                
                                <div className="pagination-area">
                                    <ul className="pagination">
                                        <li><button  className="active">1</button></li>
                                        <li><button >2</button></li>
                                        <li><button >3</button></li>
                                        <li><button ><i className="fa fa-angle-double-right"></i></button></li>
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

export default News;