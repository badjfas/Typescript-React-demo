import React from "react";
import styled from "styled-components";

const Inputs = styled.input``;
const Forms = styled.form``;

interface IinputProps {
    value: string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
interface IformProps {
    onFormSubmit: (event: React.FormEvent) => void;
}
export const Input: React.FunctionComponent<IinputProps> = ({ value, onChange }) => {
    return <Inputs value={value} onChange={onChange} />;
};

export const Form: React.FunctionComponent<IformProps> = ({ children, onFormSubmit }) => {
    return <Forms onSubmit={onFormSubmit}>{children}</Forms>;
};
