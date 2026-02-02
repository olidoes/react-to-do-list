import { useState } from "react";

export default function Entry({ currentValue, onSubmit, setCurrentValue }) {
    return (
        <div>
            <input
                type="text"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
            />
            <button onClick={onSubmit}>Add</button>
        </div>
    );
}
