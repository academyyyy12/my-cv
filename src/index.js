import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/* handleSubmit(event){
    this.setState({isLoading: true}, () => {
        console.log(this.state.isLoading)
        this.RecheckForNumber()
    })
    event.preventDefault();
    console.log(this);
} */