import React from "react";

// Intro

const Intro = () => {
  return (
    <div id="intro">
      <h1 class="subtitle"> Q2: Tic Tac Toe</h1>
      <div class="description">
        <p> Your task is to implement a Tic Tac toe with functionality. </p>
        <ul>
          <li>There are two Players: Player 1 (X) and Player 2 (O)</li>
          <li>Each Player will take alternate turns</li>
          <li>
            The Application should display the next user to play and will mark
            the square with the player's symbol
          </li>
          <li>
            The Application will declare a winner when either player has 3
            consecutive symbol's (vertical, horizontal, diagonal)
          </li>
          <li>
            The Application will declare draw if neither player made a match
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
