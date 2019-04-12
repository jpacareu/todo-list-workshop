import React from "react";
import "./App.css";
import Hello from "./components/Hello";

class App extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return <Hello name={"Jhon Doe"}/>;
    }
}

export default App
