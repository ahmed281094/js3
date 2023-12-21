var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');
var arrayList ;
if(localStorage.getItem('arrayList') == null){
    arrayList = [];
}else {
    arrayList = JSON.parse(localStorage.getItem('arrayList'));
    display(arrayList)
}

function validaTT(){
    if (URL.canParse(bookmarkURL.value)){
        return true;
    }else {
        alert('enter a valid URL')
    }
}
function addSite(){
    if(validaTT()==true){var bookmark = {
        name: bookmarkName.value,
       site: bookmarkURL.value
       
 }
    arrayList.push(bookmark);
    bookmarkName.value = ''
    bookmarkURL.value = ''
    
    localStorage.setItem('arrayList',JSON.stringify(arrayList));}






}

function display(list){
var cartona = ``
for (var i = 0;i < list.length;i++)
cartona += `<tr>
<td>${i + 1}</td>
<td>${list[i].name}</td>
<td><button class="btn btn-sm"><a href="${list[i].site}" target = "blank">visit</a></button></td>
<td><button onclick="deleteSite(${i})" class="btn btn-delete btn-sm">delete</button></td>
</tr>
`

document.getElementById('tbody').innerHTML = cartona;
}
function deleteSite(index){
    arrayList.splice(index,1)
    localStorage.setItem('arrayList',JSON.stringify(arrayList));

    display(arrayList)
}


