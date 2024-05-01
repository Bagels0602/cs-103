pics = ['snowPetrel.jpg', 'snowPetrel1.jpg', 'snowPetrel2.jpg']


function findIndex(currentPic) {
    for (let i = 0; i < pics.length; i++) {
        if (pics[i] === currentPic)
            return i
    }
    return -1
}


function dec() {
    currentPic = document.getElementById("snowPetrel").src
    currentPic = currentPic.slice(currentPic.lastIndexOf("/")+1)
    index = findIndex(currentPic)


    if (index !== 0)
        index-=1


    document.getElementById("snowPetrel").src = "../src/" + String(pics[index])
}


function inc() {
    currentPic = document.getElementById("snowPetrel").src
    currentPic = currentPic.slice(currentPic.lastIndexOf("/")+1)
    index = findIndex(currentPic)


    if (index !== pics.length-1)
        index+=1


    document.getElementById("snowPetrel").src = "../src/" + String(pics[index])
}
