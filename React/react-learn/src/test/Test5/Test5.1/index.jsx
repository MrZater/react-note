import React, { useState } from 'react'
import uuid from 'uuid'

export default function Index() {
    const [a, seta] = useState(0)

    return (
        <div>
            {a}
            <button onClick={() => {
                console.log(uuid)
                seta(uuid())
            }}>点击</button>
        </div>
    )
}

