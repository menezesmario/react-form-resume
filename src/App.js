import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  }


  return (
    <div className="container">
      <div className="Title">
        <h1>Trabalhe Conosco</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" name="name" placeholder="name" />
        <label>Nome</label>
        <input type="text" name="email" placeholder="email" />
        <button type="submit">Enviar</button>
      </form>
   </div>
  );
}

export default App;
