let body = document.querySelector("body")
let button = document.querySelector("#darmode")
let boxa = document.querySelector(".boxa")
body.classList.add("light-mode")
body.classList.add(".boxa");


function darkMode() {
    body.classList.toggle('dark-mode')
 
 }
 
 function lightMode() {
    body.classList.toggle('light-mode')
 
 }
 

 
 let dardMode = () => {
 
    if (body.classList.contains("light-mode")) {
       body.classList.replace("light-mode", "dark-mode");
       boxa.style.marginLeft = "30px"
       img.style.backgroundImage = "url('./Mask\ group.png')";
       imgq.style.backgroundImage = "url('./Movies.\ \(2\).png')";
 
       q.style.backgroundImage = "url('./Group\ 289881\ \(1\).png')";
       s.style.color = "white"
       btn.style.backgroundColor = "black"
       btn.style.border = "2px solid white"
       k.style.backgroundImage = "url('./Mask\ group\ \(3\).png')";
 
 
 
    } else {
 
       body.classList.replace("dark-mode", "light-mode");
       boxa.style.marginLeft = "-6px"
       img.style.backgroundImage = "url('./Mask\ group\ \(1\).png')";
       imgq.style.backgroundImage = "url('./Movies..png')";
       q.style.backgroundImage = "url('./Group\ 289881.png')";
       s.style.color = "black"
       btn.style.backgroundColor = "white"
       btn.style.border = "2px solid black"
       k.style.backgroundImage = "url('./Mask\ group\ \(2\).png')";
 
    }
 
 
 }
 

 let listItem = document.querySelector(".list-item");

 let APIkey = "5330fd09405b8a400c12703545a6393a";
 
 async function dataFetch() {
    let fetchList = await fetch(
       `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}`
    );
    let list = await fetchList.json();
    console.log(list);
    listItem.innerHTML = list.results
       .map(
          (el) =>
             `

          <div class="otaaa">
          
           
          <img src="https://image.tmdb.org/t/p/original${el.poster_path}" alt="movie img" width="200">
        <div class="jojo">
          <li>${el.title}</li>

          <div class="mk" style="gap:10px;">
          <div class="koko">HD</div>
          <div class="kok">3:12:00</div>
          </div>
       
       </div>

       </div>
      
     `
       )
       .join(" ");
 }
 
 dataFetch();
 