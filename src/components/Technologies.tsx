import React from "react"
import { Technology } from "./Technology"

type TechT = {
    id: number;
    name: string;
}

export const Technologies = () => {
    const technologies: TechT[] = [{ id: 1, name: "Rust" }, { id: 2, name: "JavaScript" }, { id: 3, name: "Python" }]

    const techList = technologies.map((tech) =>
        <Technology key={tech.name} name={tech.name} />
    )

    return (
        <div className="grid gap-3 justify-center text-center">
            <h2 className="text-xl font-bold">Technologies I use</h2>
            <div className="flex gap-3">
                {techList}
            </div>
        </div>
    )
}