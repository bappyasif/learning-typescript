import { Component } from "react"

type counterPropsType = {
    message: string
}

type counterStatePropType = {
    count: number
}

// if we dont need component props typ we can pass in empty object
// if we dont need component state variable we can simply remove that from component inference
export class CounterWithClassComponent extends Component <counterPropsType, counterStatePropType> {
    state = {
        count: 0
    }

    handleClick = () => this.setState(prev => ({ count: prev.count + 1 }))

    render() {
        return (
            <>
                <div>CounterWithClassComponent</div>
                {this.props.message} -- {this.state.count}
                <button onClick={this.handleClick}>Increment Count</button>
            </>
        )
    }
}

export default CounterWithClassComponent