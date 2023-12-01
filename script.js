
function mudarTema(){
    
    var body = document.body
    
    var header = document.querySelector("body")
    
    if(body.classList.contains('light-theme')){
       
        body.classList.remove('light-theme')
        
        body.classList.add('dark-theme')
    }
    else{
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
    }

}