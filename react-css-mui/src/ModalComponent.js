/*

모달이란
웹페이지에서 특정 작업을 수행하기 위해
표시되는 작은 창

*/
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import see from "./img/안들린다.jpg";

const ModalComponet = () => {
  // 모달의 상태를 관리해줄 useState 훅 사용
  const [showModal, setShowModal] = useState(false);

  // 모달을 열고 닫는 함수를 표현
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* 모달을 열기 위한 버튼을 생성해줄 예정
        variant : 부트스트랩에서 버튼 등 다양한 요소에 스타일 변형을 주기위해 지정해주는 속성
        종류 : primary secondary success danger warning info light dark
      */}
      <Button variant="primary" onClick={handleShow}>
        모달 열기
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>해달최고</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>ㅎㅇ? 해달 최고</p>
          <p>해달님이 요청하신 사항을 확인해주시길 바랍니다.</p>
          <img src={see}></img>
          <ul>
            <li>해달샤워</li>
            <li>NO해달스모킹</li>
            <li>해달구이</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="success" onClick={handleClose}>
            저장
          </Button>
          <Button variant="danger" onClick={handleClose}>
            홈페이지로이동
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalComponet;
