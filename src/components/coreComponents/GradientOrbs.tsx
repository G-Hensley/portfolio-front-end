import './GradientOrbs.css';

export default function GradientOrbs() {
    return (
        <div className="absolute w-full h-full">
            {[...Array(15)].map((_, i) => {
                const randomX = Math.floor(Math.random() * 100);
                const randomY = Math.floor(Math.random() * 100);
                const randomSize = Math.floor(Math.random() * 100) + 2;
                const randomDuration = Math.floor(Math.random() * 15) + 15;

                // Multiple random positions for more varied movement
                const getRandomOffset = () => `${(Math.random() - 0.5) * 250}px`;
                const getRandomRotation = () => `${Math.random() * 360}deg`;

                return (
                    <div
                        key={i}
                        className={`absolute rounded-full gradient-orb floating`}
                        style={{
                            width: `${randomSize}px`,
                            height: `${randomSize}px`,
                            left: `${randomX}%`,
                            top: `${randomY}%`,
                            '--duration': `${randomDuration}s`,
                            '--random-x1': getRandomOffset(),
                            '--random-y1': getRandomOffset(),
                            '--random-x2': getRandomOffset(),
                            '--random-y2': getRandomOffset(),
                            '--random-x3': getRandomOffset(),
                            '--random-y3': getRandomOffset(),
                            '--random-rotate1': getRandomRotation(),
                            '--random-rotate2': getRandomRotation(),
                            '--random-rotate3': getRandomRotation(),
                        } as React.CSSProperties}
                    />
                );
            })}
        </div>
    );
}