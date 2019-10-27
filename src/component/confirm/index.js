import React, {Component} from 'react'
import ReactDom from 'react-dom'
import './index.css'

class Confirm extends Component{

    handleClick = (bool) => {
        console.log(bool)
    }

    componentDidMount(){
        this.props.componentDidMount(true)
    }

    render (){
        return (
            <div className="modal-mask">   
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>{this.props.content}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default cancelBtn" onClick={() => this.handleClick(false)}>取消</button>
                            <button type="button" className="btn btn-danger sureBtn" onClick={() => this.handleClick(true)}>确定</button>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

let div = null

export function confirm(content) {
    var confirmPromise = new Promise(function(resolve, reject){
        div = document.createElement('div')
        ReactDom.render(<Confirm content={content} componentDidMount={resolve} />, div)
        document.body.appendChild(div)
    })
    return confirmPromise;
};


