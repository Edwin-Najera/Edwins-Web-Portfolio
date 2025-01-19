import { Fragment } from "react";
import "./StartPage.css";

interface Props {
  image: string;
}
const StartPage = ({ image }: Props) => {
  return (
    <Fragment>
      <div className="container">
        <div>
          <h1 className="text-left">Edwin </h1>
          <div className="text-left-bottom">
            Leonardo
            <br />
            Coder/Designer
          </div>
        </div>
        <img src={image} className="image" alt="Profile-Image" />
        <div>
          <h1 className="text-right"> Najera</h1>
          <div className="text-right-bottom">
            Gonzalez <br />
            CS Undergraduate
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StartPage;
