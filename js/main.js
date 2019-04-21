// Variables
////////////////////////////////////////////////////////////////////////////////////
const chartMonthlyTrafficElement = $('#chart-monthly-traffic');
const chartDailyTrafficElement = $('#chart-daily-traffic');
const chartPlatformTrafficElement = $('#chart-platform-traffic');

const emailNotificationsPrefs = $('#email-prefs');
const profilePrefs = $('#profile-prefs');
const timezonePrefs = $('#timezone-prefs');
const savePrefsButton = $('button[name=save]');

const alertDiv = $('.div--alert');
const closeAlertButton = $('.close');

const notificationPopupDiv = $('.div--notification-popup');
const notificationButton = $('#notification-button');
const greenNotificationIcon = $('.new');

const sendMessageButton = $('button[type=submit]');

// Helper functions

const convertStringToBoolean = string => {
  return (string === 'true')
}

const fieldsAreEmpty = () => {

  const userField = $('#username');
  const messageField = $('#message');

  if (userField.val() === '' || messageField.val() === '') {
    return true
  }
  return false
}

// Charts
////////////////////////////////////////////////////////////////////////////////////

// Chart.defaults.global.legend.display = false;

const chartMonthlyTraffic = new Chart(chartMonthlyTrafficElement, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'TRAFFIC',
      data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      backgroundColor: 'rgba(226, 227, 244, 0.5)',
      borderColor: 'rgba(115, 121, 186, 1)',
      borderWidth: 1,
      pointBackgroundColor: '#fff',
      lineTension: 0

    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
  }
});

const chartDailyTraffic = new Chart(chartDailyTrafficElement, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'DAILY TRAFFIC',
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: 'rgba(104, 108, 183, 1)',
      borderColor: 'rgba(115, 121, 186, 1)',
      borderWidth: 1,

    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },

  }
});

const chartPlatformTraffic = new Chart(chartPlatformTrafficElement, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      label: 'MOBILE USERS',
      data: [25, 10, 65],
      backgroundColor: ['rgba(103, 168, 183, 1)', 'rgba(118, 194, 132, 1)', 'rgba(104, 108, 183, 1)'],
      borderWidth: 1,

    }]
  },
  options: {
  }
});

// Notifications
////////////////////////////////////////////////////////////////////////////////////
notificationButton.click( () => {

  // hide the green notification icon
  greenNotificationIcon.css('display', 'none');

  if(notificationPopupDiv.css('display') === 'none') {
    notificationPopupDiv.css('display', 'grid');
  } else {
    notificationPopupDiv.css('display', 'none');
  }
});

notificationPopupDiv.on('click', 'button', (event) => {
  const closeNotificationButton = $(event.target);

  if(closeNotificationButton.attr('id') !== 'close-all-button') {
    const closeNotificationDiv = closeNotificationButton.parent();
    closeNotificationDiv.hide();
  } else {
    notificationPopupDiv.css('display', 'none');
  }
});

// Alert div
////////////////////////////////////////////////////////////////////////////////////
closeAlertButton.click( () => {
  alertDiv.slideUp(1000); // 1 second
});

// Send message button
sendMessageButton.click( (event) => {
  event.preventDefault();
  if(fieldsAreEmpty()) {
    alert('All fields must be filled out!')
  } else {
    alert('Message has been sent!')
  }
});
////////////////////////////////////////////////////////////////////////////////////

// Local storage
////////////////////////////////////////////////////////////////////////////////////
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false
  }
}

savePrefsButton.click( () => {
  // check first if timezone is selected, if not, show alert
  if(timezonePrefs.val() === null) {
    alert('Please select timezone!');
    return;
  }

  localStorage.emailPrefs = emailNotificationsPrefs.prop('checked');
  localStorage.profilePrefs = profilePrefs.prop('checked');
  localStorage.timezonePrefs = timezonePrefs.val();
  console.log(`Successfully saved preferences to localStorage`);
});

// A $( document ).ready() block. This is fired when the page is completely loaded
$(document).ready( ()=> {
  // load the user settings from the localStorage
  // we need to convert the string to boolean (for the sliders) first because localStorage stores data in strings.
  const emailSettings = convertStringToBoolean(localStorage.emailPrefs);
  const profileSettings = convertStringToBoolean(localStorage.profilePrefs);
  const timezoneSettings = localStorage.timezonePrefs;

  emailNotificationsPrefs.prop('checked', emailSettings);
  profilePrefs.prop('checked', profileSettings);
  timezonePrefs.val(timezoneSettings).change();
});
