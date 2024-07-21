import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animations from '../../assets/animations.json'
class Animation extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animations,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={900}
                width={900}
               />
            </div>
        )
    };  
}
export default Animation;