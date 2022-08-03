import React, { useState } from "react";

type InputTyping = {
    type: string,
    id: string,
    name: string,
}

export default function Input ({type, id, name} : InputTyping): JSX.Element {
    const [inputState, setInputState] = useState('');

    return (
        <input type={type} id={id} name={name} 
        onChange={(event) => setInputState(event.target.value)} value={inputState}/>
    );
}

type Props = {
    type: string,
    id: string,
    name: string,
    inputState: string,
    onInputChange: any,
}

type State = {
    inputState: string;
  }

type Event = {
    target: { value: string};
  }

export class InputClass extends React.Component<Props, State> {
    
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