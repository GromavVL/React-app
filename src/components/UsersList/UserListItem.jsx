function UserListItem(props) {
  const {
    selectUser,
    islight,
    user: { id, isSelected, firstName, lastName },
  } = props;
  const inlineStyle = {
    backgroundColor: isSelected
      ? islight
        ? "yellow"
        : "violet"
      : "transparent",
  };
  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      {firstName} {lastName}
    </li>
  );
}

export default UserListItem;
