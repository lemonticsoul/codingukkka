import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Coding.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Coding(){

    const [problems, setProblems] = useState([]);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [timer, setTimer] = useState(3600);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    
    useEffect(()=>{
        axios.get('http://54.180.82.10:5000/api/problems')
        .then(response=>{
            setProblems(response.data);
        })
    },[]);

    

    useEffect(()=>{
        let timerInterval;
        if(isTimerRunning && timer>0){
            timerInterval=setInterval(()=>{
                setTimer(prevTimer=>prevTimer-1);
            },1000);
        }
        return ()=>clearInterval(timerInterval);
    },[isTimerRunning,timer]);

    const startTimer = () => {
        setIsTimerRunning(true);
      };

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="App">
      <nav className="navbar">
        <img src="https://github.com/lemonticsoul/web_advanced/assets/127959482/5a6995b9-4f57-4ec8-8ed1-47f073983beb" alt="Logo" className="logo" />
        <div className="timer">
          <span>{formatTime(timer)}</span>
          <button onClick={startTimer}>시작</button>
        </div>
      </nav>
      <div className="content">
        <div className="problems-list">
          {problems.map((problem) => (
            <div key={problem.id} className="problem-item">
              <span>{problem.title}</span>
              <button onClick={() => setSelectedProblem(problem)}>v</button>
            </div>
          ))}
        
        
        </div>
        
      </div>
      

      {selectedProblem && (
            <div className="problem-details">
              <h2>{selectedProblem.title}</h2>
              <p>{selectedProblem.description}</p>
              <a href={selectedProblem.link}>코테 풀러 가기 ㄱㄱ</a>
            </div>
          )}
    </div>

    )
}

export default Coding;
