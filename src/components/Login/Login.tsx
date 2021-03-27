import React from 'react';
import {Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import axios from 'config/axios';
import {Link} from 'react-router-dom';
import 'components/Login/login.scss';

interface LoginState {
  account: string,
  password: string,
}

class Login extends React.Component<any, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
  }

  onChangeAccount = (e: any) => {
    this.setState({
      account: e.target.value
    });
  };
  onChangePassword = (e: any) => {
    this.setState({
      password: e.target.value
    });
  };

  submit = async () => {
    try {
      await axios.post('sign_in/api_user', {
        account: this.state.account,
        password: this.state.password,
      });
      this.props.history.push('/')
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    return (
      <div id="login">
        <h1>登录页面</h1>
        <Input value={this.state.account}
               allowClear
               onChange={this.onChangeAccount}
               placeholder="请输入用户名"
               prefix={<UserOutlined/>}/>
        <Input.Password value={this.state.password}
                        allowClear
                        onChange={this.onChangePassword}
                        placeholder="请输入密码"
                        prefix={<LockOutlined/>}/>
        <Button className="loginButton" type="primary" onClick={this.submit}>登录</Button>
        <p>如果你没有账号，请立即<Link to='/signUp'>注册</Link></p>
      </div>
    );
  }
}

export default Login;
