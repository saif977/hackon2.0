let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Oxygen?')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Vaccines?')
    .pauseFor(2500)
    .deleteChars(7)
    .start();