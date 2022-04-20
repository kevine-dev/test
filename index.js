const token='99a06b17e1b5fb29f0d102b3a2d11690'
const items=document.querySelector('.items')
const input=document.querySelector('input')
const form=document.querySelector('form')


let getFilm= async(text='avengers')=>{

      let res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${text}`)
      let data= await  res.json()
      console.log( data)

      items.innerHTML=data.results.map((item)=>{
          
           return `

            <div class="card item">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="">
                    <div class="detail">
                            <span>${item.title}</span>
                            <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Velit commodi quibusdam voluptatibus consectetur, error quas dicta 
                            <div>

                                <ul class="info">
                                    <li><i class="fa fa-star">${item.vote_average}</i></li>
                                    
                                    
                                </ul>
                            </div>
                    </div>
            </div>
           
           `
      })
}

getFilm()

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getFilm(input.value)
})
//console.log(form,input)

