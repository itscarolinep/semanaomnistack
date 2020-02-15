import React, { useState, useEffect } from 'react';
import Api from './services/Api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [ devs, setDevs ] = useState([]);
  
  useEffect(() => {
    async function loadDevs() {
      const res = await Api.get('/devs');
      setDevs(res.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const res = await Api.post('/devs', data)

    setDevs([...devs, res.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
/**
 * Componente: função que retorna algum conteúdo HTML
 * Pode retornar CSS e JS para interface
 * Componente sempre tem primeira letra maiúscula
 * Um componente por arquivo
 * Não interfere no restante da aplicação
 */

 /**
  * Propriedade: atributo do HTML
  * Sempre usar chaves para conseguir acessar conetúdo de uma propriedade
  * Dá para usar <> ... </> para evitar de usar div
  */

  /**
   * Estado: informações mantidas pelo componente (imutabilidade)
   */