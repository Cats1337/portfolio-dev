import React, { useEffect, useRef } from 'react';
import '../App/index.css'; // Import your CSS file

const CatEyes = ({ className }) => {
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
    const timeoutRef = useRef(null); // Use a ref for timeout to avoid re-declaring

    useEffect(() => {
        const handleMouseMove = (e) => {
            const eyes = [leftEyeRef.current, rightEyeRef.current];

            eyes.forEach((eye) => {
                const boundingBox = eye.getBoundingClientRect();

                const eyeCenterX = boundingBox.left + boundingBox.width / 2;
                const eyeCenterY = boundingBox.top + boundingBox.height / 2;

                const dx = e.clientX - eyeCenterX;
                const dy = e.clientY - eyeCenterY;
                const angle = Math.atan2(dy, dx);
                const eyeRadius = Math.min(boundingBox.width / 2, boundingBox.height / 4);
                const distance = Math.min(Math.sqrt(dx * dx + dy * dy), eyeRadius);

                const pupilX = Math.cos(angle) * distance;
                const pupilY = Math.sin(angle) * distance + boundingBox.height / 4;

                // Set transform differently for small and large eyes
                const isSmallEye = boundingBox.width < 50;
                const baseTransform = isSmallEye ? `translate(0%, 0%)` : `translate(-50%, -50%)`;

                const pupils = eye.querySelectorAll(".eye-pupil");
                pupils.forEach((pupil) => {
                    pupil.style.transform = `${baseTransform} translate(${pupilX}px, ${pupilY}px)`;
                });

                // Adjust the right eye pupil position if needed
                if (eye === rightEyeRef.current) {
                    const eyeSide = boundingBox.width * -0.20;
                    const mirroredPupilX = pupilX - eyeSide;
                    const rightPupil = eye.querySelector(".eye-pupil");
                    rightPupil.style.transform = `${baseTransform} translate(${mirroredPupilX}px, ${pupilY}px)`;
                }
            });

            // Reset pupils after 10 seconds
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                eyes.forEach((eye) => {
                    const pupils = eye.querySelectorAll(".eye-pupil");
                    pupils.forEach((pupil) => {
                        pupil.style.transform = "translate(0%, 0%) translate(0, 0)";
                    });
                });
            }, 10000); // 10 seconds
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div className={`catHolder ${className}`}>
            <div className="cat">
                <div className="face">
                    <div ref={leftEyeRef} className="eye eye--left">
                        <div className="eye-pupil pupil-left"></div>
                    </div>
                    <div ref={rightEyeRef} className="eye eye--right">
                        <div className="eye-pupil pupil-right"></div>
                    </div>
                    <div className="nose"></div>
                </div>
            </div>
        </div>
    );
};

export default CatEyes;
