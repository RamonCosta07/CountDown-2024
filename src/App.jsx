import "./App.css";
import Counter from "./components/Counter";
import NewYear from "./assets/ano-novo.jpg";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [data] = useCountdown("Jan 1, 2024 00:00:00");
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <h1 className="title">Contagem Regressiva Para 2024</h1>
        <div className="count-container">
          <Counter title="Dias" number={data.dayNumber} />
          <Counter title="Horas" number={data.hourNumber} />
          <Counter title="Minutos" number={data.minuteNumber} />
          <Counter title="Segudos" number={data.secondNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
