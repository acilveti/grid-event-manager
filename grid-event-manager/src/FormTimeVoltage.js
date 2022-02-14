import React, {Component} from 'react'

class FormTimeVoltage extends Component {
    constructor(props){
        super(props)

        this.state = {
            voltageValue:  '' , 
            timeValue:  '' ,
          };
        this.handleChange = this.handleChange.bind(this);

        

    }
   

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value });
        this.props.callbackFromParent(this.props.order, this.state);
      }
    
        
    
    render (){
        return (    
        <div className="form-group row">
            <label htmlFor={"inpunt number" + this.props.order} className="col-sm-2 col-form-label">{"t" + this.props.order}</label>
            <div className="col-sm-2">
                <input type="number" name="timeValue" value={this.state.timeValue} className="form-control" id={"inpunt number" + this.props.order} placeholder="0" onChange={this.handleChange} />
            </div>
            <label htmlFor={"inpunt number" + this.props.order} className="col-sm-2 col-form-label">{"v" + this.props.order}</label>
            <div className="col-sm-2">
                <input type="number"  name = "voltageValue" value={this.state.VoltageValue}className="form-control" id={"inpunt number" + this.props.order} placeholder="0" onChange={this.handleChange}/>
            </div>
        </div>
        );
    }
}

export default FormTimeVoltage;