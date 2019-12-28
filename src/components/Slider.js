import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0
        }
        const ratioWHArray = this.props.ratio.split(":");
        this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
    
        this.backward = this.backward.bind(this);
        this.forward = this.forward.bind(this);
        this.setSlideIndex = this.setSlideIndex.bind(this);
        this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.runAutomatic = this.runAutomatic.bind(this);
    }
    
    /*
  * Tính chỉ số SlideIndex mới, với step là bước nhảy: +1 hoặc -1
  * Giả sử, mình có 6 ảnh => các chỉ số lần lượt là: 0, 1, 2,...5
  * Chú ý:
  * Nếu đang ở chỉ số 5 mà đi về phía trước thì slideIndex = 0
  * Nếu đang ở chỉ số 0 mà về sau thì slideIndex = 5
  */

    getNewSlideIndex(step) {
        const slideIndex = this.state.slideIndex;
        const numberSlide = this.props.input.length;

        let newSlideIndex = slideIndex + step;

        if (newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

        return newSlideIndex;
    }
    // Quay về ảnh phía trước, tức index giảm 1 => step = -1
    backward() {
    this.setState({
        slideIndex: this.getNewSlideIndex(-1)
    });
    }

    // Tiến tới ảnh phía sau, tức index tăng 1 => step = 1
    forward() {
        this.setState({
        slideIndex: this.getNewSlideIndex(1)
        });
    }

    // Xác định slideIndex nào sẽ được active
    setSlideIndex(index) {
        this.setState({
        slideIndex: index
        })
    }

    updateDimensions() {
        this.containerElm.style.height 
          = `${this.containerElm.offsetWidth / this.ratioWH}px`;
    }

    runAutomatic() {
        this.setState({
          slideIndex: this.getNewSlideIndex(1)
        });
    }

    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".container");
    
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    
        if (this.props.mode === "automatic") {
          const timeout = this.props.timeout || 5000;
    
          this.automaticInterval = setInterval(
            () => this.runAutomatic(),
            Number.parseInt(timeout)
          );
        }
      }

      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        if (this.automaticInterval) clearInterval(this.automaticInterval);
      }

    render(){
        return(
            // <div className="lp-slideshow">
            //     <div className="container">
                   
                        
            //                 {
            //                     this.props.input.map((image, index) => {
            //                     return (
            //                         <div
            //                         key={index}
            //                         className={
            //                             `slide ${this.state.slideIndex === index ? "active" : ""}`
            //                         }
            //                         >
            //                         <div className="number-text">
            //                             {`${index + 1} / ${this.props.input.length}`}
            //                         </div>
            //                         <img className="image" src={image.src} alt={image.caption} />
            //                         <div className="caption-text">{image.caption}</div>
            //                         </div>
            //                     )
            //                     })
            //                 }

            //                 <span className="prev" onClick={this.backward}>❮</span>
            //                 <span className="next" onClick={this.forward}>❯</span>
            //                 </div>

            //                 <div className="dot-container">
            //                 {
            //                     this.props.input.map((_, index) => {
            //                     return (
            //                         <span
            //                         key={index}
            //                         className={
            //                             `dot ${this.state.slideIndex === index ? "active" : ""}`
            //                         }
            //                         onClick={() => this.setSlideIndex(index)}
            //                         >
            //                         </span>
            //                     )
            //                     })
            //                 }
                        
                    
            //     </div>
            // </div>


            <div id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active "></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            
                                            <button type="button" className="btn btn-warning">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png"  className="pricing" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png"  className="pricing" alt="" />
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png" className="pricing" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <a href="#myCarousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#myCarousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
	
        )
    }
}

export default Slider;