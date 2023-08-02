import './Planet.css';
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import pointerLeave = Simulate.pointerLeave;

export default function Planet(props: PlanetProps) {
    const {planet, onClick} = props;

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const rotationTime = planet.rotation * 1000;

        const updateRotation = () => {
            const now = Date.now();
            const rotationAngle = (360 * ((now % rotationTime) / rotationTime)) % 360;
            const tiltAngle = (360 * ((now % (rotationTime * (360 / planet.axialTilt))) / (rotationTime * (360 / planet.axialTilt)))) % 360;
            const newAngle = (rotationAngle + tiltAngle) % 360;
            setAngle(newAngle);
            requestAnimationFrame(updateRotation);
        };

        requestAnimationFrame(updateRotation);
    }, [planet.axialTilt, planet.rotation]);

    const planetPosition = calculatePosition(planet.distance, angle);
    const planetStyles = {
        left: `${planetPosition.x}px`,
        top: `${planetPosition.y}px`,
        animationDuration: `${planet.rotation}s`,
        transform: `rotate(${angle}deg)`
    };

    return (
        <div
            className={`planet ${planet.name}`}
            style={planetStyles}
            onClick={() => onClick(planet)}
        >
            <img src={`./icons/${planet.name}.png`} alt={"Planet"} width={planet.radius / 1000} height={planet.radius / 1000}/>
        </div>
    );
}

function calculatePosition(distance: number, angle: number) {
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x, y };
}

export interface PlanetProps {
    planet: {
        name: string;
        rotation: number;
        distance: number;
        axialTilt: number;
        radius: number;
    };
    onClick: (planet: { name: string; rotation: number; distance: number }) => void;
}