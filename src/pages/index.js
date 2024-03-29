import React from "react"
import styled from "styled-components"
import { flex, color } from "../assets/styles/mixins/_mixin"
import Layout from "../layouts/Layout"

const ComingSoon = styled.div`
	${ flex({ axis : "column" }) };
	align-items: center;
	justify-content: flex-start;
	height: inherit;
	text-align: center;

	a{
		text-decoration: underline;
       	${ color({ rgba: props => props.theme.textColor }) };
	}
`;

const Home = () => {
	return (
		<Layout>
			<ComingSoon>
			<h1>Coming Soon</h1>
			<br/>
			<p>Any enquiry please email to us <a href="mailto:hello@avella.my">hello@avella.my</a></p>
			</ComingSoon>
		</Layout>
  	)
}
 
export default Home;