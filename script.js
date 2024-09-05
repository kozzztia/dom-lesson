// Створити сторінку, що показує нумерований список пісень:
var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.




// function listRender() {
//     // if (!list) return; 
//     const list = document.createElement('ol')

//     list.innerHTML = ""; 

//     const fragment = document.createDocumentFragment();

//     playList.forEach((track, index) => {
//         let item = document.createElement('li');

//         const author = document.createElement('p');
//         author.textContent = track.author;

//         const song = document.createElement('h2');
//         song.textContent = track.song;
//         song.setAttribute('index', index);
//         song.style.whiteSpace = 'nowrap'; 

//         item.appendChild(author);
//         item.appendChild(song);

//         list.appendChild(item);
//     });



//     document.body.appendChild(list)
// }

// listRender();


// secon task create dialog
// const headerStyles = {
//     width: "100%",
//     maxWidth: "780px",
//     margin: "0 auto",
//     padding: "20px",
//     backgroundColor: "#eee"
// };
// const buttonStyles = {
//     minWidth: "200px",
//     margin: "0 auto",
//     padding: "20px",
//     backgroundColor: "#eee",
//     borderRadius: "10px",
//     cursor: 'pointer',
// }
// const dialogStyles = {
//     position: 'absolute',
//     width: "100vw",
//     height: "100vh",
//     background: "rgba(146, 148, 147, .5)",
//     border: "none",
//     top: 0,
//     left: 0,
//     opacity: 0,
// }
// const modalStyles = {
//     position: "relative",
//     width: "500px",
//     height: "500px",
//     background: "#b1fae3",
//     transform: "translate(-50%,-50%)",
//     top: "50%",
//     left: "50%",
//     padding: "40px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     gap: "20px",
// }


// const modalContent = `This is a dialog content. You can put anything here! This is a dialog content. You can put anything here! This is a dialog content. You can put anything here! This is a dialog content. You can put anything here!This is a dialog content. You can put anything here! This is a dialog content. You can put anything here!`

// function styledElement(element, styles) {
//     for (let style in styles) {
//         element.style[style] = styles[style];
//     }
// }


// const header = document.createElement('header');
// styledElement(header, headerStyles);


// const button = document.createElement('button');
// styledElement(button, buttonStyles);
// button.innerText = "open";

// const dialog = document.createElement('dialog');
// styledElement(dialog, dialogStyles);

// const modal = document.createElement('div');
// styledElement(modal, modalStyles);
// modal.innerHTML = `
//     <h2>Dialog Title</h2>
//     <p>${modalContent}</p>
// `
// const modalBtn = document.createElement('button');
// modalBtn.innerText = "close";
// styledElement(modalBtn, buttonStyles);
// modalBtn.onclick = closeDialog;
// modalBtn.style.marginTop = "auto";


// modal.appendChild(modalBtn)

// dialog.appendChild(modal);

// header.appendChild(button);

// button.onclick = openDialog;

// document.body.appendChild(header);
// document.body.appendChild(dialog)


// function openDialog() {
//     dialog.open = true;
//     dialog.classList.add('open')
// }

// function closeDialog() {
//     dialog.open = false;
//     dialog.classList.remove('open')
// }


// third task traffic lights
const trafficLightStyles = {
    width : "300px",
    height : "auto",
    padding : "20px",
    position : "absolute", 
    top : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    backgroundColor : "#6e6e6e",
    display : "flex",
    flexDirection: "column",
    gap : "10px",
    alignItems: "center",
    boxShadow: "0px 0px 20px #000",
}

const lampStyles = {
    width :"250px",
    height :"250px",
    borderRadius : "50%",
    background: "#ffffff",
    boxShadow: "0px 0px 20px #000",
}

const buttonStyles = {
    width : "100%",
    height : "auto",
    border : "none",
    outline : "none",
    fontSize : "30px",
    padding : "10px",
    cursor: "pointer",
    boxShadow: "0px 0px 20px #000",
}

const lampColors = ["#0a4000", "#3c4000", "#400000"];
const onLampColors = ["#26ff00", "#ffd000", "#ff0000"]


function styled(element, styles){
    for (const style in styles) {
        element.style[style] = styles[style];
    }
}
let count = 0;

function onOneOfLamp(){
    const lamps = document.querySelectorAll('div>div');
    lamps.forEach(item => item.style.filter = "none");
    lamps.forEach((item,i) => item.style.background = lampColors[i]);
    if(count >= lamps.length) count = 0;
    lamps[count].style.filter = `drop-shadow(0px 0px 100px ${onLampColors[count]})`;
    lamps[count].style.backgroundColor =  onLampColors[count];

    console.log(count)
    count++;
}


function ctreateTraficLights(){
    const trafficLight = document.createElement('div');
    styled(trafficLight , trafficLightStyles);

    lampColors.forEach(color => {
        const lamp = document.createElement('div');
        styled(lamp, {...lampStyles, backgroundColor : color});
        trafficLight.appendChild(lamp)
    })

    const button = document.createElement('button');
    styled(button , buttonStyles);
    button.innerText = "go";
    button.onclick = onOneOfLamp;


    trafficLight.append(button)
    document.body.append(trafficLight)
}

ctreateTraficLights()


