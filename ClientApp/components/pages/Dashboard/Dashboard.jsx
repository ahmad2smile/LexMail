import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div style={{width:"100%" ,background:"#fff", paddingBottom:"20px", display:"flex", justifyContent:"center"}}>
                <div className="dashcontent">
                    <h4>The site is not Ready Yet!</h4>
                    <div>But rest assured out Archetect is ON IT</div>
                    <div className="theArchetectImg" style={{width:"250px"}}></div>
                    <div>(NOTE: Our Archetect certainly doesn't look like this)</div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
