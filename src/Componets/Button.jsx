import React from 'react';



const Button = ({title ,onClick,disableButton}) => {
    return (
        <div>
            <button style={{height:"40px" ,width:"auto"
            }} onClick={onClick}  disabled={disableButton ? disableButton() : false} >{title}</button>
        </div>
    );
}

export default Button;