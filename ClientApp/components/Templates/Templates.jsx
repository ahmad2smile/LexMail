import * as React from "react";
import { Grid, Cell } from "react-mdl";

import TempBoxes from "./TempBoxes/TempBoxes"

class Templates extends React.Component {
    render() {
        return (
            <Grid>
                <Cell>
                    <TempBoxes templateTagLetter="W" templateName="Bla Bla Name" templateCTime="1 Hour ago"/>
                </Cell>
                <Cell>
                    <TempBoxes templateTagLetter="C" templateName="Bla Bla Name Too long Name Right Here" templateCTime="1 Hour ago"/>
                </Cell>
                <Cell>
                    <TempBoxes templateTagLetter="F" templateName="Bla Bla Name" templateCTime="1 Hour ago"/>
                </Cell>
                <Cell>
                    <TempBoxes templateTagLetter="A" templateName="Bla Bla Name" templateCTime="1 Hour ago"/>
                </Cell>
                <Cell>
                    <TempBoxes templateTagLetter="B" templateName="Bla Bla Name" templateCTime="1 Hour ago"/>
                </Cell>
            </Grid>
        );
    }
}

export default Templates
