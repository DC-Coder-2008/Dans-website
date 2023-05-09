function HandleFormData () {

    let valid = true

    const formData = {
        Fname: document.getElementById("Fname").value.trim(),
        Midname: document.getElementById("Midname").value.trim(),
        Surname: document.getElementById("Surname").value.trim(),
        Age: document.getElementById("Age").value.trim(),
        DoB: document.getElementById("DoB").value.trim(),
        Pets: document.getElementById("PetsOtherInput").value.trim(),
        Country: document.getElementById("Country").value.trim(),
    }
        

    if (formData.Fname == null || formData.Fname == "") {
        valid = false;
    }

    if (formData.Surname == null || formData.Surname == "") {
        valid = false;
    }

    if (isNaN( parseInt( formData.Age)) == true) {
        valid = false;
    }

    const DoB = formData.DoB.split("/");

    if (DoB.length != 3) {
        valid=false;
    }


    for (let i = 0; i < DoB.length; i++) {
        if (DoB[i] == "") {
            valid=false
        }
        if (isNaN(parseInt(DoB[i])) == true) {
            valid = false
        }
    }



    if (formData.Country == null || formData.Country == "") {
        valid = false;
    }

    
    if ( isNaN( parseInt( formData.Pets)) == true) {
            valid = false;
    }

    let validatedFormData = {

    }

    if (valid == true) {
        Hide(["errorMessage"]);

        validatedFormData = {
            Fname: document.getElementById("Fname").value.trim(),
            Midname: document.getElementById("Midname").value.trim(),
            Surname: document.getElementById("Surname").value.trim(),
            Age: parseInt(document.getElementById("Age").value.trim()),
            DoB: parseInt(DoB[0]) + "/" + parseInt(DoB[1]) + "/" + parseInt(DoB[2]),
            Pets: parseInt(document.getElementById("PetsOtherInput").value.trim()),
            Country: document.getElementById("Country").value.trim(),
        }
            
        const dataAsString = JSON.stringify(validatedFormData);
        window.location.href = "dan_webend_database.htm?data=" + encodeURIComponent(dataAsString);
    
        SaveToDatabase(validatedFormData);
    }
    else {
        Show(["errorMessage"]);
    }

   

}


function SaveToDatabase(formData) {

    const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database('dan_form_data.db');

// Insert the form data into the database
db.run('INSERT INTO Form_data (Fname, Midname, Surname, Age, DoB, Pets, Country) VALUES (?, ?, ?, ?, ?, ?, ?)', 
  [formData.Fname, formData.Midname, formData.Surname, formData.Age, formData.DoB, formData.Pets, formData.Country], 
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data inserted successfully!');
    }

    // Close the database connection
    db.close();
  });
}