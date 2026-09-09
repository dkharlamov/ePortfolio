import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import {
    faCloud,
    faGamepad,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const fullStackLabels = [
    "TypeScript",
    "Python",
    "C++",
    "Go",
    "GCP",
    "AWS",
    "Terraform",
    "Containerization",
    "Micro-services",
    "Docker/Podman",
    "SQLite",
    "PostgreSQL",
    "REST APIs",
    "CI/CD",
    "Splunk",
    "Argo",
    "Kubernetes",
    "Linux",
    "Git",
];

const genAILabels = [
    "Python",
    "Splunk",
    "Argo",
    "Kubernetes",
    "Jenkins",
    "BigQuery",
    "Looker",
    "PagerDuty",
    "Containerization",
];

const gameDevLabels = [
    "C#",
    "C++",
    "Python",
    "TypeScript",
    "Unity",
    "Blender",
    "Google AdMob",
    "Google Firebase",
    "Android",
    "iOS",
    "Mobile Optimization",
    "Substance Painter",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faCloud} size="3x" />
                        <h3>Full Stack & Cloud Engineering</h3>
                        <p>
                            Over 10 years building production systems across backend, cloud
                            infrastructure, and healthcare-grade integrations. I've worked on
                            EHR integrations, robotic surgical systems, and scalable backend
                            services, with a focus on reliability and clean system design from
                            API to deployment.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills & Tools:</span>
                            {fullStackLabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>GenAI Infrastructure</h3>
                        <p>
                            I build serving infrastructure for large language models in
                            production, most recently at Intuit/Mailchimp, where I worked on
                            GenAI infrastructure supporting real-world generative AI features.
                            I focus on making AI systems performant and reliable at scale, not
                            just functional in a notebook.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills & Tools:</span>
                            {genAILabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGamepad} size="3x" />
                        <h3>Game Development & Graphics</h3>
                        <p>
                            Co-founder of an indie game studio, building mobile games
                            end-to-end in Unity and C#, from gameplay systems to art pipeline.
                            I bring a strong graphics optimization background (draw calls,
                            batching, lightmapping, GPU memory) along with 3D asset work in
                            Blender and mobile ad monetization integration.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills & Tools:</span>
                            {gameDevLabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
