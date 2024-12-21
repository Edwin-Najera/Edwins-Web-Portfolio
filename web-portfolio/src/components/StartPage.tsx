import "./StartPage.css";

interface Props {
  image: string;
}
const StartPage = ({ image }: Props) => {
  return (
    <div className="sameLine" id="startPage">
      <img src={image} className="image" alt="Profile-Image" />
      <div className="text-left">Edwin Leonardo</div>
      <div className="text-left-bottom">Coder/Designer</div>
      <div className="text-right"> Najera Gonzalez</div>
      <div className="text-right-bottom">CS Undergraduate</div>
    </div>
  );
};

export default StartPage;
