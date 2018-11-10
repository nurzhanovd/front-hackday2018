import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import './index.css';


import {Subject} from 'rxjs'


class Button extends Component {

    constructor(props){
        super(props)
        this.inputStream = new Subject();
        this.unmounted = new Subject();
        this.state = {
            text: '',
            error: false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error){
            this.setState({
                error: true
            })
        }
    }    

    componentDidMount() {
        this.initStream()
    }

    componentWillUnmount(){
        this.unmounted.next()
    }

    
    
    initStream = () => {
    this.inputStream.asObservable()
        .debounceTime(2000)
        .takeUntil(this.unmounted.asObservable())
        .subscribe(telephone => {
        this.setState({
            text: ''
        })
        this.props.callBack(telephone)
        })
    }


    handleChange = e => {
        const {value: telephone} = e.target
        this.setState({
            text: telephone
        })

        this.inputStream.next(telephone)
    }
    
    render(){
        const { text } = this.state

        return (
            <div className="Wrapper">
                    <div className="Input">
                        {/* <input type="text" id="input" className="Input-text" placeholder="Your first name, e.g. Nicholas" onChange={(e) => this.handleChange(e)} value={text} /> */}
                        <InputMask type="text" id="input" className="Input-text" placeholder="Введите номер телефона" mask="+7(999) 999 99 99" onChange={(e) => this.handleChange(e)} value={text} />
                        {this.state.error && (<label htmlFor="input" className="Input-label">Номер не найден в базе</label>)}
                    </div>
            </div>
        )
    }
}

export default Button