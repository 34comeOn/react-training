import React from "react";

import { Event, State, Props } from "../../../types/signIn";


export class InputClassComponent extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: Event) {
        this.props.onInputChange(e.target.value);
      }

    render() {
        const inputState = this.props.inputState;
        const type = this.props.type;
        const id = this.props.id;
        const name = this.props.name;


        return <input type={type} id={id} name={name} 
        onChange={this.handleChange} value={inputState}/>
    }
}