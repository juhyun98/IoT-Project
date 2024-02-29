import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap';
import axios from '../axios';

const FsrTable = () => {
    let user = JSON.parse(sessionStorage.getItem('user') || null);

    const [lf_members, setLfMembers] = useState([]);
    // const [rf_members, setRfMembers] = useState([]);

    useEffect(() => {
        axios
            .post('/user/survey', { id: user.id })
            .then((res) => {
                const data = res.data;
                console.log(res.data);

                const fsrLfData = res.data.fsrLfData;
                // const fsrRfData = res.data.fsrRfData;
                setLfMembers(fsrLfData);
                // setRfMembers(fsrRfData);
            })
            .catch((error) => {
                console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
            });
    }, []);

    return (
        <Row>
            <Col lg="12">
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-card-text me-2"> </i>
                        fsr 왼발 데이터
                    </CardTitle>
                    <CardBody className="">
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>시각</th>
                                    <th>key1</th>
                                    <th>key2</th>
                                </tr>
                            </thead>
                            <tbody>
                    {lf_members && lf_members.map((member, index) => (
                        <tr key={index}>
                            <th scope="row" style={{ width: '200px' }}>
                                {new Date(member.created_at).toLocaleString('en-US', { hour12: false })}
                            </th>
                            <td>{JSON.parse(member.press_value).key1}</td>
                            <td>{JSON.parse(member.press_value).key2}</td>
                        </tr>
                    ))}
                </tbody>

                        </Table>
                    </CardBody>
                </Card>
            </Col>
            {/* <Col lg="12">
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-card-text me-2"> </i>
                        fsr 오른발 데이터
                    </CardTitle>
                    <CardBody className="">
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: '#0B0B3B', color: 'white', textAlign: 'center' }}>시각</th>
                                    <th>key1</th>
                                    <th>key2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rf_members.map((member, index) => (
                                    <tr key={index}>
                                        <th scope="row" style={{ width: '200px' }}>
                                            {new Date(member.created_at).toLocaleString('en-US', { hour12: false })}
                                        </th>
                                        <td>{JSON.parse(member.press_value).key1}</td>
                                        <td>{JSON.parse(member.press_value).key2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col> */}
        </Row>
    );
};

export default FsrTable;
