import * as React from "react";
import styled from "styled-components";
import { Form, Input } from "./input";
import Number from "./Number";

const Container = styled.div``;

const App = () => {
    const [count, setCount] = React.useState(0);

    const [value, setValue] = React.useState("");

    const add = (): void => {
        setCount(count + 1);
    };
    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <div className="App">
            <Form onFormSubmit={onFormSubmit}>
                <Input value={value} onChange={onChange} />
            </Form>
            <Number count={count} />
            <button onClick={add}></button>
        </div>
    );
};

export default App;
