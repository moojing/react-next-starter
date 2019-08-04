import React from 'react'

let Loading = ({isLoading})=>{

    return (
        <>
        {
            isLoading?
            (
                <div className="lds-dual-ring"></div>
            ):null
            
        }
        </>
        
    ) 
} 

export default Loading;