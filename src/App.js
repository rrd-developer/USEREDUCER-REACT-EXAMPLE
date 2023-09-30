
import { useReducer } from "react";
function App() {

  
  
  

  const reducer  = (state,action)=>{
    switch(action.type){
      case "increment":
      return {...state,count: state.count + 1}
      case "decrement":
        return {...state,count : state.count - 1}
        case  "changeColor":
          return {...state,color:!state.color}
          case "userInput":
            return {...state,userInput:action.payload}
      default:
        throw new Error();


       
         
    }

  }

  const[state,dispatch]  = useReducer(reducer,{count:0,color:false,userInput:""})


   
   

    
  return (
    <div className="App" style={{color:state.color ? "red":"blue"}}>
     <button onClick={()=>dispatch({type:"increment"})}>INCREMENT</button>
      &nbsp;{state.count}&nbsp;
      <button onClick={()=>dispatch({type:"decrement"})}>DECREMENT</button>


      <button onClick={()=>dispatch({type:"changeColor"})}>CHANGE COLOR</button>
      <input type="text" placeholder="ENTER TEXT..." value={state.userInput} onChange={e=>dispatch({type:"userInput",payload:e.target.value})}/>


      {state.userInput}
      
    </div>
  );
}

export default App;
