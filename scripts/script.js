new fullpage('#fullpage', {
    anchors: ['home', 'about', 'education', 'experience', 'skills', 'connect'],
    navigation: true,
    sectionsColor: ['#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF','#FFFFF', '#FFFFF', '#FFFFF'],
	autoScrolling: false,
	fitToSection: true,
	scrollbar: true,
    navigationPosition: 'left',
    navigationTooltips: ['First page', 'About', 'Education', 'Experience', 'Skills', 'Connect'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
});

function toggle(isTech) {
	if(isTech) {
		$("#techskills").removeClass('inactive-custom');
		$("#personalskills").removeClass('active-custom');
		$("#techskills").addClass('active-custom');
		$("#personalskills").addClass('inactive-custom');
		technicalChart();
	}
	else {
		$("#techskills").removeClass('active-custom');
		$("#personalskills").removeClass('inactive-custom');
		$("#techskills").addClass('inactive-custom');
		$("#personalskills").addClass('active-custom');
		personalChart();		
	}
}


function personalChart() {
	new Chart(document.getElementById("bar-chart-horizontal"), {
	    type: 'horizontalBar',
	    data: {
	      labels: ["Participatory Planning Methods", "Field Surveys & Data Analysis", "Compilation & Report Writing", "Research & Documentation", "Accustomed with Teamwork", "LEED Green Building Certification", "Data Visualization and Presentations", "Event Organization and Resources Management"],
	      datasets: [
	        {
	          backgroundColor: ["#918a83", "#565247","#eccbc6","#d09090","#da6767", "#9f4343", "#505452", "#2d2f2e"],
	          data: [7,8,9,8,9,7,10,9]
	        }
	      ]
	    },
	    options: {
	    	maintainAspectRatio: false,
			legend: { display: false },
			title: {
			display: false,
				text: 'Predicted world population (millions) in 2050'
			},
			scales: {
				yAxes: [{
					position: "left"
				}],
				xAxes: [{
		            display: false,
		            ticks: {
		                beginAtZero: true,
		                max: 10,
		                min: 0
		            }
		        }]
			}
	    }
	});
}

function technicalChart() {
	new Chart(document.getElementById("bar-chart-horizontal"), {
	    type: 'horizontalBar',
	    data: {
	      labels: ["ArcGIS (ESRI software and online version)", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "AutoCAD 2D", "SketchUp", "Microsoft Office Suite (Word, PowerPoint, Excel, Outlook)", "Other Mapping Software (CartoDB, Mapbox, GeoDa)"],
	      datasets: [
	        {
	          backgroundColor: ["#918a83", "#565247","#eccbc6","#d09090","#da6767", "#9f4343", "#505452", "#2d2f2e"],
	          data: [8,9,7,6,7,6,10,9]
	        }
	      ]
	    },
	    options: {
	    	maintainAspectRatio: false,
			legend: { display: false },
			title: {
			display: false,
				text: 'Predicted world population (millions) in 2050'
			},
			scales: {
				yAxes: [{
					position: "left"
				}],
				xAxes: [{
		            display: false,
		            ticks: {
		                beginAtZero: true,
		                max: 10,
		                min: 0
		            }
		        }]
			}
	    }
	});
}

const element = document.getElementById('chart');
const data = [{
    label: 'Urban Planning Experience',
    data: [{
        label: 'CEE Volunteer',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2015, 4, 1]),
        to: new Date([2015, 10, 1]),
        customClass: 'grey-interval'
    }, {
        label: 'CEE',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2015, 11, 1]),
        to: new Date([2015, 12, 1]),
        customClass: 'grey-interval'
    }, {
        label: 'MHT',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 4, 1]),
        to: new Date([2017, 5, 1]),
        customClass: 'dark-pink-interval'
    }, {
        label: 'ELARA',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2017, 10, 1]),
        to: new Date([2018, 4, 1]),
        customClass: 'dark-pink-interval'
    }, {
        label: 'SCAG',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 4, 1]),
        to: new Date([2018, 11, 1]),
        customClass: 'pink-interval'    	
    }]
}, 
{
    data: [{
        label: 'CoE',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 5, 1]),
        to: new Date([2016, 7, 1]),
        customClass: 'pink-interval'
    }, {
        label: 'Archiprix',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 8, 1]),
        to: new Date([2017, 2, 1]),
        customClass: 'light-pink-interval'
    },
    {
        label: 'LEED GA',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 6, 1]),
        to: new Date([2020, 6, 1]),
        customClass: 'grey-interval'
    }]	
},
{
    label: 'Co-curricular Leadership Roles',
    data: [{
        label: 'Placement Coordinator',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 3, 1]),
        to: new Date([2017, 4, 1]),
        customClass: 'grey-interval'
    }, {
        label: 'PWA Co-Chair',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 5, 1]),
        to: new Date([2019, 4, 1]),
        customClass: 'grey-interval'
    }] 
},
{
    data: [{
        label: 'ASPD Professional Chair',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 5, 1]),
        to: new Date([2019, 4, 1]),
        customClass: 'light-grey-interval'
    }] 
},
{
    data: [{
        label: 'Student Ambassador',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2017, 9, 1]),
        to: new Date([2019, 5, 1]),
        customClass: 'dark-grey-interval'
    }] 
}, {
    label: 'Other Experiences',
    data: [{
        label: 'CEPT TA',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2017, 1, 1]),
        to: new Date([2017, 5, 1]),
        customClass: 'dark-grey-interval'
    }, {
        label: 'On-Campus Student Worker',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2017, 8, 1]),
        to: new Date([2018, 8, 1]),
        customClass: 'pink-interval'
    }, {
        label: 'Peer Advisor',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 9, 1]),
        to: new Date([2019, 4, 1]),
        customClass: 'grey-interval'
    }]
},
{
    data: [{
        label: 'First Aid Executive',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 1, 1]),
        to: new Date([2017, 4, 1]),
        customClass: 'grey-interval'
    },
    {
        label: 'Boot Camp Coordinator',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2018, 5, 1]),
        to: new Date([2019, 4, 1]),
        customClass: 'dark-pink-interval'
    }] 
},
{
    data: [{
        label: 'CEPT Student Worker',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2015, 11, 1]),
        to: new Date([2016, 4, 1]),
        customClass: 'grey-interval'
    }] 
}];
const timeline = new TimelineChart(element, data, {
    enableLiveTimer: true,
    tip: function(d) {
        return d.label;
    }
});
// .onVizChange(e => console.log(e))



function tooltip(label) {
    // $('#chart-text')
}
