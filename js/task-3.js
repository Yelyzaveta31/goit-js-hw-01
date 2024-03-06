const content = "50px";
console.log (content);
const padding = "8px";
console.log (padding);
const border = "4px";
console.log (border);





// оголошення параметрів
function getElementWidth(content, padding, border) {
    console.log (`${content} + ${padding} + ${border}`)
} ;

content = parseInt(content);
paddingc = parseInt(padding);
border = parseInt(border);

// оголошення аргументів 
getElementWidth ("50px", "8px", "4px");
getElementWidth ("60px", "12px", "8.5px");
getElementWidth ("200px", "0px", "0px");