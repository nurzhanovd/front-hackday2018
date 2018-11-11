import React, {Component, Fragment} from 'react';
import InputMask from 'react-input-mask';

// const LineChart = require("react-chartjs").Line;

import {Line} from 'react-chartjs-2'


import './index.css';


import {Subject} from 'rxjs'


class Button extends Component {

    constructor(props){
        super(props)
        this.inputStream = new Subject();
        this.unmounted = new Subject();
        this.state = {
            text: '',
            error: false,
            x: [],
            y: []
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
        this.getStatistics(telephone)
        })
    }


    handleChange = e => {
        const {value: telephone} = e.target
        this.setState({
            text: telephone
        })

        if(!telephone.includes('_') && telephone.length){
            this.inputStream.next(telephone.replace(/\D/g, ''))
        }
    }

    getStatistics = (telephone) => {
        console.log(telephone)
        this.setState({
            error: true
        })
    }

    getPersonalGraph = () => {
        return <Line
                    data= {{
                        labels: ["January", "February ", "March", "April", "May", "June",
                                    'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                        {
                            label: "Chat member activity",
                            // backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#e8c3b9","#c45850"],
                            pointBorderColor: '#aaa',
                            data: [2478,5267,734,784,433, 850, 600, 630, 610, 450, 5000, 522],
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#a15qaa",
                            pointHighlightFill: "#anc",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                        }
                        ], 
                        animationEasing: "easeOutQuart",
                        
                    }}
                    width={60}
                    height={15}
                    backgroundColor='green'
        />
    }
    
    render(){
        const { text } = this.state

        return (
            <Fragment>
                <div className="Wrapper">
                        <div className="Input">
                            <InputMask type="text" id="input" className="Input-text" placeholder="Введите номер телефона" mask="+7(999) 999 99 99" onChange={(e) => this.handleChange(e)} value={text} />
                            {this.state.error && (<label htmlFor="input" className="Input-label">Номер не найден в базе</label>)}
                            <label htmlFor="input" className="Input-label">Номер не найден в базе</label>
                        </div>
                </div>
                {this.getPersonalGraph()}
            </Fragment>
        )
    }
}

export default Button