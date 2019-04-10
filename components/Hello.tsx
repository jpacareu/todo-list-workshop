import React from "react";
interface IProps {
  name: string;
}

export default function Hello(props: IProps) {
  return <div>Hello {props.name}</div>;
}
