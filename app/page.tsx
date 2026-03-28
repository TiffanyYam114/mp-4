"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledHeader = styled.header `
    color: mediumpurple;
    font-weight: bold;
    font-size: calc(4px + 2vw);
    display: inline;
    width: 90vw;
`

const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lavenderblush;
    margin: 0 auto;
    box-sizing: border-box;
`;

const StyledH1 = styled.h1 `
    color: mediumpurple;
`

const StyledH4 = styled.h4 `
    color: hotpink;
    font-size: calc(4px + 1vw);
`

export default function Home() {

  const [country, setCountry] = useState("");
  const [month, setMonth] = useState("");

  return (
      <>
          <StyledHeader>Holiday Finder</StyledHeader>
          <StyledDiv>
              <StyledH1>Find all the holidays celebrated in any country for any month!</StyledH1>
              <StyledH4>Enter the two letter abbreviation for your country, e.g. US for United States, CN for China</StyledH4>
              <input type="text" value={country}
                   placeholder="Enter a country"
                   onChange={(e) => setCountry(e.target.value)}/>
              <StyledH4>Enter a number corresponding to a month, e.g. 1 for January, 2 for February</StyledH4>
              <input type="text" value={month}
                     placeholder="Enter a number"
                     onChange={(e) => setMonth(e.target.value)}/>
              <StyledH4><Link href={`/${country}/${month}`}>Get Holidays</Link></StyledH4>
          </StyledDiv>
      </>
  );
}
