import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import "./styles.less"

export default class Button extends React.PureComponent {
    static defaultProps = {
        type: "default",
        htmlType: "button"
    }
    static PropTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning', 'success', 'error','info','orange','disabled'])
    }
    render() {
        const { children, type, className, htmlType,onClick,...attr } = this.props
        const Type = ( btnType )=>{
            return type.indexOf(btnType) != -1
        }
        const isDisabled = Type('disabled') ? { disabled :true} :{}
        return (
            <button
                {...attr}
                {...isDisabled}
                type={htmlType}
                onClick={onClick}
                className={
                    classNames(
                        'jinke-btn',
                        'btn',
                        { 'btn-primary': Type("primary") },
                        { 'btn-warning': Type("warning") },
                        { 'btn-success': Type("success") },
                        { 'btn-error': Type("error") },
                        { 'btn-default': Type("default") },
                        { 'btn-disabled': Type("disabled") },
                        { 'btn-info': Type("info") },
                        { 'btn-orange': Type("orange") },
                        { 'btn-block': Type("block")},
                        className
                    )
                }
            >
                <span>{children}</span>
            </button>
        )
    }
}