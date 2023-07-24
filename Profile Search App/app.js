const profile = new Profile();
const ui = new UI();

const searchProfile = document.getElementById('searchProfile');

searchProfile.addEventListener('keyup',(event)=>{
    ui.clear();
    let text = event.target.value;
    if(text !== '') { profile.getProfile(text)
        .then(response =>{(response.profile.length === 0) ?
            ui.showAlert(text) :
            ui.showProfile(response.profile[0])
            ui.showTodo(response.todo)
        }
        )
        .catch(err => {
            ui.showAlert(text);
        })


    }
})
