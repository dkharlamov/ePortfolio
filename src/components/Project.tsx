import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://explorehc.com/curios/bumboat" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://explorehc.com/curios/bumboat" target="_blank" rel="noreferrer"><h2>Bumboat</h2></a>
                    <p>Designed, developed, and launched a 3D mobile game for iOS and Android in Unity using C#, Unity, Blender, and Typescript/Python for tooling. Integrations with Google AdMob, Google Firebase, Google Analytics, Google Firestore, Unity Ads.</p>
                </div>
                <div className="project">
                    <a href="https://explorehc.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://explorehc.com/" target="_blank" rel="noreferrer"><h2>The Hidden Chapter LLC</h2></a>
                    <p>Launched a company with a co-founder to develop fun and exciting experiences to players around the world.</p>
                </div>
                <div className="project">
                    <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                    <h2>OpenMV Autonomous Control Prototype</h2>
                    <p>Volunteered at an agricultural robotics company to develop a solution that utilized an OpenMV camera and machine vision algorithms to detect the amount of veering and then output the determined deflection in degrees, which can then be directly translated as a steering input for the vehicle. (Python) </p>
                </div>
                <div className="project">
                    <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    <h2>VRDrive: VR Driving Framework</h2>
                    <p>VR driving framework implemented for Unity for first-time game developers with limited experience for an exploritory GameJam. This framework can be used to develop first person driving experiences with tactile steering quickly without having to implement the complex overhead required to develop VR solutions. (C#)</p>
                </div>
                <div className="project">
                    <a href="https://studentgames.itch.io/aircycle" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://studentgames.itch.io/aircycle" target="_blank" rel="noreferrer"><h2>Aircycle</h2></a>
                    <p>Developed a mobile VR exercise game where the goal is to pedal on an exercise bike to power a plane flying though an environment. I developed a custom Bluetooth LE IMU controller to detect and translate leg movement into game inputs. Won 2nd place in "Best Programming" category at the CSUMB GameJam. (C#, C)</p>
                </div>
                <div className="project">
                    <a href="https://dl.acm.org/profile/99659076440" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://dl.acm.org/profile/99659076440" target="_blank" rel="noreferrer"><h2>TickTockRay</h2></a>
                    <p>Developed a novel 3D pointing solution for VR use-cases utilizing smart watch IMU sensor data being transfered by bluetooth to a GearVR game built in Unity. Published at two international computer science conferences (VRST'16 and SUI'16). (C#)</p>
                </div>
                <div className="project">
                    <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
                    <h2>ClamPark</h2>
                    <p>ClamParking is a self-sustained parking detector that can detect if a vehicle is parked on a parking spot. I was responsible for designing the electronics and outer casing of the ClamPark. (Python)</p>
                </div>
                <div className="project">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Lift Simulation Exploration</h2>
                    <p>Implemented airflow and lift simulations using cross-sectional slices of an airfoil of vairous thicknesses to aproximate lift in real-time using compute shaders. (C++, DirectX11)</p>
                </div>
                <div className="project">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Low-Cost Prosthetics Exploration</h2>
                    <p>Worked with a group of fellow researchers to develop a low-cost solution for arm prosthetics that could be 3D printed. I worked on developing sensors that would detect minute muscle movements in a patient’s arm that would control the servos inside the prosthesis. By using a simple op-amp array and Arduino data visualization and processing, I helped to develop an easily adjustable model for muscle movement detection using flex sensors. (C)</p>
                </div>
                <div className="project">
                    <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    <h2>DirectX11 Exploration</h2>
                    <p>Developed some exercises in DX11 to learn about computer graphics, rendering, and shaders.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;