import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import Planet, {PlanetProps} from "./Planet";

test('render component', () => {
    const props: PlanetProps = {
        planet: {
            name: 'Earth',
            rotation: 365,
            distance: 150,
            radius: 6371,
        },
        onClick: () => {},
        accelerationFactor: 1,
    }
    render(<Planet planet={props.planet} onClick={props.onClick} accelerationFactor={props.accelerationFactor}/>);

    const planetEarth = screen.getByAltText("Planet: Earth");

    expect(planetEarth).toBeInTheDocument();
});

test("calculatePosition, calcul les coordonnées de la planète en pixel en fonction de sa distance par rapport au soleil et à son angle de rotation", async () => {
    const props: PlanetProps = {
        planet: {
            name: 'Earth',
            rotation: 365,
            distance: 150,
            radius: 6371,
        },
        onClick: () => {},
        accelerationFactor: 1,
    }
    render(<Planet planet={props.planet} onClick={props.onClick} accelerationFactor={props.accelerationFactor}/>);

    const planetEarth = screen.getByTestId('planet');

    const styleJustBeforeComponentLaunch = planetEarth.style.cssText;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const styleOneSecondAfterComponentLaunch = planetEarth.style.cssText;

    expect(styleJustBeforeComponentLaunch).not.toEqual(styleOneSecondAfterComponentLaunch);
    expect(styleJustBeforeComponentLaunch).not.toEqual(styleOneSecondAfterComponentLaunch);
})

test("calculateRotationAngle, permet de calculer en fonction d'une valeur qui change et de son temps de rotation", async () => {
    const props: PlanetProps = {
        planet: {
            name: 'Earth',
            rotation: 365,
            distance: 150,
            radius: 6371,
        },
        onClick: () => {},
        accelerationFactor: 1,
    }
    render(<Planet planet={props.planet} onClick={props.onClick} accelerationFactor={props.accelerationFactor} />);

    const planetEarth = screen.getByTestId("planet");

    expect(planetEarth).toHaveStyle({'animation-duration': '365s'});
})
