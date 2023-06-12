import {useState} from "react"


const Form = ({ input, setInput, handleSubmit}) => {
    

    
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className = "text-cutout">Enter your task:
                    <input
                        type="Text"
                        value={input}
                        onChange= {(event) => setInput(event.target.value)}
                        />
                </label>



            </form>
            <ul id = "tasks" ></ul>
            
            {input ? (
            <h1 className="text-cutout">{input}</h1>
      ) : (
            <h1 className="text-cutout">no input</h1>
      )}
           
        </div>
    )
}
export default Form

