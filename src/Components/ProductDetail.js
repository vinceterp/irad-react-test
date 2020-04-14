import React from 'react';
import Options from './Options.js';
import Slideshow from './Slideshow.js';
import ProductItem from './ProductItem.js';
import {formatPrice} from '../utils/utils.js';

let maxQuantity= 10;

export default class ProductDetail extends React.Component {
    quantity_ref= React.createRef();

    state={
        quantity: 1,
    }

    setQuantity = (event) => {
        this.setState({quantity: parseInt(this.quantity_ref.current.value)});
    }

    render(){
        return (
        <div className= 'product--detail--main'>
            <div className= 'display'>
                <Slideshow images= {this.props.main_product.media} />
            </div>
            <div className= 'detail-title'>
                <label className= 'detail--title--text'>{this.props.main_product.brand ? this.props.main_product.brand : ""} {this.props.main_product.name}</label>
                <div className='detail-price'>
                    <label className= 'detail-price--label'>Price:</label>
                    <label className= 'detail-price--number'>{formatPrice(this.props.main_product.price)}</label>
                </div>
            </div>
            <div className= 'configuration'>
                <div className='detail--avail'>
                    <label className= 'detail--avail--label'>Availability:</label>
                    <label className= 'detail--avail--value'>In Stock</label>
                </div>
                {this.props.main_product.configuration.map((opt)=> {return <Options key= {opt.name} title={opt.name} options= {opt.options} updateSelection= {this.props.updateSelection}/>})}
                <div className='detail--selection'>
                    <label className= 'detail--avail--label'>Selection:</label>
                    {/*<label className= 'detail--selection--value'>{this.props.main_product.configuration.map((config)=>{return config.name + `--${this.props.selections[config.name] || " "}`;})}</label>*/}
                    <label className= 'detail--selection--value'>{parseInt(this.props.selections['Gauge']) || null} gauge — {this.props.selections['Length']} Needle</label>
                </div>
            </div>
            <div className= 'quantity'>
                <div className= 'quantity--content'>
                    <img className= 'chevy' src= '/images/chevron.svg' alt= 'select quantity'></img>
                    <label>Quantity:</label>
                    <select ref={this.quantity_ref} className= 'quantity--input' defaultValue= '1' onChange= {this.setQuantity} appearance='none'>
                        {Array.from({length : maxQuantity+1}).map((el, index)=> {return <option key= {index}>{index}</option>})}
                    </select>
                    <button className='addtocart'>Add to Cart</button>
                </div>
            </div>
            <div className= 'suggestions'>
                <p className='sugg--label'>Customers who viewed this item also viewed</p>
                <ul className='cards--list'>
                    {Array.from(this.props.suggestions).map((prod)=> {return <ProductItem key= {prod.name} product= {prod} itemSmall={true}/>})}
                </ul>
            </div>
            <div className='description'>
                <div>
                    <h1>Description</h1> 
                    <p>The Achieve™ programmable automatic biopsy system ensures maximum sample capture whilst maintaining tissue architecture. Designed for fast, accurate tissue penetration, Achieve™ combines quality sampling capability with precision and control for accurate diagnosis.</p>
                    <h3>Key Benefits</h3>
                    <ul className= 'key--benefits'>
                        <li> <span className= 'list--value'>Maximum sample volume capture </span></li>
                        <li> <span className= 'list--value'>Smooth penetration of fibrous and calcified tissues</span> </li>
                        <li> <span className= 'list--value'>Lightweight compact design</span> </li>
                        <li> <span className= 'list--value'>Single-handed and controlled operation</span></li>
                        <li> <span className= 'list--value'>Precision sampling capability</span></li>
                        <li> <span className= 'list--value'>Suitable for a wide range of procedures</span></li>
                        <li> <span className= 'list--value'>Two programmable firing modes – Automatic or Delayed</span></li>
                    </ul>
                </div>
                <div className= 'video--container'>
                    {/*<a className= 'product--video' href='https://www.youtube.com/watch?v=yijkRKop6L0'></a>*/}
                    {/*</div><video className='product--video' width="auto" height="auto" controls>
                        <source src='https://www.youtube.com/watch?v=yijkRKop6L0' type="video/mp4">
                        </video>
                        <video controls>
                        <source src= 'https://www.youtube.com/watch?v=yijkRKop6L0' type='video'/>
                        </video>
                    <iframe target= '_blank' title= 'Achieve Video' width="100%" height="100%" src="https://www.youtube.com/embed/yijkRKop6L0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></video>*/}
                    <a className= 'product--video' rel='noopener noreferrer' target= '_blank' href= 'https://www.youtube.com/embed/yijkRKop6L0'>
                        <img className= 'video--thumbnail' alt= 'Achieve Video Thumbnail' src= '/images/achieve-photograph.svg'></img>
                        <img alt= 'play button' src= '/images/play-button.svg'></img>
                        <img alt= 'play_button' src= '/images/play-triangle.svg'></img>
                    </a>
                </div>
            </div>
            <div className= 'compare'>
                <h1>Compare Prices</h1>
                <div className= 'compare--products'>
                    <div className= 'compare--prod--container'>
                        <label className= 'compare--title'>MedEx Medical Supplies {"&"} Disposables</label>
                        <ProductItem key= {this.props.comparisons[0].name} product= {this.props.comparisons[0]} itemSmall={false}/>
                    </div>
                    <div className= 'compare--prod--container middle'>
                        <label className= 'our--price'>OUR PRICE</label>
                        <ProductItem key= {this.props.comparisons[1].name} product= {this.props.comparisons[1]} itemSmall={false}/>
                    </div>
                    <div className= 'compare--prod--container'>
                        <label className= 'compare--title'>Amsel Disposables</label>
                        <ProductItem key= {this.props.comparisons[2].name} product= {this.props.comparisons[2]} itemSmall={false}/>
                    </div>
                </div>
            </div>
        </div>);
    }
}