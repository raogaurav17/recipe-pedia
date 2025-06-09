import DOMPurify from 'dompurify';
import { useState } from 'react';

export default function Sidebar({sidebarContent}) {
    const [opt, setopt] = useState(0);
    const optChange = (option) => setopt(option);

    const cleanSummary = DOMPurify.sanitize(sidebarContent.summary);
    const cleanInstructions = DOMPurify.sanitize(sidebarContent.instructions);
    return (
        <div className="sidepanel">
            <div className="buttons-div">
                <button className='sidepanel-Button' onClick={() => optChange(0)}>Summary</button>
                <button className='sidepanel-Button' onClick={() => optChange(1)}>Ingredients</button>
                <button className='sidepanel-Button' onClick={() => optChange(2)}>Instructions</button>
            </div>
            {(opt === 0) && (
                <div className='summary'>
                    <h2>Summary of {sidebarContent.title}</h2>
                    <img className="recipe-box-img" src = {sidebarContent.image} alt = {sidebarContent.title}/>
                    <div className='summary-text' dangerouslySetInnerHTML={{ __html: cleanSummary }} />
                </div>
            )}
            {(opt === 1) && (
                <>
                    <h1>Ingredients used in {sidebarContent.title}</h1>
                    <div className="ingredients-list">
                        {sidebarContent.extendedIngredients.map((ingredient, index) => (
                            <div key={index} className="ingredient-box">
                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name}/>
                                <h4>{ingredient.name}</h4>
                                <p>amount: {ingredient.amount} {ingredient.unit}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {(opt === 2) && (
                <div className="instructions">
                    <h2>Instructions for making {sidebarContent.title}</h2>
                    <img className="recipe-box-img" src = {sidebarContent.image} alt = {sidebarContent.title}/>
                    <p style={{whiteSpace: "pre-line"}}  dangerouslySetInnerHTML={{__html: cleanInstructions}}></p>
                </div>
            )}
        </div>
    )
}