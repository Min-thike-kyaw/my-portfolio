import Title from "./Title";
export default function Objective() {
    return (
        <>
            <Title title="Objective" />
            <p className="leading-loose tracking-wide text-base md:text-xl">
                “Backend-focused software engineer with 5+ years of experience developing production-grade web systems using Laravel and Node.js. Currently expanding into blockchain and distributed systems, aiming to build secure, scalable platforms that go beyond standard CRUD applications. Looking for roles that demand strong architecture thinking and problem-solving at scale.”
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Full-stack development (Laravel, Node.js, React, Vue) with REST API design</span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Web3 & blockchain: Smart Contracts (ERC-20), NFT marketplaces</span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>DevOps: Docker, Ubuntu, Apache2/Nginx, Serverless deployment</span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Real-time systems, WebSockets, and AI workflow automation</span>
                </div>
            </div>
        </>

    );
}