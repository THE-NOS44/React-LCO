import React from "react"

const Button = ({title = "*-missing-*"}) => (
    <div>
        <button className='button'>{title}</button>
    </div>
);

export default Button;
