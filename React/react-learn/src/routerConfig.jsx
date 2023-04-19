import React from "react";
import Test from './test/Test5/Test5.6'

function routerConfig(props) {
    console.log(props);
    return (
        <>
            <Test {...props}></Test>
        </>
    )
}

export default routerConfig