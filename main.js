const articleRef = document.querySelector("#congressional-rep")
console.log(articleRef)

let paragraphElement = document.createElement("p")
let paragraphTextNode = document.createTextNode("Made up mission statement")
paragraphElement.appendChild(paragraphTextNode)
console.log(paragraphElement);

articleRef.appendChild(paragraphElement)

const congressionalDistAttr = document.createAttribute("congressional-district")
congressionalDistAttr.value = "5"

articleRef.setAttributeNode(congressionalDistAttr)
