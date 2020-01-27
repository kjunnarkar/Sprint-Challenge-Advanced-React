import React from 'react';
import styled from 'styled-components';

// styled-components
const Card = styled.div `
  border: solid black 2px;
  margin: 2% 30% 2% 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;
const Names = styled.h2 `
  color: yellow;
  font-weight: bold;
`;

const ListHeader = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;
// end styled-components

const Display = ({ player }) => {
    return (
        <Card>
            <ListHeader>
                <Names>Name: {player.name}</Names>
                <ListItems>Country: {player.country}</ListItems>
                <ListItems>Searches: {player.searches}</ListItems>
            </ListHeader>
        </Card>
    )
}
export default Display;
