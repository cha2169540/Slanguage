import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./style.css"
import { Jumbotron, Card, Row, Col, Container, Button, CardDeck } from 'react-bootstrap';
import { UserContext } from '../../utils/Context';
import API from '../../utils/API';



export default function DashboardCard() {
    const { user, setUser, currentLang, setCurrentLang } = useContext(UserContext);

    const { lang } = useParams();

    const language = lang || currentLang

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
        setCurrentLang(language);
        console.log(language);
    }, [])


    return (
        <>
            {!loading ?
            <>
                <div className="backgroundImage" style={{
                    backgroundImage:
                        `url(https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/${lang.toLowerCase()}.png)`
                }}>
                </div>

                <Container>
                    <Jumbotron fluid className="display-flex grayBox">
                        <Row>
                            <Col>
                                <h1 className="studying">Language: {language}</h1>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Card.Body>
                    <Col className="greeting text-center">
                        <h3 className="heading">Hello {user.username}, welcome back!</h3>
                        <h1 className="heading">What would you like to do?</h1>
                    </Col>
                    </Card.Body> */}
                        </Row>
                        <Row>
                            <Col>
                                <Link to={"/SelectLanguage"}><Button className="chooseLanguage" variant="primary">Choose Different Language</Button></Link>
                            </Col>
                        </Row>

                        <CardDeck className="card_s text-center">
                            <Card className="cardz card--1">
                                <div className="card__info-hover">
                                    <svg className="card__like" viewBox="0 0 24 24">
                                        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                    </svg>
                                    <div className="card__clock-info">
                                        <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                                        </svg><span className="card__time">15 min</span>
                                    </div>
                                </div>
                                <Card.Img variant="top" className="card__img" />
                                <Link to={"/LessonMenu/pres/" + language} className="card_link">
                                    <div className="card__img--hover"></div>
                                </Link>
                                <Card.Body className="card__info">
                                    <Card.Title>Learn</Card.Title>
                                    <Card.Text>
                                        Click here to learn some vocabulary to stick in your back pocket.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardz card--2">
                                <div className="card__info-hover">
                                    <svg className="card__like" viewBox="0 0 24 24">
                                        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                    </svg>
                                    <div className="card__clock-info">
                                        <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                                        </svg><span className="card__time">5 min</span>
                                    </div>
                                </div>
                                <Card.Img variant="top" className="card__img" />
                                <Link to={"/LessonMenu/quiz/" + language} className="card_link">
                                    <div className="card__img--hover"></div>
                                </Link>
                                <Card.Body>
                                    <Card.Title>Quiz Yourself</Card.Title>
                                    <Card.Text>
                                        Come practice your knowledge on what you've learned so far.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardz card--3">
                                <div className="card__info-hover">
                                    <svg className="card__like" viewBox="0 0 24 24">
                                        <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                    </svg>
                                    <div className="card__clock-info">
                                        <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                                        </svg><span className="card__time">15 min</span>
                                    </div>
                                </div>
                                <Card.Img variant="top" className="card__img" />
                                <Link to="/Progress" className="card_link">
                                    <div className="card__img--hover"></div>
                                </Link>
                                <Card.Body>
                                    <Card.Title>Progress</Card.Title>
                                    <Card.Text>
                                        Click here to check your status in each category.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Jumbotron>
                </Container>
                </ >
            :
                <div className="loading-icon"></div>
            }
        </ >
    )
}