import React from 'react';

export default function OnlyFunctionClocking(){
    return (<div>
                Only Function Clocking : 
                    {
                        new Date().toLocaleTimeString()
                    }
            </div>);
}