import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <asaide>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>  
      </asaide>

      <main>
        <ul>
          <li class="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49289526?s=460&v=4" alt="Lucas"/>
              <div className="user-info">
                <strong>Lucas</strong>
                <span>JS,CSS3</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeatnon perferendis facilis error iusto!</p>
            <a href="">Acessar perfil no Github</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49289526?s=460&v=4" alt="Lucas"/>
              <div className="user-info">
                <strong>Lucas</strong>
                <span>JS,CSS3</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeatnon perferendis facilis error iusto!</p>
            <a href="">Acessar perfil no Github</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49289526?s=460&v=4" alt="Lucas"/>
              <div className="user-info">
                <strong>Lucas</strong>
                <span>JS,CSS3</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeatnon perferendis facilis error iusto!</p>
            <a href="">Acessar perfil no Github</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49289526?s=460&v=4" alt="Lucas"/>
              <div className="user-info">
                <strong>Lucas</strong>
                <span>JS,CSS3</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat perferendis facilis error iusto!</p>
            <a href="">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
