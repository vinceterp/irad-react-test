import React from 'react';
import {formatPrice} from '../utils/utils.js';

export default class ProductItem extends React.Component{

    renderSmall = () => {
        return (
            <div className= 'product--items--container--small'>
                {this.props.product.media ? 
                <div className= 'product--image--small'>
                    <img src= {this.props.product.media[0].resource} alt= {this.props.product.name}/>
                </div> : null}
                <div className= 'product--small--details'>
                    <div className= 'product--name--small'>
                        <label>{this.props.product.brand ? <strong className= 'brandName'>{this.props.product.brand}</strong> : ""} {this.props.product.name}</label>
                    </div>
                    <div className= 'product--price'>
                        <label>{formatPrice(this.props.product.price)}</label>
                    </div>
                    {this.props.product.prescription ? 
                    <div className= 'product--payment--details'>
                        <label className= 'prescription--label'>Prescription Required</label> 
                    </div> : null}
                </div>
            </div>
        );
    }

    renderNormal = () =>{
        return (
            <div className= 'product--items--container'>
                {this.props.product.media ? 
                <div className= 'product--image'>
                    <img src= {this.props.product.media[0].resource} alt= {this.props.product.name}/>
                </div> : null}
                <div className= 'product--name'>
                    <label>{this.props.product.brand ? <strong className= 'brandName'>{this.props.product.brand}</strong> : ""} {this.props.product.name}</label>
                </div>
                <div className= 'product--price'>
                    <label>{formatPrice(this.props.product.price)}</label>
                </div>
                {this.props.product.prescription ? 
                <div className= 'product--payment--details'>
                    <label className= 'prescription--label'>Prescription Required</label> 
                </div> : null}
            </div>
        );
    }
    

    render(){
        return this.props.itemSmall ? this.renderSmall() : this.renderNormal();
    }
}