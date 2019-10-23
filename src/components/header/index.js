import React, { Component } from 'react'
import './index.scss'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">logo</div>
                <div className="header-right">
                    user
                </div>
            </div>
        )
    }
}
