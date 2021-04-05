


function addRow() 
{
    var table = document.getElementById("table1");
    //Get info for new row
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var date = document.getElementById("date").value;
    var vaccinetype = document.getElementById("vaccinetype").value;
    var location = document.getElementById("location").value;           


    //Add cells
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


    // Add some text to the new cells:
    cell1.innerHTML = name;
    cell2.innerHTML = surname; 
    cell3.innerHTML = date;
    cell4.innerHTML = vaccinetype;
    cell5.innerHTML = location;
}

function processFormSubmission() {

    console.log("we get here");

    var first_name = document.getElementById("name").value;
    var last_name = document.getElementById("surname").value;
    var location = document.getElementById("location").value;

  
    document.getElementById("name").innerHTML = first_name;
    document.getElementById("surname").innerHTML = last_name;
    document.getElementById("location").innerHTML = location;
  
    return true; //submit form i.e. process action
    // return false;   // do not submit the form
  }

  