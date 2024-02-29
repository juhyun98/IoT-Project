import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from "../axios";

const WalkingChart = () => {

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

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#ff0000", "#004bfb", "#fbee00", "#15fb00", "#fb00e2"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };

  const selectedIndices = Array.from({ length: 20 }, (_, i) => i * 10 + 1);

// gyro 및 acc 값들을 추출
const lfGyroValues = lf_members.filter((_, index) => selectedIndices.includes(index + 1)).map((member) => ({
  gyro_x: member.gyro_x,
  gyro_y: member.gyro_y,
  gyro_z: member.gyro_z,
  acc_x: member.acc_x,
  acc_y: member.acc_y,
  // acc_z: member.acc_z,
}));

// series를 생성
const series = lfGyroValues.length > 0
  ? Object.keys(lfGyroValues[0]).map((key) => ({
      name: key,
      data: lfGyroValues.map((value) => value[key]),
    }))
  : [];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Walking Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          <Row>
            <Col md="4">
              <h6>Total Sales</h6>
              <h4 className="mb-0 fw-bold">144</h4>
            </Col>
            <Col md="4">
              <h6>This Month</h6>
              <h4 className="mb-0 fw-bold">133</h4>
            </Col>
            <Col md="4">
              <h6>This Week</h6>
              <h4 className="mb-0 fw-bold">123</h4>
            </Col>
          </Row>
        </div>
        <Chart options={options} series={series} type="area" height="279" />
      </CardBody>
    </Card>
  );
};

export default WalkingChart;
