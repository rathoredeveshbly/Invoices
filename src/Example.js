import React, { useToggle } from "react";
const Example = () => {
    const [isOn, toggleIsOn] = useToggle();
    return (
      <>
        {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
        <button onClick={toggleIsOn}>
          Press me
        </button>
      </>
    )
  }
  export default Example;