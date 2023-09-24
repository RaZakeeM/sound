











/******** OVERALL MASTER FX ********/
const context = new (window.AudioContext || window.webkitAudioContext)(); 
const master = context.createGain();
master.gain.value = 1;
master.connect(context.destination);






/****** UNIQUELY SNAIL BUTTON FXS **********/

const smaster = context.createGain();
smaster.gain.value = .5;
smaster.connect(master);


const delay = context.createDelay();
delay.delayTime.value = .414;
delay.connect(smaster);
const feedback = context.createGain();
feedback.gain.value = 0.9;
delay.connect(feedback);
feedback.connect(delay);
delay.connect(smaster);
const VCA = context.createGain();
VCA.connect(delay);
/*FX*/










function nchangefeedback(newvalue){
    console.log(newvalue.target.valueAsNumber);

    feedback.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}

document.getElementById('rrtrange').addEventListener('input', nchangefeedback)





function nchangevol(newvalue){
    console.log(newvalue.target.valueAsNumber);
    smaster.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}


document.getElementById('rrtrangevol').addEventListener('input', nchangevol)



























/******* SNAIL BUTTONS*************/



/* first snail button */
const button = document.querySelector("#our-button");
let Buffer;


fetchaudio1().then((buf) => {
    Buffer = buf;
    });

