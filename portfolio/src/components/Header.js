import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <div>
          <h1>logo</h1>
        </div>
        <div className="headerMenu">
          <div><h3>Contato</h3></div>
          <div><h3>Projetos</h3></div>
          <div><h3>Tecnologias que eu uso</h3></div>
        </div>
      </header>
    );
  };
};

export default Header;