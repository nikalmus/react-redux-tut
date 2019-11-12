import React from 'react'

const SillyPainter = (WrappedComponent) => {
    const colors = ['red', 'blue', 'orange', 'green', 'yellow'];
    //get integer between 0 and 5, and access a random color from colors array
    const randomColor = colors[Math.floor(Math.random() * 4 )] 
    const className = randomColor + '-text';
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default SillyPainter;