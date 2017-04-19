var formattedName = HTMLheaderName.replace("%data%", "Phil Marshall");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");
$("#header").append(formattedRole);

var bio = {
    "name": "Phil Marshall",
    "role": "Web Developer",
    "contacts": {
        "mobile": "646-643-5162",
        "github": "pmarsh41",
        "twitter": "@pmarsh41",
        "location": "New York, NY"
    },
    "welcomeMessage": "lorem ipsum dolor sit",
    "skills": [
        "Javascript", "HTML", "CSS", "Project Management"
    ],
    "bioPic": "images/fry.jpg"
}

var education = {
    "schools": [{
        "name": "St. Francis College",
        "city": "Brooklyn, NY",
        "degree": "BA",
        "majors": ["Philosophy", "Political Science"],
        "gradDate": "2010",
        "url": "http://sfc.edu"
    }, {
        "name": "The Iron Yard",
        "city": "Houston",
        "degree": "Immersive Bootcamp",
        "majors": "Front End Development",
        "dates": "2015",
        "url": "https://www.theironyard.com/"
    }],
    "onlineCourses": [{
        "title": "Front End Development Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
}

var work = {
    "jobs": [{
        "employer": "The Paley Center for Media",
        "title": "Director, Interactive Media",
        "dates": "2015-Present",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."

    }, {
        "employer": "Squad Car Media",
        "title": "Project Manager",
        "dates": "2013-2015",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."
    }]
}

var projects = {
    "projects": [{
        "title": "Responsive Blog",
        "dates": "2017",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop.",
        "images": ["https://placehold.it/1757x1080", "https://placehold.it/1757x1080"]
    }]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
    }
}
displayWork();

$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;

    logClicks(x, y);
});

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
}
$("#mapDiv").append(googleMap);
