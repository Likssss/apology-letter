document.getElementById('envelope').addEventListener('click', function() {
    var note = document.getElementById('note');
    var popup = document.getElementById('popup');
    var question = document.getElementById('question');
    var text = "This is the text of the note.";
    var words = text.split(' ');
    var i = 0;

    popup.style.display = 'flex';

    var interval = setInterval(function() {
        if (i < words.length) {
            var span = document.createElement('span');
            span.textContent = words[i] + ' ';
            span.className = 'word';
            note.appendChild(span);

            setTimeout(function() {
                span.style.opacity = 1;
            }, 100);

            i++;
        } else {
            clearInterval(interval);
            setTimeout(function() {
                question.style.opacity = 1;
            }, 500);
        }
    }, 500);
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('message').style.display = 'flex';
});

document.getElementById('no').addEventListener('click', function() {
    this.style.position = 'absolute';
    this.style.left = Math.random() * window.innerWidth + 'px';
    this.style.top = Math.random() * window.innerHeight + 'px';
});
