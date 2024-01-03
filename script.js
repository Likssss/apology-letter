document.getElementById('envelope').addEventListener('click', function() {
    var note = document.getElementById('note');
    var popup = document.getElementById('popup');
    var question = document.getElementById('question');
    var text = "This might be made in a rush but apparently it also racked my brain, well that aside i'm sorry for everything syg i didn't mean to keep making you mad or unhappy, please forgive me for always making you unhappy and mad, i'm sorry for not being the best for you, i'll try and be better so please forgive me yes? don't get mad at me anymore :( i'm sorry and i love you
";
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
