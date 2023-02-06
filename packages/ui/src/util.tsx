
import React, { InputHTMLAttributes } from "react";

export function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef<T>(value);

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextField(props: Props) {
  return (
    <div>
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
}

