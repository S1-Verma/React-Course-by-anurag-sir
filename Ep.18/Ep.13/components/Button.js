const Button = ({ title,  imgUrl , onClickFuntion }) => {
  return (
  <button title={title} className="button" onClick={onClickFuntion} > 
  {/* ab yaha par humne class par button dekar css apply kar di he to ab koi bi kahi bi button css use karega to use css mil jayga  */}
      <img src={imgUrl} alt="" />
    </button>
  );
};

export default Button;
