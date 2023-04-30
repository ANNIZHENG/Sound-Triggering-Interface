var world;

// markers
var diningtable_marker;
var fireplace_marker;
var footsteps_marker;
var gametable_marker;
var piano_marker;

// for changing to listen closely mode (only the game table)
var mode = 0;

// to prevent too many sounds from triggering
var playing = "";

// sounds
var gameTable_sound;
var fireplace_sound;
var piano_sound;
var footsteps_sound;
var diningTable_sound;

// game table individual sounds
var chair_slide;
var chair_sit;
var game_token;
var pour_wine;
var play_cards;
var murmuring;

// game table text
var gametable_text;

function preload() {
    soundFormats('mp3');
    // sounds
    gameTable_sound = loadSound('assets/sounds/game-table-mix.mp3');
    fireplace_sound = loadSound('assets/sounds/fireplace-heavy-69819.mp3');
    piano_sound = loadSound('assets/sounds/harpsichord.mp3');
    footsteps_sound = loadSound('assets/sounds/533044__nox_sound__footsteps_boots_wood_mono.mp3');
    diningTable_sound = loadSound('assets/sounds/diningtable-mix.mp3');

    // game table individual sounds
    chair_slide = loadSound('assets/sounds/ES_Chair Slide 2 - SFX Producer.mp3');
    chair_sit = loadSound('assets/sounds/ES_Wood Chair Sit Down - SFX Producer.mp3');
    game_token = loadSound('assets/sounds/keys-jingling-6837.mp3');
    pour_wine = loadSound('assets/sounds/pouring-wine-25455.mp3');
    play_cards = loadSound('assets/sounds/playing-cards-on-a-wooden-table-55088.mp3');
    murmuring = loadSound('assets/sounds/indoor-adult-murmur-small-groupwav-14573.mp3');
}

function setup() {
    noCanvas();
    world = new World('ARScene');
    diningtable_marker = world.getMarker('diningtable');
    fireplace_marker = world.getMarker('fireplace');
    footsteps_marker = world.getMarker('footsteps');
    gametable_marker = world.getMarker('gametable');
    piano_marker = world.getMarker('piano');

    var diningtable_text = new Text({
        text: 'Dining Table',
        font: 'https://cdn.aframe.io/fonts/mozillavr.fnt',
        red: 250, green: 250, blue: 250,
        side: 'double',
        x: 0, y: 0, z: 0,
        scaleX: 3, scaleY: 3, scaleZ: 3,
        rotationX: -90
    });
    diningtable_marker.add(diningtable_text);

    var fireplace_text = new Text({
        text: 'Fireplace',
        font: 'https://cdn.aframe.io/fonts/mozillavr.fnt',
        red: 250, green: 250, blue: 250,
        side: 'double',
        x: 0, y: 0, z: 0,
        scaleX: 3, scaleY: 3, scaleZ: 3,
        rotationX: -90
    });
    fireplace_marker.add(fireplace_text);

    var footsteps_text = new Text({
        text: 'Footsteps',
        font: 'https://cdn.aframe.io/fonts/mozillavr.fnt',
        red: 250, green: 250, blue: 250,
        side: 'double',
        x: 0, y: 0, z: 0,
        scaleX: 3, scaleY: 3, scaleZ: 3,
        rotationX: -90
    });
    footsteps_marker.add(footsteps_text);

    gametable_text = new Text({
        text: 'Game Table',
        font: 'https://cdn.aframe.io/fonts/mozillavr.fnt',
        red: 250, green: 250, blue: 250,
        side: 'double',
        x: 0, y: 0, z: 0,
        scaleX: 3, scaleY: 3, scaleZ: 3,
        rotationX: -90
    });
    gametable_marker.add(gametable_text);

    var piano_text = new Text({
        text: 'Piano',
        font: 'https://cdn.aframe.io/fonts/mozillavr.fnt',
        red: 250, green: 250, blue: 250,
        side: 'double',
        x: 0, y: 0, z: 0,
        scaleX: 3, scaleY: 3, scaleZ: 3,
        rotationX: -90
    });
    piano_marker.add(piano_text);
}


function draw() {
    if (diningtable_marker.isVisible()) {
        gameTable_sound.stop();
        fireplace_sound.stop();
        piano_sound.stop();
        footsteps_sound.stop();

        if (playing != "diningtable") {
            diningTable_sound.play();
        }
        playing = "diningtable";
    }
    else if (fireplace_marker.isVisible()) {
        gameTable_sound.stop();
        piano_sound.stop();
        footsteps_sound.stop();
        diningTable_sound.stop();

        if (playing != "fireplace") {
            fireplace_sound.play();
        }
        playing = "fireplace";
    }
    else if (footsteps_marker.isVisible()) {
        gameTable_sound.stop();
        fireplace_sound.stop();
        piano_sound.stop();
        diningTable_sound.stop();

        if (playing != "footsteps") {
            footsteps_sound.play();
        }
        playing = "footsteps";
    }
    else if (gametable_marker.isVisible()) {
        fireplace_sound.stop();
        piano_sound.stop();
        footsteps_sound.stop();
        diningTable_sound.stop();

        if (playing != "gametable" ) {
            gameTable_sound.play();
        }

        playing = "gametable";
    }
    else if (piano_marker.isVisible()) {
        gameTable_sound.stop();
        fireplace_sound.stop();
        footsteps_sound.stop();
        diningTable_sound.stop();

        if (playing != "piano") {
            piano_sound.play();
        }
        playing = "piano";
    }
    else {
        gameTable_sound.stop();
        fireplace_sound.stop();
        piano_sound.stop();
        footsteps_sound.stop();
        diningTable_sound.stop();
        chair_slide.stop();
        chair_sit.stop();
        game_token.stop();
        pour_wine.stop();
        play_cards.stop();
        murmuring.stop();

        mode = 0;
        gametable_text.setText("Game Table");
        playing = "";
    }
}

function mouseClicked() {
    if (playing == "gametable") { 
        if (mode == 6) {
            mode = -1;
        }

        mode += 1;

        gameTable_sound.stop();
        chair_slide.stop();
        chair_sit.stop();
        game_token.stop();
        pour_wine.stop();
        play_cards.stop();
        murmuring.stop();
        
        if (mode == 0) {
            gameTable_sound.play();
            gametable_text.setText("Game Table");
        }
        else if (mode == 1) {
            chair_slide.play();
            gametable_text.setText("Game Table\nChair Sliding");
        }
        else if (mode == 2) {
            chair_sit.play();
            gametable_text.setText("Game Table\nSitting");
        }
        else if (mode == 3) {
            game_token.play();
            gametable_text.setText("Game Table\nGame Token Jingling");
        }
        else if (mode == 4) {
            pour_wine.play();
            gametable_text.setText("Game Table\nWine Pouring");
        }
        else if (mode == 5) {
            play_cards.play();
            gametable_text.setText("Game Table\nPlaying Cards");
        }
        else if (mode == 6) {
            murmuring.play();
            gametable_text.setText("Game Table\nPeople Murmuring");
        }
    }
}