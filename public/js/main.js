const deleteBtn = document.querySelectorAll('.del')
const editBtn = document.querySelectorAll('.edit')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deletePost)
})

Array.from(editButton).forEach((el) => {
    el.addEventListener('click', addInputField)
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

function addInputField() {
    //need top add inputfield to the dom and a submit button
    //onclick(submit) calls editPost function?
    const input = document.createElement('input')
    input.className = ""
    const submit = document.createElement('button')
    submit.addEventListener('click', () => console.log(input.value))

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
    }
}