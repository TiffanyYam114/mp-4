import styled from "styled-components";
import { Holiday } from "@/app/types/Holiday";

const HolidayDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
    margin: 5%;
    padding: 3%;
    border: 3px solid mediumpurple;
    background-color: lavenderblush;
`

const StyledH3 = styled.h3 `
    color: mediumpurple;
    font-size: calc(5px + 1.5vw);
`

const StyledP = styled.p `
    color: deeppink;
    font-size: calc(4px + 1vw);
`

export default function SingleHoliday(props:Holiday) {
    return (
        <HolidayDiv>
            <StyledH3>{props.name}</StyledH3>
            <StyledP>{props.date.iso}</StyledP>
            <StyledP>{props.description}</StyledP>
            <StyledP>{props.type}</StyledP>
        </HolidayDiv>
    );
}