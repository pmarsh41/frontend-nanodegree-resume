var bio = {
    "name": "Phil Marshall",
    "role": "Web Developer",
    "contacts": {
        "mobile": "646-643-5162",
        "email": "marshall.phillip@gmail.com",
        "github": "pmarsh41",
        "twitter": "@pmarsh41",
        "location": "Astoria, NY"
    },
    "welcomeMessage": "lorem ipsum dolor sit",
    "picture": 'images/fry.jpg',
    "skills": [
        "Javascript", "HTML", "CSS", "Product Management", "Bootstrap"
    ]
};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", "images/fry.jpg"));

    //for loop for skills to iterate through all of them and append them:
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }


    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

};

bio.display();

var work = {
    "jobs": [{
        "employer": "The Paley Center for Media",
        "title": "Web Producer, Interactive Media",
        "locations": "New York, New York",
        "dates": "2015-Present",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."

    }, {
        "employer": "Squad Car Media",
        "title": "Project Manager",
        "locations": "Houston, TX",
        "dates": "2013-2015",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."
    }]
};

/*work.display = function(){
    for (var i = 0; i < work.jobs.length; i++) {
        // created new div for work experience
        $("workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

work.display();*/

// education object

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
        "city": "Houston, TX",
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
};

//education function
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        //$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
    }
    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }
};

education.display();


var projects = {
    "projects": [{
        "title": "Responsive Blog",
        "dates": "2017",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop.",
        "images": ["https://placehold.it/350x296", "https://placehold.it/350x296"]
    }]
};

/*if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio)

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}*/

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDates.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
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
projects.display();

$("#mapDiv").append(googleMap);
