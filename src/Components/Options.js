import React from 'react';
import PropTypes from 'prop-types';

export default class Options extends React.Component{
    
    static propTypes= {
        selected_option: PropTypes.string,
    }

    state= {
        selected_option: "",
    }

    handleClick = async (event) => {
        const clickedBtn= event.currentTarget;
        const siblings= [...clickedBtn.parentElement.children];
        //Remove selected class from all other buttons
        siblings.map((btn) => {return btn.className= 'options--button'});

        //apply selected class to clicked button
        event.currentTarget.className= 'options--button--selected';

        const index= siblings.indexOf(clickedBtn);
        await this.setState({selected_option: this.props.options[index]});
        this.props.updateSelection (this.props.title, this.state.selected_option);
    }

    genButton = (option) => {
        return (<button onClick= {this.handleClick} key= {option} className= 'options--button'>{option}</button>);
    }

    componentDidMount () {
    }

    render(){
        return (
            <div className= 'options--container'>
                <div className= 'options--title'>
                    <label>{this.props.title}:</label>
                </div>
                <div className='options--button--container'>
                    {this.props.options.map(this.genButton)}
                </div>
            </div>
        );
    }
}