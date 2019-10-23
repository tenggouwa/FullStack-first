import React, { Component } from 'react'
import './index.scss'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="footer">
                &copy; 知识产权保护
            </div>
        )
    }
}
