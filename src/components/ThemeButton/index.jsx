const ThemeButton = props => {
  console.log('props :>> ', props);
  const { islight, changeTheme } = props;
  const inlineStyle = {
    color: islight ? 'white' : 'black',
    backgroundColor: islight ? 'black' : 'white',
  };
  return (
    <button style={inlineStyle} onClick={changeTheme}>
      {props.children} {islight ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeButton;
