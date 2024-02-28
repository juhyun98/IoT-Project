import { useEffect, useState } from "react";
import ProjectTables from "./ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import axios from "../axios";


const Tables = () => {
  let user = JSON.parse(sessionStorage.getItem('user') || null);

  const [rf_members, setRfMembers] = useState([]);
    const [lf_members, setLfMembers] = useState([]);
  
    useEffect(() => {
      axios
        .post('/user/survey', { id: user.id })
        .then((res) => {

          const data = res.data
          // const gyroRfData = res.data.gyroRfData;
          // const gyroLfData = res.data.gyroLfData;
          
          // if (Array.isArray(gyroRfData)) {
          //   const rfDataSlice = gyroRfData.slice(0, 5);
          //   setRfMembers(rfDataSlice);
          // } else {
          //   console.error('gyroRfData is not an array:', gyroRfData);
          // }

          // if (Array.isArray(gyroLfData)) {
          //   const lfDataSlice = gyroLfData.slice(0, 5);
          //   setLfMembers(lfDataSlice);
          // } else {
          //   console.error('gyroLfData is not an array:', gyroLfData);
          // }

          console.log(res.data);

          const gyroRfData = res.data.gyroRfData;
          const gyroLfData = res.data.gyroLfData;
          setRfMembers(gyroRfData);
          setLfMembers(gyroLfData);
  
        })
        .catch((error) => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        });
    }, []);

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <ProjectTables />
      </Col> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Border
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Striped
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            왼발 데이터
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>시각</th>
                  <th>자이로 x</th>
                  <th>자이로 y</th>
                  <th>자이로 z</th>
                  <th>acc x</th>
                  <th>acc y</th>
                  <th>acc z</th>
                </tr>
              </thead>
              <tbody>
              {lf_members.map((member, index) => (
              <tr key={index}>
                <th scope="row" style={{ width: '200px' }}>{new Date(member.created_at).toLocaleString('en-US', { hour12: false })}</th>
                <td>{member.gyro_x}</td>
                <td>{member.gyro_y}</td>
                <td>{member.gyro_z}</td>
                <td>{member.acc_x}</td>
                <td>{member.acc_y}</td>
                <td>{member.acc_z}</td>
                </tr>))}
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            오른발 데이터
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
            <thead>
                <tr>
                  <th>시각</th>
                  <th>자이로 x</th>
                  <th>자이로 y</th>
                  <th>자이로 z</th>
                  <th>acc x</th>
                  <th>acc y</th>
                  <th>acc z</th>
                </tr>
              </thead>
              <tbody>
              {rf_members.map((member, index) => (
              <tr key={index}>
                <th scope="row" style={{ width: '200px' }}>{new Date(member.created_at).toLocaleString('en-US', { hour12: false })}</th>
                  <td>{member.gyro_x}</td>
                  <td>{member.gyro_y}</td>
                  <td>{member.gyro_z}</td>
                  <td>{member.acc_x}</td>
                  <td>{member.acc_y}</td>
                  <td>{member.acc_z}</td>
                </tr>))}
                <tr>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
