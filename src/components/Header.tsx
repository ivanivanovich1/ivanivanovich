import React from "react"
import johnPic from "../assets/john.png"
import Image from "next/image"

type Props = {
    title: String;
    desc: String;
}

export const Header = ({ title, desc }: Props) => {
    return (
        <header className="grid gap-3 mt-28 text-center">
            <Image className="justify-self-center rounded-full" alt="profile picture" src={johnPic} width={350} height={350} />
            <h1 className="text-3xl font-bold text-accent">
                {title}
            </h1>
            <p className="italic">
                {desc}
            </p>
        </header>
    )
}