import React,{Component} from 'react';
import config from './config.json';

import style from './Greeter.scss';

class Greeter extends Component {
    render(){
        return(
            <div className={style.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;