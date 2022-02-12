import React, {Component} from 'react'

class FormTimeVoltage extends Component {
    constructor(props){
        super(props)
    }
    
    render (){
        return (    
        <div className="form-group row">
            <label htmlFor="inputnumber3" className="col-sm-2 col-form-label">t1</label>
            <div className="col-sm-2">
                <input type="number" className="form-control" id="inputnumber3" placeholder="0" />
            </div>
            <label htmlFor="inputnumber3" className="col-sm-2 col-form-label">v1</label>
            <div className="col-sm-2">
                <input type="number" className="form-control" id="inputnumber3" placeholder="0" />
            </div>
        </div>
        );
    }
}

export default FormTimeVoltage;