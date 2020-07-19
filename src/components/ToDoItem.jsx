import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;


//For Check / Uncheck

// function Todoitem(props) {
//   const [isTrue, setIsTrue] = useState(true);
//   function handleClick() {
//     setIsTrue(() => {
//       return !isTrue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isTrue ? "line-through" : null }}>
//         {props.item}
//       </li>
//     </div>
//   );
// }
