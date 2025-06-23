const step1=({data,dispatch })=>{
    return(
        <div>
            <label >Name:</label>
            <input type="text "value={data.name} 
            onChange={e=>dispatch({type:'Update',field:'name',value:e.target.value})}/>
            <br />
            <label>Email:</label>
            <input type="email" 
            value={data.email}
            onChange={e=>dispatch({type:'Update',field:'email',
                value:e.target.value})}/>
            <br />
            <button onClick={()=>dispatch({type:'Next'})}>Next</button>

        </div>
    );

}

export default step1;