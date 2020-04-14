import React from 'react';
import '../CSS/App.css';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail.js';

export default class App extends React.Component{

  static propType= {
      products: PropTypes.string,
      suggestions: PropTypes.string,
      options: PropTypes.string,
      selections: PropTypes.object,
  }

  state= {
    products: require ('../compare.json'),
    suggestions: require ('../products.json'),
    options: require ('../product.json'),
    selections: {},
  }

  updateSelection = (title, value) => {  
    const stateCopy= {...this.state.selections};
    stateCopy[title]= value;

    this.setState({selections: stateCopy});
  }

  render(){
    return(
      <React.Fragment>
        <ProductDetail comparisons= {this.state.products} suggestions= {this.state.suggestions} selections= {this.state.selections} main_product= {this.state.options} updateSelection= {this.updateSelection}/>
      </React.Fragment>
    );
  }
}
