import "./App.css";
import { useState } from "react";
import ToDos from "./components/ToDos";
import Entry from "./components/Entry";

function App() {
    const [currentValue, setCurrentValue] = useState("");
    const [toDos, setToDos] = useState([]);

    function handleAddClick() {
        if (currentValue == "") {
            return;
        }

        let newToDo = { value: currentValue, id: Date.now() };

        setToDos([...toDos, newToDo]);
        setCurrentValue("");
    }

    function handleToDoClick(elementId) {
        let newToDos = toDos.filter((e) => String(e.id) != String(elementId));

        setToDos(newToDos);
    }

    return (
        <div className="flexbox-centering-container">
            <div className="to-do-list-container">
                <h1>Add a To Do:</h1>
                <Entry
                    currentValue={currentValue}
                    onSubmit={handleAddClick}
                    setCurrentValue={setCurrentValue}
                />
                <ToDos toDos={toDos} handleToDoClick={handleToDoClick} />
            </div>
        </div>
    );
}

export default App;
