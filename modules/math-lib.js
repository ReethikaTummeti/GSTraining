//inline export(exporting along with the definition)
//named export (export at eof)
//default export(only one default export is possible)
function add(a,b){
    console.log("sum:",a+b);
}
export function sub(a,b){
    console.log("sub:",a-b);
}
function div(a,b){
    console.log("div:",a/b);
}
function mult(a,b){
    console.log("mult:",a*b);
}

export{add,div};

export default mult;