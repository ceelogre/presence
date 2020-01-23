import React from 'react'
import ReactDom from'react-dom'

function countDown () {
    const remainingTime = new Date('jan 23, 2020 23:59:59') - new Date()
    let timeout = remainingTime
    const element = (
        <div style= {{ margin: "0 auto", width: 400, paddingTop: 200, textAlign: "justify" }}>
            <h1>I'm working</h1>
            <h2>This ugly page will be off in: </h2>
            <h3> { new Date(timeout).toLocaleTimeString() } </h3>
        </div>
    )

    ReactDom.render(
        element,
        document.getElementById('app')
    )
}

setInterval(countDown, 1000)