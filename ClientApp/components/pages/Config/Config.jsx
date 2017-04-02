import React, { PropTypes } from "react";
import { Grid, Cell, Chip, ChipContact } from "react-mdl";

class Config extends React.Component {
    render () {
        return(
            <Grid className="newContainer configContainer">
                <Cell col={12}>
                    <div className="configHead">Configure LexMail Services</div>
                    <Chip>
                        <ChipContact style={{ background: 'url("https://placekitten.com/150/150") 0 0 / cover' }} />
                        Ahmad
                    </Chip>
                </Cell>
            </Grid>
    );
    }
}

export default Config;
