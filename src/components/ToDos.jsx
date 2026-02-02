export default function ToDos({ toDos }) {
    return (
        <div>
            {toDos.map((element) => (
                <p key={element.id}>{element.value}</p>
            ))}
        </div>
    );
}
