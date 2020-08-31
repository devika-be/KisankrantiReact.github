import { useState } from "react";

export const useInput = (intialValue) => {
  const [value, setValue] = useState(intialValue);
  console.log(value);
  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};
