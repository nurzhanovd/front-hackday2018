import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

// library.add(faSearch);

class Asd extends React.Component {
    render() {
        return (
            <div>asdasdasdassda</div>
        )
    }
}

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/test' component={Asd} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
