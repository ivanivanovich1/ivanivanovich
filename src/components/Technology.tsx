import React from "react"

type Props = {
    name: String;
}

export const Technology = ({ name }: Props) => {
    return (
        <div>
            <h5 className="italic text-md">
                {name}
            </h5>
        </div>
    )
}