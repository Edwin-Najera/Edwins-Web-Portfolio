import ".//MyButton.css";

const handleClick = () => console.log("Clicked");

const MyButton = () => {
  return <button onClick={handleClick}>I am a button</button>;
};

export default MyButton;
