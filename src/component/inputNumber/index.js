import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.css'

class InputNumber extends Component{
    constructor(props){
        super(props)
        this.state = {
            focus: false,
            innerValue: 0
        }
    }
    
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        size: PropTypes.string
    }

    static defaultProps = {
        size: 'middle',
        onChange: () => {}
    }

    get isControl(){
        return 'value' in this.props
    }

	get value() {
        console.log(this.props.value)
        console.log(this.isControl)
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
	}

    render() {
        const {
            focus
        } = this.state
        const { 
            size,
            rule = new RegExp(),
            message
        } = this.props

        let cls = classNames({
            input: true,
            focus,
            [`size-${size}`]: true,
            'react-ui__input': true
        })
        return (
            <div>
            <div className={cls}>
                <input 
                    value = {this.value}
                    type = "number"
                    onFocus={e => {
                        this.setState({
                            focus: true
                        })
                    }}
                    onBlur={e => {
                        this.setState({
                            focus: false
                        })
                    }}
					onChange={(e) => {
						if(!this.isControl){
							this.setState({
								innerValue: e.target.value
							})
                        }
						this.props.onChange(e)
					}}
                />
            </div>
                <p className="input-error-message">{!rule.test(this.value) && message}</p>
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            innerValue: this.props.defaultValue
        })
    }
}

export default InputNumber