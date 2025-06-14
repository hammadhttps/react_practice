import React from 'react'

const prop_case_2 = ({name,fatherName,GrandFather,Child}) => {
  return (
    <header style={{textAlign: 'center', marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px'}}>
        <h1>Welcome {name}</h1>
        <h2>Your Father Name is {fatherName}</h2>
        <h2>Your GrandFather Name is {GrandFather}</h2>
        <h2>Your Child Name is {Child}</h2>
    </header>
    
  )
}

export default prop_case_2