var Body = {
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
};
var Links = {
  setColor: function (color) {
    var i = 0;
    var alist = document.querySelectorAll("a");
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};

function nightDayHandler(self){  
  if(self.value=='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('pink'); 
    //self.value='day';
    document.querySelector('#night_day_top').value = 'day';
    document.querySelector('#night_day_bottom').value = 'day';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');        
    Links.setColor('turquoise');
    //self.value='night';
    document.querySelector('#night_day_top').value = 'night';
    document.querySelector('#night_day_bottom').value = 'night';
  }
} 
