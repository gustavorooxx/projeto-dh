function moreInfoBtn() {

    var descriptionBtn = document.getElementById("btn-description");
    var moreInfoBtn = document.getElementById("btn-moreInfo")
    var descInfo = document.getElementById("description")
    var moreInfo = document.getElementById("moreInfo")

    descriptionBtn.style.backgroundColor = "white"
    descriptionBtn.style.color = "black"
    descriptionBtn.style.border = "1px solid #575757"
    moreInfoBtn.style.border = "none"
    moreInfoBtn.style.backgroundColor = "#003884"
    moreInfoBtn.style.color = "white"
    descInfo.style.display = "none"
    moreInfo.style.display = "block"
  }

  function descriptionBtn() {

    var descriptionBtn = document.getElementById("btn-description");
    var moreInfoBtn = document.getElementById("btn-moreInfo")
    var descInfo = document.getElementById("description")
    var moreInfo = document.getElementById("moreInfo")

    moreInfoBtn.style.backgroundColor = "white"
    moreInfoBtn.style.color = "black"
    moreInfoBtn.style.border = "1px solid #575757"
    descriptionBtn.style.backgroundColor = "#003884"
    descriptionBtn.style.color = "white"
    descriptionBtn.style.border = "none"
    descInfo.style.display = "block"
    moreInfo.style.display = "none"
}