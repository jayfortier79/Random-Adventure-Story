import React, { useState } from 'react';

const InputChild = () => {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prev) => prev + 1);
    };

    return (
       console.log(updateCount)
)};

export default InputChild;