const Section = (props) => {
  return (
    <>
      <div className="category-title">{props.title}</div>
      <div className="category-images">
        {props.images.map((image, index) => {
          return <img key={index} src={image} alt=""></img>;
        })}
      </div>
    </>
  );
};

export default Section;
