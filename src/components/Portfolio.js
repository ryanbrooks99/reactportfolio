import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CSS from '../components/Components.css'


function Portfolio () {
    return (
        <div id="Portfolio">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/musiquery.png')} rounded />
                        <p><a href="http://project-2-agrc.herokuapp.com/" target="_blank" rel="noopener noreferrer">MusiQuery Deployed</a> / <a href="https://github.com/ryanbrooks99/musiquery" target="_blank">MusiQuery Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/cocktellme.png')} rounded />
                        <p><a href="https://oksimone.github.io/cocktellme/" target="_blank" rel="noopener noreferrer">CockTell Me Deployed</a> / <a href="https://github.com/ryanbrooks99/cocktellme" target="_blank">CockTell Me Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/equippe.png')} rounded />
                        <p><a href="https://vast-ravine-19894.herokuapp.com/" target="_blank" rel="noopener noreferrer">EquiPPE Deployed</a> / <a href="https://github.com/ryanbrooks99/project-3" target="_blank">EquiPPE Github</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Portfolio;