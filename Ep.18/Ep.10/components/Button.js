const Button = ({ title, cName, imgUrl , onClickFuntion }) => {
  return (
    <button title={title} className={cName} onClick={onClickFuntion} >
      <img src={imgUrl} alt="" />
    </button>
  );
};

export default Button;
