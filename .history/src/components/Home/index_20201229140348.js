/* eslint-disable */
import { font } from 'jodit/src/plugins';
import React, { Component } from 'react';
import Background from '../../../public/assets/background1.png';
class Main extends Component {
    render() {
        // const css = {
        //     *{
        //         margin:0;
        //         padding:0;
        //         font-family:'sans-seif';
        //     }
        // }
        return (
            <div>
                <img src={Background}></img>
            </div>
        )
    }
}

export default Main