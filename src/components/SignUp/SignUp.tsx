import React from 'react';
import {Input, Button} from 'antd';
import {UserOutlined, LockOutlined,SmileOutlined } from '@ant-design/icons';
import axios from 'config/axios'
import {Link} from 'react-router-dom';
import 'components/SignUp/signUp.scss'

interface SignUpState {
  account: string,
  password: string,
  password_confirmation: string
}

class SignUp extends React.Component<any, SignUpState> {
  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
      password_confirmation: ''
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
  onChangePasswordCon = (e: any) => {
    this.setState({
      password_confirmation: e.target.value
    });
  };
  submit = async ()=>{
    try {
      await axios.post('sign_up/api_user',{
        password_confirmation: this.state.password_confirmation,
        account: this.state.account,
        password: this.state.password,
      })
      console.log('成功');
    }catch (e){
      throw new Error(e)
    }
  }

  render() {
    return (
      <div id="signUp">
        <h1>账号注册</h1>
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
        <Input.Password value={this.state.password_confirmation}
                        allowClear
                        onChange={this.onChangePasswordCon}
                        placeholder="确认密码"
                        prefix={<SmileOutlined/>}/>
        <Button className="signUpButton" type="primary" onClick={this.submit}>注册</Button>
        <p>如果你已经有账号了，请立即<Link to='/login'>登录</Link></p>
      </div>
    );
  }
}

export default SignUp;
