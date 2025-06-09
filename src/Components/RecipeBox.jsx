export default function  RecipeBox({recipe, openSidebar}){

    const handleClick = () => {
        openSidebar(recipe);
    }

    return(
        <div className="recipe-box" onClick={handleClick}>
            <h2>{recipe.title}</h2>
            <img className="recipe-box-img" src = {recipe.image} alt = {recipe.title}/>
            <p>Preparation Time: {recipe.readyInMinutes}</p>
            <p>Price per serving: ₹{(recipe.pricePerServing  * 0.835).toFixed(2)}</p>
            <p>
            {recipe.diets.length !== 0 ? (
                <>
                <span>Diets: </span>
                {recipe.diets.map((diet, index) => (
                    <span key={index}>
                    {diet}
                    {index < recipe.diets.length - 1 ? ', ' : ''}
                    </span>
                ))}
                </>
            ) : (
                ''
            )}
            </p>


            <p>
            {recipe.cuisines.length !== 0 ? (
                <>
                <span>Cuisines: </span>
                {recipe.cuisines.map((cuisine, index) => (
                    <span key={index}>
                    {cuisine}
                    {index < recipe.cuisines.length - 1 ? ', ' : ''}
                    </span>
                ))}
                </>
            ) : (
                ''
            )}
            </p>


        </div>     
    )
}