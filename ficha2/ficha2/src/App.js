import React from 'react';
import './App.css';

function Aluno() {
  return (
    <div>
      <table>
      <tr>
        <th>Nome</th>
        <th>Data de nascimento</th>
        <th>Email</th>
        <th>Telemóvel</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </table>
      <a href="new.js" target="_blank"><button>Novo aluno</button></a>
     
      <a href="edit.js" target="_blank"><button>Editar aluno</button></a>
      
    </div>
  );
}

export default Aluno;
