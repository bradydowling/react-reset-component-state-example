import React, { useState } from 'react';

function MyForm(props) {
  const [favoritePizza, setFavoritePizza] = useState('');
  const [isNerd, setIsNerd] = useState('');
  const [isGoodieTwoShows, setIsGoodieTwoShoes] = useState('');
  const [isPartier, setIsPartier] = useState('');
  const [isRebel, setIsRebel] = useState('');

  return (
    <div className="form">
        <div>
          <div>What's your favorite pizza?</div>
          <input value={favoritePizza} onChange={(e) => setFavoritePizza(e.target.value)} />
        </div>
        <div>
          <div>Are you a nerd?</div>
          <input value={isNerd} onChange={(e) => setIsNerd(e.target.value)} />
        </div>
        <div>
          <div>Are you a goodie two shoes?</div>
          <input value={isGoodieTwoShows} onChange={(e) => setIsGoodieTwoShoes(e.target.value)} />
        </div>
        <div>
          <div>Do you like to party?</div>
          <input value={isPartier} onChange={(e) => setIsPartier(e.target.value)} />
        </div>
        <div>
          <div>Are you a rebel?</div>
          <input value={isRebel} onChange={(e) => setIsRebel(e.target.value)} />
        </div>
    </div>
  );
}

export default MyForm;
