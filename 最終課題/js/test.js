function janken(name) {
 
    var message = "";
    
    if(janken == 1) {
        message = "NAYEONはグーを出したよ";
    } else if (janken ==2) {
        message = "JEONGYEONはパーを出したよ";
    } else if (janken ==3) {
        message = "MOMOはパーを出したよ";
    } else if (janken ==4) {
        message = "SANAはチョキを出したよ";
    } else if (janken ==5) {
        message = "JIHYOはグーを出したよ";
    } else if (janken ==6) {
        message = "MINAはパーを出したよ";
    } else if (janken ==7) {
        message = "DAHYUNはチョキを出したよ";
    } else if (janken ==8) {
        message = "CHAEYOUNGはチョキを出したよ";
    } else if (janken ==9) {
        message = "TZUYUはパーを出したよ";
    } 
    
    alert(message);
    
}