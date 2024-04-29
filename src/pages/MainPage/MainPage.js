import React, { useState } from 'react';

function MainPage(props) {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    };

    const handleChangeName = (index) => {
        if (inputValue.trim() !== '') {
            const updatedList = [...list];
            updatedList[index] = inputValue;
            setList(updatedList);
            setInputValue('');
        }
    };

    const handleRemoveName = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    };

    return (
        <div>
            <h2>Список имён</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите имя"
            />
            <button onClick={handleAddName} >
                Добавить
            </button>
            {list.length === 0 && <p>Список пуст</p>}
            <ul>
                {list.map((name, index) => (
                    <li key={index}>
                        {name}
                        <button onClick={() => handleChangeName(index)}>
                            Поменять
                        </button>
                        <button onClick={() => handleRemoveName(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainPage;