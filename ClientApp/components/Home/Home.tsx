import * as React from 'react';

interface IHomeProps {}

interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
    public render() {
        return (
          <h1>Hello, world!</h1>
        );
    }
}

export default Home;
