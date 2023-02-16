type dishno={
    dish:{
        dishes:string,
        prices:number,
        images:string
    }[]
}
export const DishItem=(props:dishno)=>
{
    return(
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
             {props.dish.map(dish=>{
                console.log({dish});
            return(
                <div className="grid grid-cols-4  md:m-6 md:w-11/12 lg:m-6 lg:w-11/12 rounded-lg h-25 pb-6  border-solid md:border-2 border-b-2 hover:shadow-2xl duration-300" key={dish.dishes}>
                <img src={dish.images} alt={dish.dishes} className="ml-5 w-14 h-24 md:ml-10 lg:ml-18 pt-8"/>
                <div className="pt-12 col-span-1 ml-4 lg:ml-7 justify-self-start">{dish.dishes}</div>              
                <div className="col-end-5 pt-12 mr-5 md:mr-10 lg:mr-1118 md:mr-10 justify-self-end">{dish.prices}</div>             
            </div> 
            )
        })}
        </div>
        <button className="bg-green-300 text-white mb-6 font-medium mt-10 p-4 w-1/2 rounded-lg hover:scale-105 hover:bg-green-400 duration-300">Add new dish</button>
        </div>
    )
}