import React, { useState } from 'react';
import { getRandomPrime } from './utils/primeGenerator';
import { modExp } from './utils/modExp';
import './App.scss';

const DiffieHellman: React.FC = () => {
    const generateValues = () => {
        const newW = getRandomPrime(100, 200);
        const newN = getRandomPrime(100, 200);
        const newXA = getRandomPrime(100, 200);
        const newXB = getRandomPrime(100, 200);

        const newYA = modExp(newW, newXA, newN);
        const newYB = modExp(newW, newXB, newN);

        const newKAB_A = modExp(newYB, newXA, newN);
        const newKAB_B = modExp(newYA, newXB, newN);

        return { w: newW, n: newN, xA: newXA, xB: newXB, yA: newYA, yB: newYB, KAB_A: newKAB_A, KAB_B: newKAB_B };
    };

    const [values, setValues] = useState(generateValues());

    const regenerateValues = () => {
        setValues(generateValues());
    };

    return (
        <div className="diffieHellman">
            <h1>Протокол Диффи-Хеллмана</h1>
            <div className="values">
                <p><strong>w:</strong> {values.w}</p>
                <p><strong>n:</strong> {values.n}</p>
                <p><strong>xA:</strong> {values.xA}</p>
                <p><strong>xB:</strong> {values.xB}</p>
                <p><strong>yA (Публичный ключ A):</strong> {values.yA}</p>
                <p><strong>yB (Публичный ключ B):</strong> {values.yB}</p>
                <p><strong>KAB (Общий секретный):</strong> {values.KAB_A} (расчет A)</p>
                <p><strong>KAB (Общий секретный):</strong> {values.KAB_B} (расчет B)</p>
            </div>
            <button onClick={regenerateValues}>Генерировать новые значения</button>
        </div>
    );
};

export default DiffieHellman;