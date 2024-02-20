import './TicToe.css';
import React, { useEffect, useState } from 'react'
import Square from './Square';
import { Patterns } from './Patterns';

const TicToe = () => {

    const[board, setBoard] = useState(["","","","","","","","",""]);
    const[player,setPlayer] = useState('X');
    const[result,setResult] = useState({winner:"none",state:"none"});

    useEffect(()=>{
        checkWin();
        checkTie();
    },[board]);

    useEffect(()=>{
        if(result.state!='none'){
            alert(`Game Finished! Winning Player ${result.winner}`)
        }
        restartGame();
    },[result])

    const chooseSquare = (square) =>{
        setBoard(board.map((val,idx)=>{
            if(square==idx && val==''){
                return player
            }
            return val;
        }))
        if(player==='X'){
            setPlayer('O')
        } else {
            setPlayer('X')
        }
    }

    const checkWin = () => {
        Patterns.forEach((currentPattern)=>{
            let filter = board[currentPattern[0]];
            if(filter==="") return;
            let flag = true;
            currentPattern.forEach((item)=>{
                if(filter!=board[item]){
                    flag = false;
                }
            })
            if(flag){
                setResult({winner:filter,state:`Hurray: ${filter}`})
            }
        })
    }

    const checkTie = () =>{
        let flag = true;
        board.forEach((item)=>{
            if(item === ""){
                flag = false
            }
        })
        if(flag) {
            setResult({winner:'No one',state:"Tie"})
        }
    }

    const restartGame = () =>{
        setBoard(["","","","","","","","",""])
        setPlayer("X")
    }


  return (
    <div className='App'>
        <div className='board'>
            <div className="row">
                <Square val={board[0]} chooseSquare={()=>chooseSquare(0)} />
                <Square val={board[1]} chooseSquare={()=>chooseSquare(1)} />
                <Square val={board[2]} chooseSquare={()=>chooseSquare(2)} />
            </div>
            <div className="row">
                <Square val={board[3]} chooseSquare={()=>chooseSquare(3)} />
                <Square val={board[4]} chooseSquare={()=>chooseSquare(4)} />
                <Square val={board[5]} chooseSquare={()=>chooseSquare(5)} />
            </div>
            <div className="row">
                <Square val={board[6]} chooseSquare={()=>chooseSquare(6)} />
                <Square val={board[7]} chooseSquare={()=>chooseSquare(7)} />
                <Square val={board[8]} chooseSquare={()=>chooseSquare(8)} />
            </div>
        </div>
        
    </div>
  )
}

export default TicToe