import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('*** handleSubmit');
  }


  return (
    <div className="container">
      <div className="Title">
        <h1>Trabalhe Conosco</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" name="name" placeholder="name" />
        <button type="submit">Enviar</button>
      </form>
   </div>
  );
}

export default App;
