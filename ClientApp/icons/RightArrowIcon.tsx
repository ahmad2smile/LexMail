import * as React from 'react';

interface IRightArrowIconProps {}

interface IRightArrowIconState {}

class RightArrowIcon extends React.Component<IRightArrowIconProps, IRightArrowIconState> {
    public render() {
        return (
          <svg fill="#222" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
              <path d="M0 0h24v24H0V0z" fill="none"/>
          </svg>
        );
    }
}

export default RightArrowIcon;
