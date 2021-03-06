import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import messgae from '../../components/message'
import './index.scss'

import { Form, Icon, Input, Button } from 'antd'

@withRouter
@connect(state => ({
    apis: state.apis
}))

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    const res = await this.props.apis.login(values)
                    if (res.code === 0) {
                        messgae.success('登录成功')
                        this.props.history.push('/main')
                    } else {
                        messgae.warning(res.msg)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <div className="login-main">
                    <h4>登录</h4>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('phoneNumber', {
                                rules: [{ required: true, message: '请输入手机!' }],
                            })(<Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="手机号码"
                            />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(<Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            Or &nbsp;
                            <span onClick={() => { this.props.history.push('/register') }}>register now!</span>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalLoginForm
