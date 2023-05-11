
function CityInput(props) {
    


    return ( 
        <form onSubmit={props.handleSubmit} >
        <input type="text" value={props.input} onChange={(e) => props.setInput(e.target.value)} placeholder="Enter a city..." />
        </form>
     );
}

export default CityInput;