import * as React from 'react';

interface IHomeProps {}

interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
    public render() {
        return (
          <div>
              <div>Hello, world!</div>
          </div>
        );
    }
}

export default Home;
