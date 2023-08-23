window.onscroll = function() {
    if (window.scrollY > 200) { // Exibir o botão quando a rolagem for maior que 200 pixels
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  };

  // Função para rolar instantaneamente até o topo da página
  document.getElementById("back-to-top").onclick = function() {
    window.scrollTo(0, 0);
  };