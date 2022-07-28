---
layout: page
---

Enter your class info.  Anything you leave blank will be ignored.

<hr/>

<style>
td {
    text-align: center;
}
</style>

<table>
<tr><td></td><td>Class</td><td>Location</td><td>Description</td></tr>
<tr><td>B</td><td><input type="text" id="B" size="20%"></td><td><input type="text" id="B_location" size="10%"></td><td><input type="text" id="B_description" size="30%"></td></tr>
<tr><td>C</td><td><input type="text" id="C" size="20%"></td><td><input type="text" id="C_location" size="10%"></td><td><input type="text" id="C_description" size="30%"></td></tr>
<tr><td>D</td><td><input type="text" id="D" size="20%"></td><td><input type="text" id="D_location" size="10%"></td><td><input type="text" id="D_description" size="30%"></td></tr>
<tr><td>E</td><td><input type="text" id="E" size="20%"></td><td><input type="text" id="E_location" size="10%"></td><td><input type="text" id="E_description" size="30%"></td></tr>
<tr><td>F</td><td><input type="text" id="F" size="20%"></td><td><input type="text" id="F_location" size="10%"></td><td><input type="text" id="F_description" size="30%"></td></tr>
<tr><td>G</td><td><input type="text" id="G" size="20%"></td><td><input type="text" id="G_location" size="10%"></td><td><input type="text" id="G_description" size="30%"></td></tr>
<tr><td>H</td><td><input type="text" id="H" size="20%"></td><td><input type="text" id="H_location" size="10%"></td><td><input type="text" id="H_description" size="30%"></td></tr>
<tr><td>I</td><td><input type="text" id="I" size="20%"></td><td><input type="text" id="I_location" size="10%"></td><td><input type="text" id="I_description" size="30%"></td></tr>
</table>

<table>
<tr><td>Start Date</td><td><input type="date" name="start" id="startTime" value="2022-08-30"></td></tr>
<tr><td>End Date</td><td><input type="date" name="end" id="endTime" value="2023-06-15"></td></tr>
</table>

<input type="button" value="Generate calendar!" onclick="generateCalendar()">

<br/>
<hr/>
<br/>

## Instructions

1. Fill out the form above
2. Click the "Generate calendar!" button to download / save `my_rotation.ics`
3. Import `my_rotation.ics` into your Google Calendar

<br/>
<hr/>
<br/>


## Google Calendar detailed instructions (step #3 above)

### Create a new calendar (_optional_)

- _Why?_ Creating a new calendar lets you easily turn the calendar view
  on/off, and you can share it too.  You could create a calendar for each
  class/course.
- Click the Settings icon, choose "Settings"
- (_left sidebar_) Click "Add calendar", "Create new calendar"
- Give your new calendar a name and click the "Create calendar" button 



### Import `my_rotation.ics`

- Go to (or stay in) the Settings page in Google Calendar
- (_left sidebar_) Click "Import & export", "Import"
- Choose the calendar you want to add the events to, and select the
    `my_rotation.ics` file that you saved
- Click "Import".



<script src="js/ics_transform_bundle.js"></script>

<script>


function download(filename, text) 
{
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function generateCalendar() 
{
    let periods = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let schedule = {};

    for (let period of periods)
    {
        let inputClass = document.getElementById(period);
        if (inputClass.value)
        {
            schedule[period] = {};
            schedule[period]["summary"] = inputClass.value;

            let inputLocation = document.getElementById(period + "_location");
            if (inputLocation)
                schedule[period]["location"] = inputLocation.value;

            let inputDescription = document.getElementById(period + "_description");
            if (inputDescription)
                schedule[period]["description"] = inputDescription.value;
        }
    }

    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    let ics = ics_transform.doTransformation(schedule, startTime, endTime);

    download("my_rotation.ics", ics);
}

</script>



