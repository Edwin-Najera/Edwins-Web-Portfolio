const handleClick = () => console.log("Clicked");

const MyButton = () => {
  return (
    <button type="button" className="btn btn-success" onClick={handleClick}>
      I am a button
    </button>
  );
};

export default MyButton;
