import React from "react";

function TodoItem(props) {
  // const [isclicked, setIsclicked] = useState(false);

  // function handleClick(){
  //   setIsclicked( prevValue => {
  //      return !prevValue;
  //   });
  // }

  return (
    <div
      onClick={function () {
        return props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}
export default TodoItem;
