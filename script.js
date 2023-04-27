//Saglabā top checkboox JS mainīgajā
const toggleTheme = document.getElementById("toogle-theme");
const html = document.getElementById("html");
    
    toggleTheme.addEventListener("change" ,toggleThemeHandler );
    function toggleThemeHandler(){
     if (toggleTheme.checked) {
        html.dataset.theme = "dark";
     }else{
         html.dataset.theme = "light";
     }
    }