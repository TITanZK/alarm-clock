import React from 'react';

interface IndexRouter {
  history: any
}

class Index extends React.Component<IndexRouter> {
  // constructor(props: any) {
  //   super(props);
  // }

  login = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Index;