$('.admin').click(function(){
    $('.dropmenu').slideToggle(500);
  });
  $('.click').click(function(){
    $('.drop1').slideToggle(400);
  });
  $('.admin2').click(function(){
    $('.submenu').slideToggle(400);
  });
  $('.admin3').click(function(){
    $('.submenu1').slideToggle(400);
  });
  $('.admin4').click(function(){
    $('.submenu2').slideToggle(400);
  });
  $('.admin5').click(function(){
    $('.submenu3').slideToggle(400);
  });
  $('.admin6').click(function(){
    $('.submenu4').slideToggle(400);
  });
  $('.admin7').click(function(){
    $('.submenu7').slideToggle(400);
  });
  $('.admin8').click(function(){
    $('.submenu8').slideToggle(400);
  });
  $('.admin9').click(function(){
    $('.submenu9').slideToggle(400);
  });
  $('.admin10').click(function(){
    $('.submenu10').slideToggle(400);
  });
  $('.admin11').click(function(){
    $('.submenu11').slideToggle(400);
  });
  $('.admin12').click(function(){
    $('.submenu12').slideToggle(400);
  });
  $('.admin13').click(function(){
    $('.submenu13').slideToggle(400);
  });
  $('.admin14').click(function(){
    $('.submenu14').slideToggle(400);
  });

  
 
  $('.c').click(function(){
    $('.drop2').slideToggle(400);
  });
  
  
// For Full Screen
function toggleFullScreen(elem) {
  if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
    if (elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}



// Calender
  var Cal = function(divId) {

    //Store div id
    this.divId = divId;
  
    // Days of week, starting on Sunday
    this.DaysOfWeek = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];
  
    // Months, stating on January
    this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  
    // Set the current month, year
    var d = new Date();
  
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
  
  };
  
  // Goes to next month
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  };
  
  // Goes to previous month
  Cal.prototype.previousMonth = function() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  };
  
  // Show current month
  Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };
  
  // Show month (year, month)
  Cal.prototype.showMonth = function(y, m) {
  
    var d = new Date()
    // First day of the week in the selected month
    , firstDayOfMonth = new Date(y, m, 1).getDay()
    // Last day of the selected month
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Last day of the previous month
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  
  
    var html = '<table>';
  
    // Write selected month and year
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
  
  
    // Write the header of the days of the week
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
  
    // Write the days
    var i=1;
    do {
  
      var dow = new Date(y, m, i).getDay();
  
      // If Sunday, start new row
      if ( dow == 0 ) {
        html += '<tr>';
      }
      // If not Sunday but first day of the month
      // it will write the last days from the previous month
      else if ( i == 1 ) {
        html += '<tr>';
        var k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(var j=0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
  
      // Write the current day in the loop
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      // If Saturday, closes the row
      if ( dow == 6 ) {
        html += '</tr>';
      }
      // If not Saturday, but last day of the selected month
      // it will write the next few days from the next month
      else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 6; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
  
      i++;
    }while(i <= lastDateOfMonth);
  
    // Closes table
    html += '</table>';
  
    // Write HTML to the div
    document.getElementById(this.divId).innerHTML = html;
  };
  
  // On Load of the window
  window.onload = function() {
  
    // Start calendar
    var c = new Cal("divCal");			
    c.showcurr();
  
    // Bind next and previous button clicks
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.previousMonth();
    };
  }
  
  // Get element by id
  function getId(id) {
    return document.getElementById(id);
  }
