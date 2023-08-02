import Planet from "./Planet";
import './SolarSystem.css';

export default function SolarSystem() {
    const showPlanetInfo = (planet: { name: string; rotation: number; distance: number }) => {
        alert(`Name: ${planet.name}\nRotation Period: ${planet.rotation} days\nDistance from the Sun: ${planet.distance} AU`);
    };

    const planetsData = [
        {
            name: "Mercury",
            rotation: 88,
            distance: 58
        },
        {
            name: "Venus",
            rotation: 243,
            distance: 108
        },
        {
            name: "Earth",
            rotation: 365,
            distance: 150
        },
        {
            name: "Mars",
            rotation: 687,
            distance: 228
        },
        {
            name: "Jupiter",
            rotation: 4329,
            distance: 778
        },
        {
            name: "Saturn",
            rotation: 10751,
            distance: 1433
        },
        {
            name: "Uranus",
            rotation: 30664,
            distance: 2872
        },
        {
            name: "Neptune",
            rotation: 60148,
            distance: 4495
        }
    ];

    return (
        <div className="solar-system">
            <div className="sun">
                <img src={'./icons/Sun.png'}  alt={"The sun"}/>
            </div>
            {planetsData.map((planet, index) => (
                <Planet key={index} planet={planet} onClick={showPlanetInfo} />
            ))}
        </div>
    );
}
