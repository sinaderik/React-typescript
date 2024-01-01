import React, { ReactNode } from 'react'

type sectionProps = {
    sectionTitle?: string,
    children: ReactNode
}

export default function Section({ sectionTitle="main section", children }: sectionProps) {
    return (
        <div>
            <h2>{sectionTitle}</h2>
            {children}
        </div>
    )
}
