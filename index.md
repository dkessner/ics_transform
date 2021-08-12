---
layout: default
---

Enter your custom event descriptions:

<hr/>

<table>
<tr><td>B</td><td><input type="text" id="B" size="80%"></td></tr>
<tr><td>C</td><td><input type="text" id="C" size="80%"></td></tr>
<tr><td>D</td><td><input type="text" id="D" size="80%"></td></tr>
<tr><td>E</td><td><input type="text" id="E" size="80%"></td></tr>
<tr><td>F</td><td><input type="text" id="F" size="80%"></td></tr>
<tr><td>G</td><td><input type="text" id="G" size="80%"></td></tr>
<tr><td>H</td><td><input type="text" id="H" size="80%"></td></tr>
<tr><td>I</td><td><input type="text" id="I" size="80%"></td></tr>
</table>

<table>
<tr><td>begin</td><td><input type="date" name="start" id="startTime" value="2021-08-30"></td></tr>
<tr><td>end</td><td><input type="date" name="end" id="endTime" value="2022-05-31"></td></tr>
</table>

<input type="button" value="Generate calendar!" onclick="generateCalendar()">

<br/>
<hr/>
<br/>

## Instructions

- Enter descriptions for the periods you want
- Click the "Generate calendar!" button
- (_automatic_) Download / save `my_rotation.ics`
- Import the `my_rotation.ics` into your Google Calendar.

<br/>

## Google Calendar import details

- Open Google Calendar in your browser

- Create a new calendar (_optional_)
    - _Why?_ Creating a new calendar lets you easily turn the calendar view
      on/off, and you can share it too.  You could create a calendar for each
      class/course.
    - Click the Settings icon, choose "Settings"
    - (_left sidebar_) Click "Add calendar", "Create new calendar"
    - Give your new calendar a name and click the "Create calendar" button 


- Import `my_rotation.ics`
    - Go to / stay in the Settings page
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
        let input = document.getElementById(period);
        if (input.value)
            schedule[period] = input.value;
    }

    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    let ics = ics_transform.doTransformation(schedule, startTime, endTime);

    download("my_rotation.ics", ics);
}

</script>



