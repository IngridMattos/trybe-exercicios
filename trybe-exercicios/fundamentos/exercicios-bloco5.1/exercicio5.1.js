//document.getElementessByTagName(“span”)[0].innerText = “alteração do texto que quiser”; atualiza o texto que anterior
//document.getElementsByTagName("section")[0].innerText = "velejando pelo mundo";
function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Ganhar 3.500 e estar em um empresa cabulosa!!"
    changeText() 
    // function changeSquareToGreen() {
    // let squareYellow = document.getElementsByClassName('main-content')[0];
    // squareYellow.style.background = "rgb(76,164,109)";