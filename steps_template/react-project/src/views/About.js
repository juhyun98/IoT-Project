import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import PostureCorrectionVideo from "../components/PostureCorrectionVideo";

const About = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            {user?
              (<h5>{user.name}님 환영합니다:)</h5>):
              (<h5>환영합니다!</h5>)}

          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h4 className="mt-4">걸음 각속도 기반 자세교정 시스템</h4>
                <br/>
                <h6 className=" mb-4">
                이 서비스는 가속도계와 자이로스코프 센서를 통합하여 사용자의 자세를 실시간으로 감지하고,
                압력센서를 활용하여 힘의 균형을 측정함으로써 개인 맞춤형 자세 교정을 제공하는 헬스케어 서비스입니다.
                </h6>
                <br/>
                <PostureCorrectionVideo />
                <br />

              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
