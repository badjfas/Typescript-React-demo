import React from "react";
import styled from "styled-components";

interface IProps {
    count: number;
}
const Wrapper = styled.div``;
const Number: React.FunctionComponent<IProps> = ({ count }) => {
    return <Wrapper>{count}</Wrapper>;
};

export default Number;
