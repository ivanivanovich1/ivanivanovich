import React from "react"

type Props = {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="grid gap-2">
            {children}
        </div>
    )
}