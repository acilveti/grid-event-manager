import React, {Component} from 'react'

class FormTimeVoltage extends Component {
    constructor(props){
        super(props)

        this.state = {
            task: { text: '' },
            tasks: [],
          };
    }
    
    render (){
        return (    
        <div className="form-group row">
            <label htmlFor={"inpunt number" + this.props.order} className="col-sm-2 col-form-label">{"t" + this.props.order}</label>
            <div className="col-sm-2">
                <input type="number" className="form-control" id={"inpunt number" + this.props.order} placeholder="0" />
            </div>
            <label htmlFor={"inpunt number" + this.props.order} className="col-sm-2 col-form-label">{"v" + this.props.order}</label>
            <div className="col-sm-2">
                <input type="number" className="form-control" id={"inpunt number" + this.props.order} placeholder="0" />
            </div>
        </div>
        );
    }
}

export default FormTimeVoltage;