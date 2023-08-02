import Planet from "./Planet";
import './SolarSystem.css';

export default function SolarSystem() {
    const showPlanetInfo = (planet: { name: string; rotation: number; distance: number }) => {
        alert(`Name: ${planet.name}\nRotation Period: ${planet.rotation} days\nDistance from the Sun: ${planet.distance} AU`);
    };

    const sunRadius = 696340;

    const planetsData = [
        {
            name: "Mercury",
            rotation: 88,
            distance: 58,
            axialTilt: 1,
            radius: 2439,
        },
        {
            name: "Venus",
            rotation: 243,
            distance: 108,
            axialTilt: 3,
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
            axialTilt: 25,
            radius: 3389,
        },
        {
            name: "Jupiter",
            rotation: 4329,
            distance: 778,
            axialTilt: 3,
            radius: 69911,
        },
        {
            name: "Saturn",
            rotation: 10751,
            distance: 1433,
            axialTilt: 27,
            radius: 58232,
        },
        {
            name: "Uranus",
            rotation: 30664,
            distance: 2872,
            axialTilt: 98,
            radius: 25362,
        },
        {
            name: "Neptune",
            rotation: 60148,
            distance: 4495,
            axialTilt: 30,
            radius: 24622,
        }
    ];

    return (
        <div className="solar-system">
            <div className="sun">
                <img src={'./icons/Sun.png'} alt={"The sun"} width={sunRadius / 8000} height={sunRadius / 8000}/>
            </div>
            {planetsData.map((planet, index) => (
                <Planet key={index} planet={planet} onClick={showPlanetInfo}/>
            ))}
        </div>
    );
}
