
const AppleBascket = ({basketName, applesCount }) => {
  return (
    <div>
      <h2>{basketName}</h2>
      <b>{applesCount} apples </b>
      <h4>{applesCount === 10 && 'basket Full'} {applesCount===0 && 'basket Empty'} </h4>
    </div>
  );
};

export default AppleBascket;
