import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Portfolio () {
    return (
        <div id="Portfolio">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/musiquery.png')} rounded />
                        <p><a href="http://project-2-agrc.herokuapp.com/" target="_blank">MusiQuery Deployed</a> / <a href="https://github.com/ryanbrooks99/musiquery" target="_blank">MusiQuery Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/cocktellme.png')} rounded />
                        <p><a href="https://oksimone.github.io/cocktellme/" target="_blank">CockTell Me Deployed</a> / <a href="https://github.com/ryanbrooks99/cocktellme" target="_blank">CockTell Me Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/dayplanner.png')} rounded />
                        <p><a href="https://ryanbrooks99.github.io/dayplanner/" target="_blank">Day Planner Deployed</a> / <a href="https://github.com/ryanbrooks99/dayplanner" target="_blank">Day Planner Github</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/eatdaburger.png')} rounded />
                        <p><a href="https://fierce-ridge-99818.herokuapp.com/" target="_blank">Eat-Da-Burger! Deployed</a> / <a href="https://github.com/ryanbrooks99/burger" target="_blank">Eat-Da-Burger! Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/codequiz.png')} rounded />
                        <p><a href="https://ryanbrooks99.github.io/codequiz/" target="_blank">Code Quiz Deployed</a> / <a href="https://github.com/ryanbrooks99/codequiz" target="_blank">Code Quiz Github</a></p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width="100%" src={require('../assets/images/weatherdashboard.png')} rounded />
                        <p><a href="https://ryanbrooks99.github.io/weatherdashboard/" target="_blank">Weather Dashboard Deployed</a> / <a href="https://github.com/ryanbrooks99/weatherdashboard" target="_blank">Weather Dashboard Github</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Portfolio;