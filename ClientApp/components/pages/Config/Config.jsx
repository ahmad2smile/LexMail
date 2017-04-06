import React, { PropTypes } from "react";
import { Row, Col, Chip } from "react-materialize";

class Config extends React.Component {
    render () {
        return(
            <Row className="newContainer configContainer">
                <Col>
                    <div className="configHead">Configure LexMail Services</div>
                    <Chip>
                        <img src="https://placekitten.com/150/150" alt="User Profile Pic" />
                        Ahmad
                    </Chip>
                </Col>
            </Row>
    );
    }
}

export default Config;
