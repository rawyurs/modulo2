import React, { useState } from 'react';
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { depositar, levantar } from './features/atmSlice';

const App3 = () => {
    const [inputValue, setInputValue] = useState(0);
    const saldo = useSelector((state) => state.atm.saldo); // Seleciona o saldo do slice ATM
    const dispatch = useDispatch();

    const handleDepositar = () => {
        dispatch(depositar(Number(inputValue)));
        setInputValue(0);
    };

    const handleLevantar = () => {
        dispatch(levantar(Number(inputValue)));
        setInputValue(0);
    };

    return (
        <div className='App'>
            <section className='card-todo caixa-mb'>
                <h1>Máquina Multibanco</h1>
                <h4>Saldo Atual: {saldo} €</h4>
                <div className='acoes-multibanco'>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className='botoesfiltro' onClick={handleDepositar}>
                        Depositar
                    </button>
                    <button className='botoesfiltro' onClick={handleLevantar}>
                        Levantar
                    </button>
                </div>
            </section>
        </div>
    );
};

export default App3;
