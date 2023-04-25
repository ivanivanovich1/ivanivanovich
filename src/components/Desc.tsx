import React from "react";

type Props = {
    title: String
    desc: String;
}

export const Desc = ({ title, desc }: Props) => {
    return (
        <div className="grid text-center">
            <h5 className="justify-self-center text-xl font-bold">{title}</h5>
            <p className="justify-self-center md:w-2/4">{desc}</p>
        </div>
    )

}