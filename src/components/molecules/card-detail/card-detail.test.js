import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CardMolecule from './index';

const character = {
    id: 1,
    name: 'character test',
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {
        name: 'Earth'
    },
    status: 'Alive',
    origin: {
        name: 'Earth'
    },
    gender: 'Male',
    species: 'Human',
    type: "type"
}

test('content render', () => {
    const view = render(<CardMolecule character={character} />);
    expect(view).toBeDefined();
});

test('content render correctly', () => {
    const view = render(<CardMolecule character={character} />);
    expect(view.container).toHaveTextContent(character.name);
});