import { useState } from "react";
import RecipeBox from "./RecipeBox";
import Sidebar from "./Sidebar";

function Home({recipes}){

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [sidebarContent, setsidebarContent] = useState("");

  const openSidebar = (content) => {
    setsidebarContent(content);
    setsidebarOpen(true);
  }

  const closeSidebar = () => {
    if(sidebarOpen === true){
      setsidebarContent("");
      setsidebarOpen(false);
    }
  }


  return (
    <>
        <div className="recipe-container" onClick={closeSidebar}>
          {recipes.length === 0?
            (<p>No Recipes found</p>) 
            :(recipes.map((recipe) => {
              return(
                <RecipeBox key={recipe.id} recipe = {recipe} openSidebar={openSidebar}/>
              )
            })      
          )}
        </div>

        {sidebarOpen && 
          <Sidebar sidebarContent = {sidebarContent}/>
        }

    </>
  )
}

export default Home;
