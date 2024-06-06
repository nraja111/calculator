let first = "", second = "";

let firstround = true;


let fr = true;
let firstrun = false;


document.querySelectorAll('.nums').forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.target.innerText;
        checker(x);

    });
});


let opp;

let decused=false;

let oppused = false;



function checker(check){
    if(check === '='){

        execs();

    } else if(check === '.'){

        if(decused == false){
        decused = true;
        apends(check);
        }

    } else if(check === '+' || check === '-' || check === '/' || check === '*' ){
        if(oppused == false){
            opp = check;
            oppused = true;
            const example = document.querySelector(".current");
            let lastChar = example.textContent.charAt(example.textContent.length-1);
            decused = false;
        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*'){
        example.textContent = example.textContent.slice(0, -1) + check;
        } else {
        example.textContent = example.textContent + check;
        }   



          
        } else {
            if(second !== ""){
                execs();
            }
            
            
            opp = check;
            oppused = true;
            const example = document.querySelector(".current");
            let lastChar = example.textContent.charAt(example.textContent.length-1);
        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*'){
        example.textContent = example.textContent.slice(0, -1) + check;
        } else {
        example.textContent = example.textContent + check;
        }  

        }
    } else{
        apends(check);
    }
}

function apends(vals){

    if ((oppused == false )){
        first = first.concat("",vals);
        if(firstround== false){
            first= "";
            first = first.concat("",vals);
            firstround = true;


        }

        const example = document.querySelector(".current");

        example.textContent = "";

        example.textContent = first;

        
    } else {
       second = second.concat("", vals);
       console.log(second);

       const example = document.querySelector(".current");
       if(firstrun==false){
       const top = document.querySelector(".previous");

       top.textContent = example.textContent;
       firstrun = true;

       }
       

        example.textContent = "";

       example.textContent = example.textContent.concat(second);
    }

}
let lol = false;

function execs(){
    let sum = 0; // Declare sum here

    const examp = document.querySelector(".previous");
    const examp2 = document.querySelector(".current");

    if((fr === true && second === "" && oppused===false)){
        examp.textContent = examp2.textContent;
        examp2.textContent = "error";
        lol = false;
        firstrun=false;
        first = "", second = "";
        opp = "";
        decused = false;
        oppused = false;
        fr = true;
    } else {

    
        fr = false;
    if(second===""){
        second = first;
        examp.textContent = examp2.textContent;
        examp2.textContent = "";
        examp.textContent = examp.textContent + second;
    } else {
        examp.textContent = examp.textContent + examp2.textContent;
        examp2.textContent = "";
    }

   
    if(opp === '+' ){
        sum = parseFloat(first) + parseFloat(second);
    } else if (opp === '-'){
        sum = parseFloat(first) - parseFloat(second);
    } else if (opp === '*'){
        sum = parseFloat(first) * parseFloat(second);
        console.log(sum);
    } else if (opp === '/'){
        if(second !== '0' ){
            sum = parseFloat(first) / parseFloat(second);
        } else if (second === '0'){
             lol = true;
        }
    }

    if(lol == true){
        examp2.textContent = "dont even try that lol";
        first = "";
        second = "";
        oppused = false;
        firstround = false;
        decused = false;
        lol = false;
        firstrun=false;
    } else{
    let s = Math.round(sum * 1000) / 1000;
    first = s.toString();
    examp2.textContent = first;
    examp.textContent = examp.textContent + "=" + first;
    oppused = false;
    decused = false;
    firstround = false;
    second = "";
    lol = false;
    firstrun=false;
    }   
    }
    
}


const clear = document.querySelector('.clr');
    clear.addEventListener('click', function() {
        const example = document.querySelector(".current");
        example.textContent = "";
        const example1 = document.querySelector(".previous");
        example1.textContent = "";
        lol = false;
        firstrun=false;
        first = "", second = "";
        opp = "";
        decused = false;
        oppused = false;
        fr = true;
        
    })


    const delet = document.querySelector('.del');
delet.addEventListener('click', function() {
    const example = document.querySelector(".current");
        let lastChar = example.textContent.charAt(example.textContent.length-1);
        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*'){
            example.textContent = example.textContent.slice(0, -1);
            opp = "";
            oppused = false;
            decused = false;
        } else if (second === ""){
            first = example.textContent.slice(0, -1);
            example.textContent = example.textContent.slice(0, -1);
        } else {
            second = example.textContent.slice(0, -1);
            example.textContent = example.textContent.slice(0, -1);
        }   
    })