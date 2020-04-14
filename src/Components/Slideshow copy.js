import React from 'react';
import PropTypes from 'prop-types';

export default class Slideshow extends React.Component {

    static propTypes = {
        currentImage: PropTypes.string,
    }

    state= {
        currentImage: this.props.images[0].resource,
    }
    
    handleReelClick = (event)=> {
        this.prevImage= this.state.currentImage;
        this.setState({currentImage: event.currentTarget.src});
        Array.from(event.currentTarget.parentElement.parentElement.children).map((img)=> img.className= 'reel--image--container');
        event.currentTarget.parentElement.className= 'ss--current--reel--image';
    }

    handleReelEnter = (event)=> {
        this.prevImage= this.state.currentImage;
        this.setState({currentImage: event.currentTarget.src});
    }

    handleReelExit = (event)=>{
        this.setState({currentImage: this.prevImage});
    }

    genReelImages = (image) => {
        if (!this.props.images.indexOf(image)){
            return (<div onMouseEnter= {this.correctedHandleReelEnter} key= {this.props.images.indexOf(image)} className= 'ss--current--reel--image'><img onMouseEnter= {this.handleReelEnter} onMouseLeave= {this.handleReelExit} onClick= {this.handleReelClick}  className= 'ss--reel--image' alt= 'slide-show reel' src= {image.resource}/></div>);
        }else{
            return (<div key= {this.props.images.indexOf(image)} className= 'reel--image--container'><img onMouseEnter= {this.handleReelEnter} onMouseLeave= {this.handleReelExit} onClick= {this.handleReelClick}  className= 'ss--reel--image' alt= 'slide-show reel' src= {image.resource}/></div>);
        }
    }
    
    render(){
        return (
            <div className= 'slideshow--container'>
                <div className= 'current--ss--image--container'>
                    <img className= 'current--ss--image' alt= 'current slide-show' src= {this.state.currentImage}/>
                </div>
                <div className= 'ss--instructions--container'>
                    <p className= 'ss--instructions'>Roll over or tap to view Image</p>
                </div>
                <div className= 'ss--reel'>
                    {this.props.images.map((img)=>{return this.genReelImages(img);})}
                </div>
            </div>
        );
    }
}