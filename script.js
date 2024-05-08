// var button = document.getElementById('sortBtn');
// var sortContent = document.getElementById('sortContent');

// button.addEventListener('click', function() {
//   sortContent.style.display = (sortContent.style.display === 'block') ? 'none' : 'block';
// });

// window.addEventListener('click', function(event) {
//   if (!event.target.matches('#sortBtn')) {
//     sortContent.style.display = 'none';
//   }
// });

document.getElementById("sortBtn").addEventListener("click", function() {
    var content = document.getElementById("sortContent");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  
  document.addEventListener("click", function(event) {
    var content = document.getElementById("sortContent");
    var btn = document.getElementById("sortBtn");
    if (!content.contains(event.target) && event.target !== btn) {
      content.style.display = "none";
    }
  });
  


let tabButtons = document.querySelectorAll(".tabs-num button");
  tabButtons.forEach((button, index) => {
    if (index % 4 === 0) {
      button.disabled = true;
    }
  });



new MultiSelectTag('category', {
    rounded: true,    // default true
    shadow: true,      // default false
    placeholder: 'Search',  // default Search...
    tagColor: {
        textColor: '#327b2c',
        borderColor: '#92e681',
        bgColor: '#e8b65a',
    },
    onChange: function(values) {
        console.log(values)
    }
})

new MultiSelectTag('industry', {
    rounded: true,    // default true
    shadow: true,      // default false
    placeholder: 'Search',  // default Search...
    tagColor: {
        textColor: '#327b2c',
        borderColor: '#92e681',
        bgColor: '#e8b65a',
    },
    onChange: function(values) {
        console.log(values)
    }
})

new MultiSelectTag('status', {
    rounded: true,    // default true
    shadow: true,      // default false
    placeholder: 'Search',  // default Search...
    tagColor: {
        textColor: '#327b2c',
        borderColor: '#92e681',
        bgColor: '#e8b65a',
    },
    onChange: function(values) {
        console.log(values)
    }
})