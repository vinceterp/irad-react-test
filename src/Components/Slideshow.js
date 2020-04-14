import React from 'react';
import PropTypes from 'prop-types';

export default class Slideshow extends React.Component {

    static propTypes = {
        currentImage: PropTypes.string,
    }

    state= {
        currentImage: this.props.images[0].resource,
    }

    HandleReelClick = (event) => {
        this.prevImage= this.state.currentImage;
        const resource= event.currentTarget.firstElementChild.src;
        this.setState({currentImage: resource});
        Array.from(event.currentTarget.parentElement.children).map((container)=> container.className= 'reel--image--container');
        event.currentTarget.className= 'ss--current--reel--image';
    }

    HandleReelEnter = (event)=> {
        this.prevImage= this.state.currentImage;
        const resource= event.currentTarget.firstElementChild.src;
        this.setState({currentImage: resource});
    }

    HandleReelExit = (event) => {
        this.setState({currentImage: this.prevImage});
    }

    genReelImages = (image) => {
        if (!this.props.images.indexOf(image)){
            return (<div onClick= {this.HandleReelClick} onMouseLeave= {this.HandleReelExit} onMouseEnter= {this.HandleReelEnter} key= {this.props.images.indexOf(image)} className= 'ss--current--reel--image'><img className= 'ss--reel--image' alt= 'slide-show reel' src= {image.resource}/></div>);
        }else{
            return (<div onClick= {this.HandleReelClick} onMouseLeave= {this.HandleReelExit} onMouseEnter= {this.HandleReelEnter} key= {this.props.images.indexOf(image)} className= 'reel--image--container'><img className= 'ss--reel--image' alt= 'slide-show reel' src= {image.resource}/></div>);
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