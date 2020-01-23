import React from 'react'
import ReactDom from'react-dom'

function countDown () {
    let timeout = new Date('Jan 25, 2020 23:59:59')
    const element = (
        <div style= {{ margin: "0 auto", width: 400, paddingTop: 200, textAlign: "justify" }}>
            <h1>I'm working</h1>
            <h2>This ugly page will be off at: </h2>
            <h3> { timeout.toString() } </h3>
        </div>
    )

    ReactDom.render(
        element,
        document.getElementById('app')
    )
}

setInterval(countDown, 1000)