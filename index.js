





class GitHubApi {
    constructor() {
        
        this.button = document.querySelector("#submit")
        this.input = document.querySelector("#myInput")
        this.outputContainer = document.querySelector('.tbody1')
        this.button.addEventListener('click', this.getData.bind(this))

    }
async getData(){
    
    let user = this.input.value
    
    await fetch(`https://api.github.com/users/${user}/repos`)
        
    .then(response => response.json())
    .then(data => {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            var time = data[i].updated_at.slice(0,19).replace("T", " ")
            
              var e = `
                       <tr scope="row" class =""> 
                        <td scope="col" class="">${data[i].name}</td>
                        <td scope="col" class=""> updated am ${time}</td>
                        <td> <a href="https://github.com/${user}/${data[i].name}" target="_blank"> <button class="btn btn-info">Get The Link</button></a></td>
                       </tr>
                    `
                  document.querySelector('.tbody1').insertAdjacentHTML("beforeend", e)
                }
          })

          .catch(error => console.error(error))
      }
 
    }
    new GitHubApi()



