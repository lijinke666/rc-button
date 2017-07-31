import React from "react"
import ReactDOM from "react-dom"
import Button from "../src/index"


const Demo = () => (
    <div>
        <h2>Example</h2>
        <ol>
            <li><Button type="default">default</Button></li>
            <li><Button type="primary" onClick={()=>alert('primary')}>primary</Button></li>
            <li><Button type="warning">warning</Button></li>
            <li><Button type="success">success</Button></li>
            <li><Button type="orange">orange</Button></li>
            <li><Button type="info">info</Button></li>
            <li><Button type="disabled" onClick={() => alert('i am disabled')}>disabled</Button></li>
        </ol>
    </div>
)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)