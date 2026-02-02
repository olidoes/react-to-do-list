export default function ToDos({ toDos, handleToDoClick }) {
    return (
        <div>
            {toDos.map((element) => (
                <p
                    key={element.id}
                    onClick={() => {
                        handleToDoClick(element.id);
                    }}
                >
                    {element.value}
                </p>
            ))}
        </div>
    );
}
