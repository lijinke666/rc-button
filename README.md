# Rc-button
react button ui component , If you want a nice or beauty button , You might use it :)


#### if you want run example
 - `yarn`
 - `npm run demo`   run example

#### Then open
```
locahost:3000
```
 
####  use npm
```
npm install rc-button --save
```

#### or user yarn
```
yarn add rc-button
```

```javascript
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
```

