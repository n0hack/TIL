import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h4>Location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        row="7"
        readonly={true}
      ></textarea>
      <h4>match</h4>
      <textarea value={JSON.stringify(params, null, 2)} rows="7"></textarea>
    </div>
  );
};

export default WithRouterSample;
