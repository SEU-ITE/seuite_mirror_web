function modify()
{
    try
    {
        var example = addItem("odd", "hanyuu", "https://hanyuufurude.github.io/", "2019/05/02", "https:\\\\hanyuu.ml", "okey", "1kb", "none", "https:\\\\hanyuu.ml")
        console.log(example);
        document.getElementById("inner-table").appendChild(example);
    }
    catch (error)
    {
        alert("很抱歉，出错了~")
        alert(error)
    }
}
function addItem(classType,name, nameLink, updateDate, mirror, status, mirrorSize, helpInformation,helpInformationLink)
{
    var item = document.createElement("tr");
    item.className = classType

    var nameTd = document.createElement("td");
    var nameA = document.createElement("a");
    nameA.innerHTML = name;
    nameA.href = nameLink;
    nameTd.className = "name"
    nameTd.appendChild(nameA);
    item.appendChild(nameTd);

    var updateDateTd = document.createElement("td");
    updateDateTd.appendChild(document.createTextNode(updateDate));
    updateDateTd.className = "updateDate"
    item.appendChild(updateDateTd);

    var mirrorTD = document.createElement("td");
    mirrorTD.appendChild(document.createTextNode(mirror));
    mirrorTD.className = "mirror"
    item.appendChild(mirrorTD);

    var statusTD = document.createElement("td");
    statusTD.appendChild(document.createTextNode(status));
    statusTD.className = "status"
    item.appendChild(statusTD);

    var mirrorSizeTD = document.createElement("td");
    mirrorSizeTD.appendChild(document.createTextNode(mirrorSize));
    mirrorSizeTD.className = "mirrorSize"
    item.appendChild(mirrorSizeTD);

    var helpInformationTD = document.createElement("td");
    var helpInformationA = document.createElement("a");
    helpInformationA.innerHTML = helpInformation;
    helpInformationA.href = helpInformationLink;
    helpInformationTD.appendChild(helpInformationA)
    helpInformationTD.className = "helpInformation"
    item.appendChild(helpInformationTD);

    return item;
}