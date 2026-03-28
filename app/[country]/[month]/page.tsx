"use client";

import styled from "styled-components";
import { useParams } from "next/navigation";
import useSWR from "swr";
import SingleHoliday from "@/app/SingleHoliday/SingleHoliday";
import { Holiday } from "@/app/types/Holiday";

const Container = styled.main `
    width: 90vw;
    background-color: lavender;
    margin: auto;
`;

const HolidaysContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledH1 = styled.h1 `
    color: mediumpurple;
`

export default function DisplayHolidays() {

    const params = useParams();

    const {data, error} = useSWR(`/api/getHolidays?country=${params.country}&month=${params.month}`,
        (url) =>
            fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const holidays = data?.response?.holidays || [];

    return (
        <Container>
            <StyledH1>Holidays celebrated in {params.country} in the month {params.month}</StyledH1>
            <HolidaysContainer>
                {
                    holidays.map((holiday: Holiday, i: number) =>
                        (
                            <SingleHoliday
                                key={i}
                                name={holiday.name}
                                description={holiday.description}
                                date={holiday.date}
                                type={holiday.type}
                            />
                        )
                    )
                }
            </HolidaysContainer>
        </Container>
    );
}