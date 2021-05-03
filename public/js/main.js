const deleteBtn = document.querySelectorAll('.del')
const editBtn = document.querySelectorAll('.edit')
const updateBtn = document.querySelectorAll('.updateBtn')
const likeBtn = document.querySelectorAll('.fas.fa-heart')
console.log("likebtn", likeBtn)

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deletePost)
})

Array.from(editBtn).forEach((el) => {
    el.addEventListener('click', (e) => addInputField(e))
})

Array.from(updateBtn).forEach((el) => {
    el.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const div = document.querySelector(`#div-${id}`)
        const inputField = document.querySelector(`#input-${id}`)
        if (inputField.value) {
            div.classList.toggle("editDiv");
            console.log(inputField.value);
            (async () => {
                const newTitle = inputField.value
                const response = await fetch('post/updatePost', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({id, newTitle})
                })
                const data = await response.json()
                console.log(data)
                location.reload();
            })()

        }
    })
})

Array.from(likeBtn).forEach(element => {
    element.addEventListener('click', addLike)
})

async function deletePost() {
    const imageId = this.parentNode.dataset.id
    try {
        const response = await fetch('post/deletePost', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                imageId: imageId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

function addInputField(e) {
    //need to add inputfield to the dom and a submit button
    //onclick(submit) calls editPost function?
    console.log("I'm running or w/e")
    const id = e.target.getAttribute('data-id')
    const div = document.querySelector(`#div-${id}`)
    div.classList.toggle("editDiv")

}

async function editPost() {

    const id = this.parentNode.dataset.id
    try {
        const response = await fetch('post/editPost', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                imageId: imageId,
                title: title
            })
        })
    } catch (err) {
        console.log(err)
    }
}

async function addLike(event) {
    const postId = event.target.getAttribute('data-id')
    console.log(postId)
    try {
        const response = await fetch('feed/addLike', {
            method: 'put',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                postId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}