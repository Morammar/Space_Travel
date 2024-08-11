function save_func(){
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Nationality = document.getElementById("nation").value;
    var Junior = document.getElementById("Junior").value;
    var Mid = document.getElementById("Mid").value;
    var Senior = document.getElementById("Senior").value;
    var Question = document.getElementById("motivational-q").value;
    var Checkbox = document.getElementById("consent").value;
    
    var data = [];
    data.push(Name);
    data.push(Email);
    data.push(Nationality);
    data.push(Junior);
    data.push(Mid);
    data.push(Senior);
    data.push(Question);
    data.push(Checkbox);

    var data_string = JSON.stringify(data);
    var file = new Blob ([data_string],{type:"text"});

    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.txt";
    anchor.click();
}
