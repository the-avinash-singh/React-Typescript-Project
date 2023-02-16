type dishno={
    dish:{}[]
}
export const DishNo=(props:dishno)=>{
    return(
        <div className="flex justify-between ml-5 md:ml-10 lg:ml-15 pt-9 font-bold text-xl">
        <h2 className='cursor-pointer'>All Dishes({props.dish.length})</h2>
        <button className='border-solid border-2 border-slate-900 px-4 mr-3 mb-3 rounded-full h-11 hover:shadow-2xl hover:bg-slate-300 hover:scale-105 duration-400'>menu</button>
        </div>
    )
}