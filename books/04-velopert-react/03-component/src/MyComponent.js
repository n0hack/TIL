import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};

MyComponent.defaultProps = {
  name: 'ㅎㅇ',
  age: 18,
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default MyComponent;
