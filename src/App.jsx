import "./App.css";
import { useState, useEffect } from "react";
import ToDos from "./components/ToDos";
import Entry from "./components/Entry";

function App() {
    const [currentValue, setCurrentValue] = useState("");
    const [toDos, setToDos] = useState(() => {
        const saved = localStorage.getItem("toDos");
        const initalValue = JSON.parse(saved);
        return initalValue || [];
    });

    useEffect(() => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
    }, [toDos]);

    function handleAddClick() {
        if (currentValue == "") {
            return;
        }

        let newToDo = { value: currentValue, id: Date.now() };
        let newList = [...toDos, newToDo];

        setToDos(newList);

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
