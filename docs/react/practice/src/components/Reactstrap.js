import React, { useEffect, useState } from 'react';
import {
  Alert,
  UncontrolledAlert,
  Badge,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade,
  Progress,
} from 'reactstrap';

const Reactstrap = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onProgress();
    console.log('최초');
  }, []);

  const onProgress = () => {
    setTimeout(() => {
      setProgress((prev) => {
        if (prev + 1 !== 100) onProgress();
        return prev + 1;
      });
    }, 100);
  };

  const toggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleFade = (e) => setFade(!fade);

  return (
    <div id="top">
      <Progress color="info" value={progress}>
        {progress}%
      </Progress>
      <Button onClick={toggleFade}>Fade In/Out</Button>
      <Fade in={fade} tag="h1">
        Fade In Out
      </Fade>
      <br />
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href="https://www.naver.com">
            <DropdownItem>웹 사이트 이동</DropdownItem>
          </a>
          <DropdownItem onClick={() => alert('zz')}>Alert 버튼</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <Alert color="light">Simple Alert [color: light]</Alert>
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color: warning]
      </UncontrolledAlert>
      <h1>
        Product Name <Badge color="secondary">hit</Badge>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="https://www.naver.com/" color="light">
          Go Link
        </Badge>
      </h1>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#top">
          Go Top
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#bottom">
          Go Bottom
        </BreadcrumbItem>
      </Breadcrumb>
      <div id="bottom" style={{ marginTop: '1000px' }}>
        Bottom!
      </div>
    </div>
  );
};

export default Reactstrap;
