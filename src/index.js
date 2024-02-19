console.log(data);

dogList = document.querySelector('.dogs-list')
main = document.querySelector('.main__dog-section')



function ShowDog(name)
{
    const dog = data.find(x => x.name === name)
    RenderMain(dog)  
}


function RenderForm()
{
    main.innerHTML = ""
    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode('Add a new Dog'))
    form = document.createElement('form')
    form.setAttribute('class', 'form')
    labelname = document.createElement('label')
    labelname.htmlFor = "name"
    labelname.appendChild(document.createTextNode("Dog's name"))

    inputname = document.createElement('input')
    inputname.setAttribute('type', 'text')
    inputname.setAttribute('id', 'name')
    inputname.setAttribute('name', 'name')

    labelimg = document.createElement('label')
    labelimg.htmlFor = "image"
    labelimg.appendChild(document.createTextNode("Dog's picture"))

    inputimg = document.createElement('input')
    inputimg.setAttribute('type', 'url')
    inputimg.setAttribute('id', 'image')
    inputimg.setAttribute('name', 'image')

    labelbio = document.createElement('label')
    labelbio.htmlFor = "bio"
    labelbio.appendChild(document.createTextNode("Dog's bio"))
    inputbio = document.createElement('textarea')
    inputbio.setAttribute('rows', '5')
    inputbio.setAttribute('id', 'bio')
    inputbio.setAttribute('name', 'bio')

    submitButton = document.createElement('input')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('id', 'submit')
    submitButton.setAttribute('name', 'submit')
    submitButton.setAttribute('value', "Let's add a dog!")
    submitButton.setAttribute('class', 'form__button')

    form.appendChild(labelname)
    form.appendChild(inputname)
    form.appendChild(labelimg)
    form.appendChild(inputimg)
    form.appendChild(labelbio)
    form.appendChild(inputbio)
    form.appendChild(submitButton)
    var data = new FormData(form)
    console.log(data)

    main.appendChild(h2)
    main.appendChild(form)

}

function RenderMain(dog)
{
    main.innerHTML = ""
    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode(dog.name))

    img = document.createElement('img')
    img.src = dog.image
    img.alt = ""

    div = document.createElement('div')
    div.setAttribute('class', "main__dog-section__desc")
    h3 = document.createElement('h3')
    h3.appendChild(document.createTextNode('Bio'))
    p = document.createElement('p')
    p.appendChild(document.createTextNode(dog.bio))
    div.appendChild(h3)
    div.appendChild(p)

    naughtyp = document.createElement('p')
    em = document.createElement('em')
    em.appendChild(document.createTextNode('Is naughty?'))
    naughtyp.appendChild(em)
    naughtyp.appendChild(document.createTextNode(' yes!'))

    button = document.createElement('button')
    button.appendChild(document.createTextNode('Good dog!'))




    main.appendChild(h2)
    main.appendChild(img)
    main.appendChild(div)
    main.appendChild(naughtyp)
    main.appendChild(button)

}

function RenderDogList(name)
{
    li = document.createElement('li')
    li.setAttribute('class', "dogs-list__button")
    li.addEventListener('click', () => ShowDog(name))
    li.appendChild(document.createTextNode(`${name}`))
    dogList.appendChild(li)
}

function RenderAll()
{
    data.forEach(x => RenderDogList(x.name))
    RenderForm()
}

function Initialise()
{
    RenderAll()
}

Initialise()