async function fetchaudio1(){
    try{
        let rsvp = await
        fetch('asnail/1.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button.addEventListener("click" ,toopy );
/* first button */











/* second snail button */
const button1 = document.querySelector("#our-button1");
let Buffer1;


fetchaudio2().then((buf) => {
    Buffer1 = buf;
    });

async function fetchaudio2(){
    try{
        let rsvp = await
        fetch('asnail/2.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy1(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer1;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button1.addEventListener("click" ,toopy1 );
/* second button */









/* third snail button */
const button2 = document.querySelector("#our-button2");
let Buffer2;


fetchaudio3().then((buf) => {
    Buffer2 = buf;
    });

async function fetchaudio3(){
    try{
        let rsvp = await
        fetch('asnail/3.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy2(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer2;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button2.addEventListener("click" ,toopy2 );
/* third button */

















/* fourth snail button */
const button3 = document.querySelector("#our-button3");
let Buffer3;


fetchaudio4().then((buf) => {
    Buffer3 = buf;
    });

async function fetchaudio4(){
    try{
        let rsvp = await
        fetch('asnail/4.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy3(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer3;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button3.addEventListener("click" ,toopy3 );
/* fourth button */












/* fifth snail button */
const button4 = document.querySelector("#our-button4");
let Buffer4;


fetchaudio5().then((buf) => {
    Buffer4 = buf;
    });

async function fetchaudio5(){
    try{
        let rsvp = await
        fetch('asnail/5.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy4(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer4;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button4.addEventListener("click" ,toopy4 );
/* fifth button */








/* sixth snail button */
const button5 = document.querySelector("#our-button5");
let Buffer5;


fetchaudio6().then((buf) => {
    Buffer5 = buf;
    });

async function fetchaudio6(){
    try{
        let rsvp = await
        fetch('asnail/6.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy5(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer5;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button5.addEventListener("click" ,toopy5 );
/* sixth button */















/* seventh snail button */
const button6 = document.querySelector("#our-button6");
let Buffer6;


fetchaudio7().then((buf) => {
    Buffer6 = buf;
    });

async function fetchaudio7(){
    try{
        let rsvp = await
        fetch('asnail/7.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy6(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer6;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button6.addEventListener("click" ,toopy6 );
/* seventh button */










/* eighth snail button */
const button7 = document.querySelector("#our-button7");
let Buffer7;


fetchaudio8().then((buf) => {
    Buffer7 = buf;
    });

async function fetchaudio8(){
    try{
        let rsvp = await
        fetch('asnail/8.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy7(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer7;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button7.addEventListener("click" ,toopy7 );
/* eighth button */







/* ninth snail button */
const button8 = document.querySelector("#our-button8");
let Buffer8;


fetchaudio9().then((buf) => {
    Buffer8 = buf;
    });

async function fetchaudio9(){
    try{
        let rsvp = await
        fetch('asnail/9.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy8(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer8;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button8.addEventListener("click" ,toopy8 );
/* ninth button */


















/* ten snail button */
const button9 = document.querySelector("#our-button10");
let Buffer9;


fetchaudio10().then((buf) => {
    Buffer9 = buf;
    });

async function fetchaudio10(){
    try{
        let rsvp = await
        fetch('asnail/10.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy9(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer9;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button9.addEventListener("click" ,toopy9 );
/* ten button */














/* eleven snail button */
const button10 = document.querySelector("#our-button11");
let Buffer10;


fetchaudio11().then((buf) => {
    Buffer10 = buf;
    });

async function fetchaudio11(){
    try{
        let rsvp = await
        fetch('asnail/11.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy10(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer10;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button10.addEventListener("click" ,toopy10 );
/* eleven button */











/* twelve snail button */
const button11 = document.querySelector("#our-button12");
let Buffer11;


fetchaudio12().then((buf) => {
    Buffer11 = buf;
    });

async function fetchaudio12(){
    try{
        let rsvp = await
        fetch('asnail/12.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy11(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer11;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button11.addEventListener("click" ,toopy11 );
/* twelve button */












/* thirt snail button */
const button12 = document.querySelector("#our-button13");
let Buffer12;


fetchaudio13().then((buf) => {
    Buffer12 = buf;
    });

async function fetchaudio13(){
    try{
        let rsvp = await
        fetch('asnail/13.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy12(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer12;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button12.addEventListener("click" ,toopy12 );
/* thirt button */












/* fort snail button */
const button13 = document.querySelector("#our-button14");
let Buffer13;


fetchaudio14().then((buf) => {
    Buffer13 = buf;
    });

async function fetchaudio14(){
    try{
        let rsvp = await
        fetch('asnail/14.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy13(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer13;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button13.addEventListener("click" ,toopy13 );
/* fort button */










/* fiften snail button */
const button14 = document.querySelector("#our-button15");
let Buffer14;


fetchaudio15().then((buf) => {
    Buffer14 = buf;
    });

async function fetchaudio15(){
    try{
        let rsvp = await
        fetch('asnail/15.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy14(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer14;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button14.addEventListener("click" ,toopy14 );
/* fiften button */








/* sixen snail button */
const button15 = document.querySelector("#our-button16");
let Buffer15;


fetchaudio16().then((buf) => {
    Buffer15 = buf;
    });

async function fetchaudio16(){
    try{
        let rsvp = await
        fetch('asnail/16.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy15(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer15;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button15.addEventListener("click" ,toopy15 );
/* sixen button */









/* sevenen snail button */
const button16 = document.querySelector("#our-button17");
let Buffer16;


fetchaudio17().then((buf) => {
    Buffer16 = buf;
    });

async function fetchaudio17(){
    try{
        let rsvp = await
        fetch('asnail/17.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy16(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer16;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button16.addEventListener("click" ,toopy16 );
/* sevenen button */











/* eiten snail button */
const button17 = document.querySelector("#our-button18");
let Buffer17;


fetchaudio18().then((buf) => {
    Buffer17 = buf;
    });

async function fetchaudio18(){
    try{
        let rsvp = await
        fetch('asnail/18.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function toopy17(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = Buffer17;
    source.connect(VCA);
    source.start(context.currentTime);
    }
    
button17.addEventListener("click" ,toopy17 );
/* eiten button */













/************BUTTERFLY BUTTONS************/








/****** UNIQUELY BUTTERFLY BUTTON FXS **********/

const bmaster = context.createGain();
bmaster.gain.value = .5;
bmaster.connect(master);

const delayb = context.createDelay();
delayb.delayTime.value = .828;
delayb.connect(bmaster);
const feedbackb = context.createGain();
feedbackb.gain.value = 0.9;
delayb.connect(feedbackb);
feedbackb.connect(delayb);
delayb.connect(bmaster);
const VCAb = context.createGain();
VCAb.connect(delayb);
/*FX*/







function bchangefeedback(newvalue){
    console.log(newvalue.target.valueAsNumber);

    feedbackb.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}

document.getElementById('rrbrange').addEventListener('input', bchangefeedback)





function bchangevol(newvalue){
    console.log(newvalue.target.valueAsNumber);
    bmaster.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}


document.getElementById('rrbrangevol').addEventListener('input', bchangevol)









/* first butterfly button */
const bbutton = document.querySelector("#bour-button");
let bBuffer;


fetchaudio1().then((buf) => {
    bBuffer = buf;
    });



function btoopy(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton.addEventListener("click" ,btoopy );
/* first button */







/* SECOND butterfly button */
const bbutton1 = document.querySelector("#bour-button1");
let bBuffer1;


fetchaudio2().then((buf) => {
    bBuffer1 = buf;
    });



function btoopy1(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer1;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton1.addEventListener("click" ,btoopy1 );
/* SECOND button */







/* third butterfly button */
const bbutton2 = document.querySelector("#bour-button2");
let bBuffer2;


fetchaudio3().then((buf) => {
    bBuffer2 = buf;
    });



function btoopy2(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer2;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton2.addEventListener("click" ,btoopy2 );
/* third button */











/* fourth butterfly button */
const bbutton3 = document.querySelector("#bour-button3");
let bBuffer3;


fetchaudio4().then((buf) => {
    bBuffer3 = buf;
    });



function btoopy3(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer3;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton3.addEventListener("click" ,btoopy3 );
/* third button */








/* fifth butterfly button */
const bbutton4 = document.querySelector("#bour-button4");
let bBuffer4;


fetchaudio5().then((buf) => {
    bBuffer4 = buf;
    });



function btoopy4(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer4;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton4.addEventListener("click" ,btoopy4 );
/* third button */










/* six butterfly button */
const bbutton5 = document.querySelector("#bour-button5");
let bBuffer5;


fetchaudio6().then((buf) => {
    bBuffer5 = buf;
    });



function btoopy5(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer5;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton5.addEventListener("click" ,btoopy5 );
/* third button */













/* seven butterfly button */
const bbutton6 = document.querySelector("#bour-button6");
let bBuffer6;


fetchaudio7().then((buf) => {
    bBuffer6 = buf;
    });



function btoopy6(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer6;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton6.addEventListener("click" ,btoopy6 );
/* third button */











/* eight butterfly button */
const bbutton7 = document.querySelector("#bour-button7");
let bBuffer7;


fetchaudio8().then((buf) => {
    bBuffer7 = buf;
    });



function btoopy7(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer7;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton7.addEventListener("click" ,btoopy7 );
/* third button */









/* nine butterfly button */
const bbutton8 = document.querySelector("#bour-button8");
let bBuffer8;


fetchaudio9().then((buf) => {
    bBuffer8 = buf;
    });



function btoopy8(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer8;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton8.addEventListener("click" ,btoopy8 );
/* third button */









/* ten butterfly button */
const bbutton10 = document.querySelector("#bour-button10");
let bBuffer10;


fetchaudio10().then((buf) => {
    bBuffer10 = buf;
    });



function btoopy10(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer10;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton10.addEventListener("click" ,btoopy10 );
/* third button */










/* eleven butterfly button */
const bbutton11 = document.querySelector("#bour-button11");
let bBuffer11;


fetchaudio11().then((buf) => {
    bBuffer11 = buf;
    });



function btoopy11(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer11;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton11.addEventListener("click" ,btoopy11 );
/* third button */






/* twelve butterfly button */
const bbutton12 = document.querySelector("#bour-button12");
let bBuffer12;


fetchaudio12().then((buf) => {
    bBuffer12 = buf;
    });



function btoopy12(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer12;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton12.addEventListener("click" ,btoopy12 );
/* third button */







/* thirt butterfly button */
const bbutton13 = document.querySelector("#bour-button13");
let bBuffer13;


fetchaudio13().then((buf) => {
    bBuffer13 = buf;
    });



function btoopy13(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer13;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton13.addEventListener("click" ,btoopy13 );
/* third button */










/* fourt butterfly button */
const bbutton14 = document.querySelector("#bour-button14");
let bBuffer14;


fetchaudio14().then((buf) => {
    bBuffer14 = buf;
    });



function btoopy14(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer14;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton14.addEventListener("click" ,btoopy14 );
/* third button */








/* fift butterfly button */
const bbutton15 = document.querySelector("#bour-button15");
let bBuffer15;


fetchaudio15().then((buf) => {
    bBuffer15 = buf;
    });



function btoopy15(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer15;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton15.addEventListener("click" ,btoopy15 );
/* third button */











/* sixt butterfly button */
const bbutton16 = document.querySelector("#bour-button16");
let bBuffer16;


fetchaudio16().then((buf) => {
    bBuffer16 = buf;
    });



function btoopy16(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer16;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton16.addEventListener("click" ,btoopy16 );
/* third button */







/* sevent butterfly button */
const bbutton17 = document.querySelector("#bour-button17");
let bBuffer17;


fetchaudio17().then((buf) => {
    bBuffer17 = buf;
    });



function btoopy17(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer17;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton17.addEventListener("click" ,btoopy17 );
/* third button */






/* eiten butterfly button */
const bbutton18 = document.querySelector("#bour-button18");
let bBuffer18;


fetchaudio18().then((buf) => {
    bBuffer18 = buf;
    });



function btoopy18(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = bBuffer18;
    source.connect(VCAb);
    source.start(context.currentTime);
    }
    
bbutton18.addEventListener("click" ,btoopy18 );
/* third button */



































/************TURTLE BUTTONS************/


/****** UNIQUELY BUTTERFLY BUTTON FXS **********/


const tmaster = context.createGain();
tmaster.gain.value = .5;
tmaster.connect(master);



const delayt = context.createDelay();
delayt.delayTime.value = .414;
delayt.connect(tmaster);
const feedbackt = context.createGain();
feedbackt.gain.value = .9;
delayt.connect(feedbackt);
feedbackt.connect(delayt);
delayt.connect(tmaster);
const VCAt = context.createGain();
VCAt.connect(delayt);
/*FX*/





function tchangefeedback(newvalue){
    console.log(newvalue.target.valueAsNumber);

    feedbackt.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}

document.getElementById('lltrange').addEventListener('input', tchangefeedback)





function tchangevol(newvalue){
    console.log(newvalue.target.valueAsNumber);
    tmaster.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}


document.getElementById('lltrangevol').addEventListener('input', tchangevol)











/* first turtle button */
const tbutton = document.querySelector("#tour-button");
let tBuffer;


tfetchaudio1().then((buf) => {
    tBuffer = buf;
    });

async function tfetchaudio1(){
    try{
        let rsvp = await
        fetch('aturtle/1.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton.addEventListener("click" ,ttoopy );
/* first button */








/* second turtle button */
const tbutton1 = document.querySelector("#tour-button1");
let tBuffer1;


tfetchaudio2().then((buf) => {
    tBuffer1 = buf;
    });

async function tfetchaudio2(){
    try{
        let rsvp = await
        fetch('aturtle/2.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy1(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer1;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton1.addEventListener("click" ,ttoopy1 );
/* first button */


















/* third turtle button */
const tbutton2 = document.querySelector("#tour-button2");
let tBuffer2;


tfetchaudio3().then((buf) => {
    tBuffer2 = buf;
    });

async function tfetchaudio3(){
    try{
        let rsvp = await
        fetch('aturtle/3.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy2(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer2;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton2.addEventListener("click" ,ttoopy2 );
/* first button */










/* fourth turtle button */
const tbutton3 = document.querySelector("#tour-button3");
let tBuffer3;


tfetchaudio4().then((buf) => {
    tBuffer3 = buf;
    });

async function tfetchaudio4(){
    try{
        let rsvp = await
        fetch('aturtle/4.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy3(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer3;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton3.addEventListener("click" ,ttoopy3 );
/* first button */










/* fifth turtle button */
const tbutton4 = document.querySelector("#tour-button4");
let tBuffer4;


tfetchaudio5().then((buf) => {
    tBuffer4 = buf;
    });

async function tfetchaudio5(){
    try{
        let rsvp = await
        fetch('aturtle/5.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy4(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer4;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton4.addEventListener("click" ,ttoopy4 );
/* first button */













/* sixth turtle button */
const tbutton5 = document.querySelector("#tour-button5");
let tBuffer5;


tfetchaudio6().then((buf) => {
    tBuffer5 = buf;
    });

async function tfetchaudio6(){
    try{
        let rsvp = await
        fetch('aturtle/6.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy5(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer5;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton5.addEventListener("click" ,ttoopy5 );
/* first button */









/* seventh turtle button */
const tbutton6 = document.querySelector("#tour-button6");
let tBuffer6;


tfetchaudio7().then((buf) => {
    tBuffer6 = buf;
    });

async function tfetchaudio7(){
    try{
        let rsvp = await
        fetch('aturtle/7.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy6(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer6;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton6.addEventListener("click" ,ttoopy6 );
/* first button */















/* eighth turtle button */
const tbutton7 = document.querySelector("#tour-button7");
let tBuffer7;


tfetchaudio8().then((buf) => {
    tBuffer7 = buf;
    });

async function tfetchaudio8(){
    try{
        let rsvp = await
        fetch('aturtle/8.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy7(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer7;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton7.addEventListener("click" ,ttoopy7 );
/* first button */









/* nine turtle button */
const tbutton8 = document.querySelector("#tour-button8");
let tBuffer8;


tfetchaudio9().then((buf) => {
    tBuffer8 = buf;
    });

async function tfetchaudio9(){
    try{
        let rsvp = await
        fetch('aturtle/9.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy8(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer8;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton8.addEventListener("click" ,ttoopy8 );
/* first button */












/* ten turtle button */
const tbutton10 = document.querySelector("#tour-button10");
let tBuffer10;


tfetchaudio10().then((buf) => {
    tBuffer10 = buf;
    });

async function tfetchaudio10(){
    try{
        let rsvp = await
        fetch('aturtle/10.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy10(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer10;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton10.addEventListener("click" ,ttoopy10 );
/* first button */















/* leven turtle button */
const tbutton11 = document.querySelector("#tour-button11");
let tBuffer11;


tfetchaudio11().then((buf) => {
    tBuffer11 = buf;
    });

async function tfetchaudio11(){
    try{
        let rsvp = await
        fetch('aturtle/11.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy11(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer11;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton11.addEventListener("click" ,ttoopy11 );
/* first button */







/* twelve turtle button */
const tbutton12 = document.querySelector("#tour-button12");
let tBuffer12;


tfetchaudio12().then((buf) => {
    tBuffer12 = buf;
    });

async function tfetchaudio12(){
    try{
        let rsvp = await
        fetch('aturtle/12.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy12(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer12;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton12.addEventListener("click" ,ttoopy12 );
/* first button */












/* thirt turtle button */
const tbutton13 = document.querySelector("#tour-button13");
let tBuffer13;


tfetchaudio13().then((buf) => {
    tBuffer13 = buf;
    });

async function tfetchaudio13(){
    try{
        let rsvp = await
        fetch('aturtle/13.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy13(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer13;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton13.addEventListener("click" ,ttoopy13 );
/* first button */














/* fort turtle button */
const tbutton14 = document.querySelector("#tour-button14");
let tBuffer14;


tfetchaudio14().then((buf) => {
    tBuffer14 = buf;
    });

async function tfetchaudio14(){
    try{
        let rsvp = await
        fetch('aturtle/14.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy14(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer14;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton14.addEventListener("click" ,ttoopy14 );
/* first button */











/* fift turtle button */
const tbutton15 = document.querySelector("#tour-button15");
let tBuffer15;


tfetchaudio15().then((buf) => {
    tBuffer15 = buf;
    });

async function tfetchaudio15(){
    try{
        let rsvp = await
        fetch('aturtle/15.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy15(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer15;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton15.addEventListener("click" ,ttoopy15 );
/* first button */













/* sixten turtle button */
const tbutton16 = document.querySelector("#tour-button16");
let tBuffer16;


tfetchaudio16().then((buf) => {
    tBuffer16 = buf;
    });

async function tfetchaudio16(){
    try{
        let rsvp = await
        fetch('aturtle/16.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy16(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer16;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton16.addEventListener("click" ,ttoopy16 );
/* first button */









/* seventen turtle button */
const tbutton17 = document.querySelector("#tour-button17");
let tBuffer17;


tfetchaudio17().then((buf) => {
    tBuffer17 = buf;
    });

async function tfetchaudio17(){
    try{
        let rsvp = await
        fetch('aturtle/17.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy17(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer17;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton17.addEventListener("click" ,ttoopy17 );
/* first button */












/* eighten turtle button */
const tbutton18 = document.querySelector("#tour-button18");
let tBuffer18;


tfetchaudio18().then((buf) => {
    tBuffer18 = buf;
    });

async function tfetchaudio18(){
    try{
        let rsvp = await
        fetch('aturtle/18.mp3');
        const soundbuffer = await rsvp.arrayBuffer();
        return await context.decodeAudioData(soundbuffer);
    }
    catch(err){
        console.log(
            'unable to fetch audio: ${name} Error: ${err.message}',
        );
    }}

function ttoopy18(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = tBuffer18;
    source.connect(VCAt);
    source.start(context.currentTime);
    }
    
tbutton18.addEventListener("click" ,ttoopy18 );
/* first button */
































/************SHOT BUTTONS************/

const shmaster = context.createGain();
shmaster.gain.value = .5;
shmaster.connect(master);


const delays = context.createDelay();
delays.delayTime.value = .828;
delays.connect(shmaster);
const feedbacks = context.createGain();
feedbacks.gain.value = 0.9;
delays.connect(feedbacks);
feedbacks.connect(delays);
delays.connect(shmaster);
const VCAs = context.createGain();
VCAs.connect(delays);





function schangefeedback(newvalue){
    console.log(newvalue.target.valueAsNumber);

    feedbacks.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}

document.getElementById('llbrange').addEventListener('input', schangefeedback)





function schangevol(newvalue){
    console.log(newvalue.target.valueAsNumber);
    shmaster.gain.setValueAtTime(newvalue.target.valueAsNumber, context.currentTime, .01);
}


document.getElementById('llbrangevol').addEventListener('input', schangevol)







/* first shot button */
const sbutton = document.querySelector("#sour-button");
let sBuffer;


tfetchaudio1().then((buf) => {
    sBuffer = buf;
    });


function stoopy(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton.addEventListener("click" ,stoopy );
/* first button */








/* second shot button */
const sbutton1 = document.querySelector("#sour-button1");
let sBuffer1;


tfetchaudio2().then((buf) => {
    sBuffer1 = buf;
    });


function stoopy1(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer1;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton1.addEventListener("click" ,stoopy1 );
/* first button */









/* third shot button */
const sbutton2 = document.querySelector("#sour-button2");
let sBuffer2;


tfetchaudio3().then((buf) => {
    sBuffer2 = buf;
    });


function stoopy2(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer2;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton2.addEventListener("click" ,stoopy2 );
/* first button */












/* third shot button */
const sbutton3 = document.querySelector("#sour-button3");
let sBuffer3;


tfetchaudio4().then((buf) => {
    sBuffer3 = buf;
    });


function stoopy3(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer3;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton3.addEventListener("click" ,stoopy3 );
/* first button */













/* for shot button */
const sbutton4 = document.querySelector("#sour-button4");
let sBuffer4;


tfetchaudio5().then((buf) => {
    sBuffer4 = buf;
    });


function stoopy4(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer4;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton4.addEventListener("click" ,stoopy4 );
/* first button */







/* five shot button */
const sbutton5 = document.querySelector("#sour-button5");
let sBuffer5;


tfetchaudio6().then((buf) => {
    sBuffer5 = buf;
    });


function stoopy5(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer5;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton5.addEventListener("click" ,stoopy5 );
/* first button */











/* six shot button */
const sbutton6 = document.querySelector("#sour-button6");
let sBuffer6;


tfetchaudio7().then((buf) => {
    sBuffer6 = buf;
    });


function stoopy6(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer6;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton6.addEventListener("click" ,stoopy6 );
/* first button */







/* seven shot button */
const sbutton7 = document.querySelector("#sour-button7");
let sBuffer7;


tfetchaudio8().then((buf) => {
    sBuffer7 = buf;
    });


function stoopy7(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer7;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton7.addEventListener("click" ,stoopy7 );
/* first button */









/* 8 shot button */
const sbutton8 = document.querySelector("#sour-button8");
let sBuffer8;


tfetchaudio9().then((buf) => {
    sBuffer8 = buf;
    });


function stoopy8(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer8;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton8.addEventListener("click" ,stoopy8 );
/* first button */











/* 10 shot button */
const sbutton10 = document.querySelector("#sour-button10");
let sBuffer10;


tfetchaudio10().then((buf) => {
    sBuffer10 = buf;
    });


function stoopy10(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer10;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton10.addEventListener("click" ,stoopy10 );
/* first button */









/* 11 shot button */
const sbutton11 = document.querySelector("#sour-button11");
let sBuffer11;


tfetchaudio11().then((buf) => {
    sBuffer11 = buf;
    });


function stoopy11(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer11;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton11.addEventListener("click" ,stoopy11 );
/* first button */











/* 12 shot button */
const sbutton12 = document.querySelector("#sour-button12");
let sBuffer12;


tfetchaudio12().then((buf) => {
    sBuffer12 = buf;
    });


function stoopy12(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer12;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton12.addEventListener("click" ,stoopy12 );
/* first button */














/* 13 shot button */
const sbutton13 = document.querySelector("#sour-button13");
let sBuffer13;


tfetchaudio13().then((buf) => {
    sBuffer13 = buf;
    });


function stoopy13(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer13;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton13.addEventListener("click" ,stoopy13 );
/* first button */












/* 14 shot button */
const sbutton14 = document.querySelector("#sour-button14");
let sBuffer14;


tfetchaudio14().then((buf) => {
    sBuffer14 = buf;
    });


function stoopy14(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer14;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton14.addEventListener("click" ,stoopy14 );
/* first button */





/* 15 shot button */
const sbutton15 = document.querySelector("#sour-button15");
let sBuffer15;


tfetchaudio15().then((buf) => {
    sBuffer15 = buf;
    });


function stoopy15(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer15;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton15.addEventListener("click" ,stoopy15 );
/* first button */











/* 16 shot button */
const sbutton16 = document.querySelector("#sour-button16");
let sBuffer16;


tfetchaudio16().then((buf) => {
    sBuffer16 = buf;
    });


function stoopy16(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer16;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton16.addEventListener("click" ,stoopy16 );
/* first button */












/* 17 shot button */
const sbutton17 = document.querySelector("#sour-button17");
let sBuffer17;


tfetchaudio17().then((buf) => {
    sBuffer17 = buf;
    });


function stoopy17(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer17;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton17.addEventListener("click" ,stoopy17 );
/* first button */












/* 18 shot button */
const sbutton18 = document.querySelector("#sour-button18");
let sBuffer18;


tfetchaudio18().then((buf) => {
    sBuffer18 = buf;
    });


function stoopy18(){
    const source = new AudioBufferSourceNode(context);
    source.buffer = sBuffer18;
    source.connect(VCAs);
    source.start(context.currentTime);
    }
    
sbutton18.addEventListener("click" ,stoopy18 );
/* first button */
