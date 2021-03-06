import React from "react";
import styled from "styled-components";

interface IProps {
    count: number;
}
const Wrapper = styled.div<{ isBlue: boolean }>`
    color: ${props => (props.isBlue ? props.theme.blueColor : "black")};
`;
const Number: React.FunctionComponent<IProps> = ({ count }) => {
    return <Wrapper isBlue={count > 10}>{count}</Wrapper>;
};

export default Number;
