const botao = document.querySelector("#btnBuscar");
const loading = document.querySelector("#loading");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function (){
loading.style.display = "block";
resultado.innerHTML = "";
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(response => {
    loading.style.display = "none";
    if(!response.ok){
    throw new Error("Erro HTTP: " + response.status);
    }
    return response.json();
})
.then(posts=>{
    resultado.innerHTML = "<ul>";

    const lista = resultado.querySelector("ul");

    posts.forEach(post => {
        lista.innerHTML += `
        <li>
        <strong>${post.title}</strong>
        </li>`
    });
})   
    
})
.catch(erro => {
    loading.style.display = "none";
    resultado.innerHTML = `Erro ao realizar a requisição. <br> 
    (${erro.message})`;
    
    });
