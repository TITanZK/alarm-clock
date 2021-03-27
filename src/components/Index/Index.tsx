import React from 'react';
import {Button} from 'antd';

interface IndexRouter {
  history: any
}

class Index extends React.Component<IndexRouter> {
  constructor(props: any) {
    super(props);
  }

  login = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.login}>登录</Button>
      </div>
    );
  }
}

export default Index;