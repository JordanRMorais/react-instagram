import Stories from "./Stories"; 
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Body(){

    return (
        <div className="corpo">
      <div className="esquerda">
      <Stories></Stories>
      <Posts></Posts>
      </div>
      <Sidebar></Sidebar>
    </div>
    )
}