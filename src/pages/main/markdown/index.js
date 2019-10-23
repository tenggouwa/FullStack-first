import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'

// const mditor = require('mditor')

// const parser = new mditor.Parser()
// const html = parser.parse('** Hello mditor! **')

const { markdown } = require('markdown')


@connect(state => ({
    wsData: state.wsData,
    sendWs: state.sendWs,
    wsObj: state.wsObj,
}))
export default class MarkDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
        this.taskRemindInterval = null
    }
    componentDidMount() {
        this.init()
        // console.log(html)
    }
    Editor = (e) => {
        console.log(e)
        this.setState({
            value: markdown.toHTML(e)
        })
    }
    init = () => {
        // markdown.toHTML('Hello *World*!')
    }
    render() {
        const { value } = this.state
        return (
            <div className="markdown">
                <textarea
                    className="markdown-input"
                    onChange={(e) => { this.Editor(e.target.value) }}
                />
                <div className="markdown-text" dangerouslySetInnerHTML={{ __html: value }} />
            </div>
        )
    }
}
