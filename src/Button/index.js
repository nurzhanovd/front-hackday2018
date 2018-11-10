import React, {Component} from 'react';
import './index.css';


import {Subject} from 'rxjs'

const search = require('./search.svg')

class Button extends Component {

    constructor(props){
        super(props)
        this.inputStream = new Subject();
        this.unmounted = new Subject();
        this.state = {
            isOpen: false,
            text: ''
        }
    }
    

    componentDidMount() {
        this.initStream()
    }

    
    
    initStream = () => {
    this.inputStream.asObservable()
        .debounceTime(2000)
        .subscribe(telephone => {
        this.setState({
            text: ''
        })
        this.props.callBack(telephone)
        })
    }

    toggleClass = () =>  {
        this.setState(prevState => ({isOpen: !prevState.isOpen}))
    }

    handleChange = e => {
        const {value: telephone} = e.target
        this.setState({
            text: telephone
        })

        this.inputStream.next(telephone)
    }
    
    render(){
        const { isOpen, text } = this.state

        const selectedClass = isOpen ? "search-txt open" : "search-txt";

        return (
            <div className="search-wrapper">
                <div className="search-box">
                    <input type='text'
                        className={selectedClass}
                        placeholder='Введите что-то'
                        onChange={(e) => this.handleChange(e)}
                        value={text} />

                    <span className='search-button' onClick={(e) => this.toggleClass()}>
                        <img className='search-loop' src={search} alt='search' />
                    </span>
                </div>
            </div>
        )
    }
}

export default Button