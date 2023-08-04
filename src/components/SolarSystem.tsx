import Planet from "./Planet";
import './SolarSystem.css';
import {useEffect, useState} from "react";

const realInitialsPlanetData = [
    {
        name: "Mercury",
        rotation: 88,
        distance: 58,
        radius: 2439,
    },
    {
        name: "Venus",
        rotation: 243,
        distance: 108,
        radius: 6051,
    },
    {
        name: "Earth",
        rotation: 365,
        distance: 150,
        axialTilt: 23,
        radius: 6371,
    },
    {
        name: "Mars",
        rotation: 687,
        distance: 228,
        radius: 3389,
    },
    {
        name: "Jupiter",
        rotation: 4329,
        distance: 778,
        radius: 69911,
    },
    {
        name: "Saturn",
        rotation: 10751,
        distance: 1433,
        radius: 58232,
    },
    {
        name: "Uranus",
        rotation: 30664,
        distance: 2872,
        radius: 25362,
    },
    {
        name: "Neptune",
        rotation: 60148,
        distance: 4495,
        radius: 24622,
    }
]

export default function SolarSystem() {
    const [planetsData, setPlanetsData] = useState(realInitialsPlanetData);
    const [accelerationFactor, setAccelerationFactor] = useState(1);

    useEffect(() => {
        const reducedPlanetsData = realInitialsPlanetData.map((planet) => {
            const proportionFactor = 0.5;
            return {
                ...planet,
                distance: planet.distance * proportionFactor,
                radius: planet.radius * proportionFactor,
            };
        });

        setPlanetsData(reducedPlanetsData)
    }, []);

    const reduceDistance = () => {
        const reductionFactor = 0.5;

        const reducedPlanetsData = planetsData.map((planet) => {
            const reduction = planet.distance * reductionFactor;

            return {
                ...planet,
                distance: planet.distance - reduction,
            };
        });

        setPlanetsData(reducedPlanetsData);
    };

    const resetPlanetData = () => {
        setPlanetsData(realInitialsPlanetData);
    }

    const accelerateRotation = () => {
        setAccelerationFactor(accelerationFactor * 2)
    }

    const showPlanetInfo = (planet: { name: string; rotation: number; distance: number }) => {
        alert(`Name: ${planet.name}\nRotation Period: ${planet.rotation} days\nDistance from the Sun: ${planet.distance} AU`);
    };

    const SUN_RADIUS = 696340;

    return (
        <>
            <div className="buttons-field">
                <button onClick={reduceDistance}>Réduire les distances</button>
                <button onClick={resetPlanetData}>Reset les distance</button>
                <button onClick={accelerateRotation}>Accélérer la rotation</button>
            </div>
            <div className="solar-system">
                <div className="sun">
                    <img src={'./icons/Sun.png'} alt={"The sun"} width={SUN_RADIUS / 8000} height={SUN_RADIUS / 8000}/>
                </div>
                {planetsData.map((planet, index) => (
                    <Planet key={index} planet={planet} onClick={showPlanetInfo}
                            accelerationFactor={accelerationFactor}/>
                ))}
            </div>
        </>

    );
}
