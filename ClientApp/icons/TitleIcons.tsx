import * as React from 'react';

import ListIcon from "./ListIcon";
import SearchIcon from "./SearchIcon";

interface ItitleIconsProps {}

interface ItitleIconsState {}

class titleIcons extends React.Component<ItitleIconsProps, ItitleIconsState> {
    public render() {
        return (
          <div>
            <ListIcon/>
            <SearchIcon/>
          </div>
        );
    }
}

export default titleIcons;
