import useSWR from "swr";
import './App.css'

function App() {

    const {data, error} =
        useSWR('https://rickandmortyapi.com/api/character',
            (url)=>
                fetch(url).then((res)=>res.json())
        );

    if (error) return <p>{error.message}</p>;
    if (!data) return <p>loading...</p>

    return (
        <>
            {
                data.results.map((char) =>
                    (
                        <div key={char.id}>
                            <img src={char.image} alt={char.name}/>
                            <h1>{char.species}</h1>
                            <h2>{char.status}</h2>
                        </div>
                    )
                )
            }
        </>
    )
}

export default App
