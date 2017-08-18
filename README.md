# rc-button
a react button ui component , If you want a nice or beauty button , You might use it :)

## Example
### [Live Demo](https://lijinke666.github.io/rc-button/)
 - `yarn` or `npm install`
 - `npm run demo`   run example


## Install
####  use npm
```
npm install rc-button --save
```

#### or user yarn
```
yarn add rc-button
```

## Usage

```javascript
import React from "react"
import ReactDOM from "react-dom"
import Button from "rc-button"

const Styles = {marginBottom:10}
const Demo = () => (
    <div>
        <h2>Example</h2>
        <ol>
            <li style={Styles}><Button type="default">default</Button></li>
            <li style={Styles}><Button type="primary" onClick={()=>alert('primary')}>primary</Button></li>
            <li style={Styles}><Button type="warning">warning</Button></li>
            <li style={Styles}><Button type="success">success</Button></li>
            <li style={Styles}><Button type="orange">orange</Button></li>
            <li style={Styles}><Button type="info">info</Button></li>
            <li style={Styles}><Button type="disabled" onClick={() => alert('i am disabled')}>disabled</Button></li>
        </ol>
    </div>
)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)
```

