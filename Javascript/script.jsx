const rootElement = document.querySelector("#root")

const root = ReactDOM.createRoot(rootElement);
// props in react: 
// 
const App = (props)=>{
    return (
        <main className = "main">
            <h1>Primo componente</h1>
            {props.children}
        </main>
    )

    
}



const List = ()=>{
    return(
        <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
    )
}
root.render(
    <>
        <App></App>
        <List></List>
    </>
)

