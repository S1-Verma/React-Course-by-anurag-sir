import React, { Component } from 'react'


export default function withCounter(Wrappedcomponents) {
    return class newCounter extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }

        increaseCount = () => {
            this.setState({ count: this.state.count + 1 })
        }

        render() {
            return (
                <div>
                    <Wrappedcomponents count={this.state.count} increaseCount={this.increaseCount} {...this.props} />
                </div>
            )

        }
    }
}
