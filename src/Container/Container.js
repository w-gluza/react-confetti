import React from 'react';
import './Container.css';

import afternoonNavy from '../assets/afternoon-navy.svg';
import butterscotch from '../assets/butterscotch.svg';
import lightblue from '../assets/lightblue.svg';
import salmonPink from '../assets/salmon-pink.svg';
import sustainableGreen from '../assets/sustainable-green.svg';

const Container = ()=> {
    return (
        <section class="section">
            <p>Container</p>
        <img src={afternoonNavy} alt='icon'></img>
        <img src={butterscotch} alt='icon'></img>
        <img src={lightblue} alt='icon'></img>
        <img src={salmonPink} alt='icon'></img>
        <img src={sustainableGreen} alt='icon'></img>
        </section>
    )
}

export default Container;
