import { useState } from 'react';

// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }

/////////////////////////////////////////////////
// let initialCounters = [0,0,0];

// export default function CounterList(){
//     const [counters,setCounters] = useState(initialCounters);

//     function handleClick(index){
//         let number = counters.map((item,i)=>{
//             if(index===i){
//                 return item+1;
//             }
//             else{
//                 return item;
//             }
//         })
//         setCounters(number);
//     }

//     return (
//         <ul>
//             {counters.map((counter,i)=>(
//                 <li key={i}>
//                     {counter}
//                     <button onClick={()=>handleClick(i)}>+1</button>
//                 </li>
//             ))}
//         </ul>
//     )
// }

/////////////////////////////////////////////////////////////////////////////////////////////
// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//     const [name,setName] = useState('');
//     const [artists,setArtists] = useState(initialArtists);

//     const handleClick = () =>{
//         let a = 1;
//         let arr1 = [
//             ...artists.slice(0,a),{id:nextId++,name:name},...artists.slice(a)
//         ]
//         setArtists(arr1)
//     }

//     return(
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <input value={name} onChange={(e)=>setName(e.target.value)} />
//             <button onClick={handleClick}>Insert</button>
//             <ul>
//                 {artists.map((artists)=>(
//                     <li key={artists.id}>{artists.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }

////////////////////////////////////////////////////////////////////////////////////
//Reversing the list of elements;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
  ];

export default function Reverselist(){
    const [item,setItem] = useState(initialList);

    const handleClick = () =>{
        let a = [...item];
        a.reverse()
        setItem(a)
    }

    return (
        <>
        <button onClick={handleClick}>Reverse</button>
        {
            item.map((name1,i)=>{
                return (
                    <>
                        <ul>
                            <li key={i}>{name1.title}</li>
                        </ul>
                    </>
                )
            })
        }
        </>
    )
}
