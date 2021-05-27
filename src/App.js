import { useState } from 'react';
import './App.css';
import imageLogo from './images/wivenn_logo.png'

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  }

  console.log('*** formValues', formValues)


  return (
    <div className="container">
      <div className="header-container">
        <div className="logo-container">
          <img src={imageLogo} alt="logo"/>
        </div>
      </div> 
      <div className="header-form">
        <h1>Trabalhe Conosco</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" name="name" placeholder="Digite seu nome completo" onChange={handleInputChange} value={formValues.name  || '' }/>
        <small>Digite seu nome Completo</small>
        <label>E-mail</label>
        <input type="e-mail" name="email" placeholder="contato@email.com" onChange={handleInputChange} value={formValues.email  || '' }/>
        <small>Digite um e-mail válido</small>
        <label for="phone">Telefone</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="(00) 00000-0000" onChange={handleInputChange} value={formValues.phone  || '' }/>
        <small>Formato: (12)34567-8910</small>
        <label>Endereço</label>
        <input type="text" name="address" placeholder="Rua, número, bairro e cidade" onChange={handleInputChange} value={formValues.address  || '' }/>
        <small>Digite seu endereço completo</small>
        <label>Currículo</label>
        <input type="file" className="file-input" name="resume" placeholder="Escolher" onChange={handleInputChange} value={formValues.resume  || '' }/>
        <small>Envie seu currículo no formato .pdf, .doc, .docx ou txt</small>
        <button type="submit">Enviar</button>
      </form>

      
   </div>
  );
}

export default App;
