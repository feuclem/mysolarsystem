import './Planet.css';
import {useEffect, useState} from "react";

export default function Planet(props: PlanetProps) {
    const {planet, onClick} = props;

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const rotationTime = planet.rotation * 1000;

        const updateRotation = () => {
            const now = Date.now();
            const elapsed = now % rotationTime;
            const newAngle = (360 * elapsed) / rotationTime;
            setAngle(newAngle);
            requestAnimationFrame(updateRotation);
        };

        requestAnimationFrame(updateRotation);
    }, [planet.rotation]);

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
            <img src={`./icons/${planet.name}.png`} alt={"Planet"}/>
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
    };
    onClick: (planet: { name: string; rotation: number; distance: number }) => void;
}