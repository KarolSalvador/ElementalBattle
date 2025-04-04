function jogar() {
  const btnJogar = document.getElementById("btnJogar");
  btnJogar.disabled = true; //desabilitar botão após click
  let jogarNovamente = true;

  let idade = prompt("Informe sua idade.");

  if (idade < 18) {
    alert("Você NÃO tem idade suficiente para jogar.");
  } else {
    alert("Entrada permitida. Bom jogo!");
    let escolhaJogador = prompt("Digite: 1-FOGO, 2-AR, 3-TERRA ou 4-ÁGUA");
    let escolhaComputador = Math.floor(Math.random() * 4) + 1;
    console.log(escolhaComputador);

    //nomenclatura dos elementos
    const elementos = ["FOGO", "AR", "TERRA", "ÁGUA"];
    const escolhaComputadorNome = elementos[escolhaComputador - 1]; //associa o número ao nome do elemento

    //Se jogador e computador escolherem igual = EMPATE
    if (escolhaJogador == escolhaComputador) {
      alert("Empate!! Computador escolheu: " + escolhaComputadorNome);
    } else {
      //Jogador = FOGO
      if (escolhaJogador == 1) {
        if (escolhaComputador == 2 || escolhaComputador == 3) {
          //Fogo supera ar e terra, jogador VENCE
          alert("Parabéns, você venceu!! Computador escolheu:" + escolhaComputadorNome);
        } else {
          //Fogo perde para água, jogador PERDE
          alert("Computador venceu! Computador escolheu: " + escolhaComputadorNome);
        }
      }

      //jogador = AR
      if (escolhaJogador == 2) {
        if (escolhaComputador == 3 || escolhaComputador == 4) {
          //Ar supera Fogo e Terra, Jogador VENCE
          alert("Parabéns, você venceu!! Computador escolheu:" + escolhaComputadorNome);
        } else {
          //Ar perde para fogo, Jogador PERDE
          alert("Computador venceu! Computador escolheu: " + escolhaComputadorNome);
        }
      }

      //Jogador = TERRA
      if (escolhaJogador == 3) {
        if (escolhaComputador == 2 || escolhacomputador == 4) {
          //Terra supera ar e água, jogador VENCE
          alert("Parabéns, você venceu!! Computador escolheu:" + escolhaComputadorNome);
        } else {
          //terra perde para fogo, jogador PERDE
          alert("Computador venceu! Computador escolheu: " + escolhaComputadorNome);
        }
      }

      //Jogador = ÁGUA
      if (escolhaJogador == 4) {
        if (escolhaComputador == 1 || escolhaComputador == 3) {
          //Água vence fogo e terra, jogador VENCE
          alert("Parabéns, você venceu!! Computador escolheu:" + escolhaComputadorNome);
        } else {
          //água perde para ar, jogador PERDE
          alert("Computador venceu! Computador escolheu: " + escolhaComputadorNome);
        }
      }
    }
  }

  jogarNovamente = confirm("Deseja jogar novamente?");
  if(jogarNovamente) {
    jogar();
  }

  btnJogar.disabled = false;
}

