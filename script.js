// Створити сторінку, що показує нумерований список пісень:
var playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.




function listRender() {
    // if (!list) return; 
    const list = document.createElement('ol')

    list.innerHTML = ""; 

    const fragment = document.createDocumentFragment();

    playList.forEach((track, index) => {
        let item = document.createElement('li');

        const author = document.createElement('p');
        author.textContent = track.author;

        const song = document.createElement('h2');
        song.textContent = track.song;
        song.setAttribute('index', index);
        song.style.whiteSpace = 'nowrap'; 
        
        item.appendChild(author);
        item.appendChild(song);

        list.appendChild(item);
    });



    document.body.appendChild(list)
}

listRender();