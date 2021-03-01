import React from 'react'
import { Link } from "gatsby"
import Layout from "../layouts/Layout"
import styled from "styled-components"
import { flex, color } from "../assets/styles/mixins/_mixin"

const Notfound = styled.div`
	${ flex({ axis : "column" }) };
	align-items: center;
	justify-content: flex-start;
	height: inherit;
	text-align: center;

    a {
        text-decoration: underline;
        ${ color({ rgba: props => props.theme.textColor }) };
    }
`;

const NotFound = () => {
    return (
        <Layout>
            <Notfound>
                <h2>Uh.. Not Found</h2>
                <br />
                <p>Please come back</p>
                <br />
                <Link to="/">Return Home</Link>
            </Notfound>
        </Layout>
    )
}
 
export default NotFound;
