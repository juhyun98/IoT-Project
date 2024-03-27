### 걸음망 프로젝트
---


## 개요
걸음 각속도를 이용한 걸음걸이 자세교정 서비스로 웹으로 그래프와 구현하였습니다.

###### 기간: 2024.2.14 ~ 2024.03.01 (약 2주)

###### 주요 기능 및 특징:
1. 자이로+가속도계, 압력센서를 통해 자세교정을 도와주는 서비스입니다.
2. 사용자가 센서가 장착된 신발을 신으면 실시간으로 블루투스, I2C통신을 통해 센서값을 노드에 전달받아 AXIOS와 소켓통신을 통해 React에서 보여줍니다.
3. MPU6050센서를 통해 Z축 각도를 구해 사용자의 자세를 측정해줍니다.
4. 추후 압력센서를 통해 압력값의 평균에 따라 자세를 분별할 수 있는 기능을 추가할 예정입니다.

###### PPT 및 발표자료:

* ppt: <https://www.miricanvas.com/v/12xqhut>
* 시연영상: <https://youtu.be/IHZ-k-eXL4A>
* ER-다이어그램: <https://velog.io/@rei/IoT%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-ERD>

<br>

## 사용 기술 및 라이브러리

- React, NodeJS, Arduino
- MPU6050 TOKEN, JS, HTML, CSS, AXIOS, Bluetooth, Socket.io

<br>

## Socket.io
<https://socket.io/>

<img width="868" alt="image" src="https://github.com/juhyun98/IoT-Project/assets/140494238/e4c17c01-3cf4-4791-ba8a-64956df8cd0b">


## 개발내용
- DB 구축 및 테이블 설정
- MySQL을 사용하여 총 6개의 테이블을 구성
- Express를 활용하여 웹 서버를 설정하고, MySQL과 연동
- YouTube 동영상 플레이어
- React와 react-youtube를 사용하여 YouTube 동영상 플레이어 컴포넌트 생성
- Socket.io 및 블루투스를 통한 데이터 수신
- Web Speech API를 사용하여 음성으로 읽어줌
- 데이터 파싱 및 표와 그림으로 데이터 시각화
- AXIOS를 활용한 비동기통신 DB 연동기능 구현
- Component를 활용한 동적 홈페이지 구현
- HTML, CSS, JavaScript를 활용한 페이지 구현

## 개선사항(느낀점)
#### 압력센서를 더 활용하자
압력센서가 값이 한 발에 16개의 값을 받고 양발이라 총 32개의 값을 받아오는데 이 값을 다양하게 활용하지 못한것 같다.
시간이 좀 더 주어졌다면 이 값들을 이용하여 양발의 구역별 압력차를 계산하고 각 발의 압력분포를 확인하여 몸의 불균형과 걸음문제와 발의 질환여부도 확인 할 수 있게 하고 싶다.

#### Node와 React 공부
 처음해보는 사물지능 IoT였지만 기능적으로 나쁘지 않게 구현한거 같다. 주어진 시간이 적어 각자 맡은 역할에 바쁘다보니 합치고 수정해야할때 코드가 클린하지 못했다. 팀원들과 주기적으로 수정 보완을 수행해야 이후에 어려움과 문제점이 덜 발생한다는것을 다시 깨닫게 되었다. 어려움을 겪었던 부분은 자이로스코프센서의 z축 기울기 변화를 계산하는 로직을 구현하는것과 React Component에서 DB값을 불러오는 부분에 오류가 발생했었다. axios로 DB와 연동 후 Router로 불러오는과정에서 Component에 uesEffect와 axios에서 오류가 생겼었다. 찾아보니 route를 잘못했었던 것이었다. 처음 테이블을 설계했을때 테이블들끼리 foreign key를 줬었는데 이걸 router에서 테이블끼리 join을 하지 않아서 불러오지 못한것이었다. 아두이노와 센서들이 낯설었고 예시도 거의 없는 주제와 아이디어라서 코드와 배선에 어려움이 있었지만 다행히 함께 노력한 결과 매우 성공적으로 작동이 되었다. Spring만 사용하다 Node, React도 써보니 새로운것을 배우면서 재미있었다. 나중에 기회가 된다면 Spring과 React를 사용해서 프로젝트를 해보고 싶다는 생각이 들었다. 
     
 