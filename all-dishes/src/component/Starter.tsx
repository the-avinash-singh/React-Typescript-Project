type dishno={
    dish:{}[]
}
export const Starter  = (props:dishno)=> {
    return(
        <div>
             <div className='flex justify-start ml-5 md:ml-10 lg:ml-15 pt-10 font-bold text-lg'>
         <h2>Starter({props.dish.length})</h2> 
         <h2></h2>
        </div>
        </div>
    )
}