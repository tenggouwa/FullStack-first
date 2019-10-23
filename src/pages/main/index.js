import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Header from '@/components/header'
import Footer from '@/components/footer'
import RouteWithSubRoutes from '@/components/routeWithSubRoutes'

import './index.scss'


@withRouter
@connect()
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        console.log(this.props.routes)
        return (
            <div className="main">
                <Header />
                <div className="main-main">
                    <Switch>
                        {
                            this.props.routes.map((route, i) =>
                                <RouteWithSubRoutes key={i} {...route} />)
                        }
                        <Redirect to="/main/markdown" />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}
