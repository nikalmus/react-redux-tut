import React from 'react'
import SillyPainter from '../hoc/SillyPainter'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa maiores beatae sit perferendis quas necessitatibus facere repellendus voluptatibus! Veritatis eius dolorem numquam odit inventore voluptatem quis, excepturi quibusdam cupiditate! Reiciendis?</p>
        </div>
    )
}
export default SillyPainter(About);