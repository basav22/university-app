// @ts-check

import React from "react";
import Accordion from "./Accordion";


export default function AccordionTest(props) {
    const {HeaderComp, BodyComp} = props;
    return <Accordion>

        <Accordion.Header>
            <HeaderComp />
        </Accordion.Header>

        <Accordion.Body>
            <BodyComp />
        </Accordion.Body>

    </Accordion>;
}