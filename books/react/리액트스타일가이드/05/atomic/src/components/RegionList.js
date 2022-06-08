import React from "react";

function RegionList(props) {
  const regionDetails = props.regions.map(({ name, code }) => (
    <li key={code}>{name}</li>
  ));
  console.log(props);
  return <ul>{regionDetails}</ul>;
}

export default RegionList;
