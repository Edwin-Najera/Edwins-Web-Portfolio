import "./ProjectCards.css";

interface Props {
  image1: string;
  image2: string;
  image3: string;
}

const ProjectCards = ({ image1, image2, image3 }: Props) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="container-line">
      <div className="card btn" onClick={handleClick}>
        <img className="card-img" src={image1} />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-description">Description</p>
        </div>
      </div>
      <div className="card btn" onClick={handleClick}>
        <img className="card-img" src={image2} />
        <a className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-description">Description</p>
        </a>
      </div>
      <div className="card btn" onClick={handleClick}>
        <img className="card-img" src={image3} />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-description">Description</p>
        </div>
      </div>
      <div className="container-stack">
        <div className="card-small btn" onClick={handleClick}>
          <div className="card-body-small">
            <h4 className="card-title-small">C++ Mini Projects</h4>
            <p className="card-description-small">Description</p>
          </div>
        </div>
        <div className="card-small btn" onClick={handleClick}>
          <div className="card-body-small">
            <h4 className="card-title-small">Java Mini Projects</h4>
            <p className="card-description-small">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
