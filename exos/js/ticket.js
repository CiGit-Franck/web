document.getElementById('addComment').addEventListener('click', function (event) {
    const newFirstname = document.getElementById("firstname").value;
    const newName = document.getElementById("lastname").value;
    const newComment = document.getElementById("comment").value;
    
    const newTR = document.createElement("tr");

    const newTDFirstname = document.createElement("td");
    newTDFirstname.innerText = newFirstname;
    const newTDName = document.createElement("td");
    newTDName.innerText = newName;
    const newTDComment = document.createElement("td");
    newTDComment.innerHTML = newComment;

    newTR.appendChild(newTDFirstname);
    newTR.appendChild(newTDName);
    newTR.appendChild(newTDComment);

    document.getElementById('tableComments').appendChild(newTR);

    event.preventDefault();
})
