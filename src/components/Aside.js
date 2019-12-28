import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Aside extends React.Component{
    constructor(){
            super();
            this.state = {
                isMenFashion: false,
                isWomenFashion: false,
                categoriesListMen: [],
                categoriesListWomen: [],
                category: []
            }
        }
    componentDidMount(){
    //Get categories Men's fashion
        axios({
            method: 'GET',
            url: "http://localhost:3000/categories?type=nam",
            data: null
        }).then(res =>{
            this.setState({
                categoriesListMen: res.data
            })

        });
    
    //Get categories Women's fashion
       axios({
            method: 'GET',
            url: "http://localhost:3000/categories?type=nu",
            data: null
        }).then(res =>{
            this.setState({
                categoriesListWomen: res.data
            })
        });

    //Get category type
       axios({
            method: 'GET',
            url: "http://localhost:3000/products",
            data: null
        }).then(res =>{
            this.setState({
                category: res.data
            })
        });        
    }      

    onToggleCategoryMen=(e)=>{
        e.preventDefault();
        this.setState({
            isMenFashion: !this.state.isMenFashion
        }) 
    }
    
    onToggleCategoryWomen=(e)=>{
        e.preventDefault();
        this.setState({
            isWomenFashion: !this.state.isWomenFashion
        })    
    }

    render(){
        var {isMenFashion, isWomenFashion, categoriesListWomen, categoriesListMen} = this.state
        var showDataMen = categoriesListMen.map((categoryMen, indexMen)=>{
            return <li key={indexMen}><NavLink to={`/products/${categoryMen.slug}`}>{categoryMen.name}</NavLink></li>
            });
        var showDataWomen = categoriesListWomen.map((categoryWomen, indexWomen)=>{
            return <li key={indexWomen}><NavLink to={`/products/${categoryWomen.slug}`}>{categoryWomen.name}</NavLink></li>
            });             
        return(
            <div className="col-sm-3">
                <div className="left-sidebar">
                    <h2>Thể Loại</h2>
                    <div className="panel-group category-products" id="accordian">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <NavLink data-toggle="collapse" 
                                        data-parent="#accordian" 
                                        data-target="#nam"
                                        to="#"
                                        onClick={this.onToggleCategoryMen} >
                                        <span className="badge pull-right"><i className={isMenFashion ? "fa fa-plus" : 'fa fa-minus'}></i></span>
                                        Thời Trang Nam
                                    </NavLink >
                                </h4>
                            </div>
                            <div id="nam" className={"panel-collapse" && isMenFashion ? "collapse" : ''}>
                                <div className="panel-body">
                                    <ul>
                                        {showDataMen}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <NavLink  data-toggle="collapse" 
                                        data-parent="#accordian" 
                                        data-target="#nu"
                                        to="#"
                                        onClick={this.onToggleCategoryWomen}>
                                        <span className="badge pull-right"><i className={isWomenFashion ? "fa fa-plus" : 'fa fa-minus'} ></i></span>
                                        Thời Trang Nữ
                                    </NavLink >
                                </h4>
                            </div>
                            <div id="nu" className={"panel-collapse" && isWomenFashion ? "collapse" : ''}>
                                <div className="panel-body">
                                    <ul>
                                        {showDataWomen}            
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="brands_products">
                        <h2>Nhãn Hiệu</h2>
                        <div className="brands-name">
                            <ul className="nav flex-column nav-stacked">
                                <li><NavLink to="#"> <span className="pull-right">(50)</span>Nike</NavLink></li>
                                <li><NavLink to="#"> <span className="pull-right">(56)</span>Gucci</NavLink></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="shipping text-center">
                        <img src="images/home/shipping.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Aside;