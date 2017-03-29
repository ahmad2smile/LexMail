import * as React from 'react';
import { Link } from 'react-router';

export class NavMenu extends React.Component<void, void> {
    public render() {
        return (
            <div className='main-nav'>
                <ul className='nav navbar-nav'>
                    <Link to={'/'} activeClassName='active'>
                        Home
                    </Link>
                    <Link to={'/counter'} activeClassName='active'>
                        Counter
                    </Link>
                    <Link to={'/fetchdata'} activeClassName='active'>
                        Fetch data
                    </Link>
                </ul>
            </div>
        );
    }
}
