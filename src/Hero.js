import React from 'react';
import Card from './Card'

function Hero({data}) {
    return (
        <section className="hero">
            <div className="container">
            <Card data={data}/>
            </div>
            
        </section>
    )
}

export default Hero
