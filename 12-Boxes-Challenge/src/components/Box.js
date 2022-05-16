import React from "react";

function Box(props) {
  const styles = {
    class: props.on ? "box on" : "box",
  };

  return (
    <div
      id={props.id}
      className={styles.class}
      onClick={props.handleClick}
    ></div>
  );
}

export default Box;
