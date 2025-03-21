import { useEffect, useState } from 'react';
import Axios from 'axios';
import { HiSwitchHorizontal } from 'react-icons/hi';
import './App.css';

function App() {
    const [rates, setRates] = useState({});
    const [input, setInput] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    useEffect(() => {
        Axios.get(`https://v6.exchangerate-api.com/v6/57c940fa280300f92cfb9e8a/latest/USD`)
            .then((res) => {
                setRates(res.data.conversion_rates);
                setOptions(Object.keys(res.data.conversion_rates));
            })
            .catch((err) => console.error("Error fetching currency data:", err));
    }, []);

    useEffect(() => {
        convert();
    }, [from, to, input]);

    function convert() {
        if (rates[from] && rates[to]) {
            const convertedAmount = (input / rates[from]) * rates[to];
            setOutput(convertedAmount);
        }
    }

    function flip() {
        setFrom(to);
        setTo(from);
    }

    return (
        <div className="App">
            <div className="heading">
                <h1>Currency Converter</h1>
            </div>
            <div className="container">
                <div className="left">
                    <h3>Amount</h3>
                    <input
                        type="number"
                        value={input}
                        min="1"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="middle">
                    <h3>From</h3>
                    <select value={from} onChange={(e) => setFrom(e.target.value)}>
                        {options.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="switch">
                    <HiSwitchHorizontal size="30px" onClick={flip} />
                </div>
                <div className="right">
                    <h3>To</h3>
                    <select value={to} onChange={(e) => setTo(e.target.value)}>
                        {options.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="result">
                <h2>Converted Amount:</h2>
                <p>
                    {input} {from} = {output.toFixed(2)} {to}
                </p>
            </div>
        </div>
    );
}

export default App;
