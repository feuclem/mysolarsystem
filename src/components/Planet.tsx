import './Planet.css';
import {useEffect, useState} from "react";

export default function Planet(props: PlanetProps) {
    const {planet, onClick} = props;

    const [rotationAngle, setRotationAngle] = useState(0);

    useEffect(() => {
        const updateRotation = () => {
            const newRotationAngle = calculateRotationAngle(Date.now(), planet.rotation)
            setRotationAngle(newRotationAngle);
            requestAnimationFrame(updateRotation);
        };

        requestAnimationFrame(updateRotation);
    }, [planet.rotation]);

    const planetPosition = calculatePosition(planet.distance, rotationAngle);

    const planetStyles = {
        left: `${planetPosition.x}px`,
        top: `${planetPosition.y}px`,
        animationDuration: `${planet.rotation}s`,
        transform: `rotate(${rotationAngle}deg)`
    };

    return (
        <div
            className={`planet ${planet.name}`}
            style={planetStyles}
            onClick={() => onClick(planet)}
            data-testid="planet"
        >
            <img src={`./icons/${planet.name}.png`} alt={`Planet: ${planet.name}`} width={planet.radius / 1000} height={planet.radius / 1000}/>
        </div>
    );
}

function calculatePosition(distance: number, angle: number) {
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x, y };
}

function calculateRotationAngle(now: number, rotation: number) {
    const rotationTime = rotation * 1000;
    const timeSinceLastRotation = now % rotationTime;
    return (360 * timeSinceLastRotation) / rotationTime;
}

export interface PlanetProps {
    planet: {
        name: string;
        rotation: number;
        distance: number;
        radius: number;
    };
    onClick: (planet: { name: string; rotation: number; distance: number }) => void;
}