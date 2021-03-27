import React from 'react';
import {Input, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import axios from 'config/axios'

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
      <div>
        <Input size="large"
               value={this.state.account}
               onChange={this.onChangeAccount}
               placeholder="请输入用户名"
               prefix={<UserOutlined/>}/>
        <Input.Password value={this.state.password}
                        onChange={this.onChangePassword}
                        placeholder="请输入密码"/>
        <Input.Password value={this.state.password_confirmation}
                        onChange={this.onChangePasswordCon}
                        placeholder="确认密码"/>
        <Button type="primary" onClick={this.submit}>注册</Button>
      </div>
    );
  }
}

export default SignUp;
