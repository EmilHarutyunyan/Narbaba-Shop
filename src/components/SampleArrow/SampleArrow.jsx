export function SampleNextArrow(props) {

  const { nameClass, style, onClick, img } = props;
  
  return (
    <div className={nameClass} style={{ ...style }} onClick={onClick}>
      {img && <img src={img} alt={"prev"} />}
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { nameClass, style, onClick, img } = props;
  return (
    <div className={nameClass} style={{ ...style }} onClick={onClick}>
      {img && <img src={img} alt={"prev"} />}
    </div>
  );
}