//bio object

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
    "biopic": 'images/fry.jpg',
    "skills": [
        "Javascript", "HTML", "CSS", "Product Management", "Bootstrap"
    ]
};

// bio function

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

// work object

var work = {
    "jobs": [{
        "employer": "The Paley Center for Media",
        "title": "Web Producer, Interactive Media",
        "location": "New York, New York",
        "dates": "2015-Present",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."

    }, {
        "employer": "Squad Car Media",
        "title": "Project Manager",
        "location": "Houston, TX",
        "dates": "2013-2015",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop."
    }]
};

// work function

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        // created new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

// education object

var education = {
    "schools": [{
        "name": "St. Francis College",
        "location": "Brooklyn, NY",
        "degree": "BA",
        "majors": ["Philosophy", "Political Science"],
        "dates": "2010",
        "url": "http://sfc.edu"
    }, {
        "name": "The Iron Yard",
        "location": "Houston, TX",
        "degree": "Immersive Bootcamp",
        "majors": "Front End Development",
        "dates": "2015",
        "url": "https://www.theironyard.com/"
    }],
    "onlineCourses": [{
        "title": ["Front End Development Nanodegree"],
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
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
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

// project object

var projects = {
    "projects": [{
        "title": "Responsive Blog",
        "dates": "2017",
        "description": "Bacon ipsum dolor amet frankfurter turkey pastrami nisi. Shankle ex consectetur pork loin. Commodo corned beef leberkas fugiat fatback landjaeger short loin frankfurter ullamco minim. Dolore veniam occaecat t-bone pastrami eu ribeye in shank dolore aute pork chop.",
        "images": ["https://placehold.it/350x296", "https://placehold.it/350x296"]
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        // $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

bio.display();

work.display();

education.display();

projects.display();

$("#mapDiv").append(googleMap);
