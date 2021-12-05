// === Репета 1
const playlist = {
    name: "My playlist",
    rating: 5,
    tracks: ['track-1', "track-2", "track-3"],
    
    getName: function (){
        console.log("This is getName");
    },
    changeName(newName){
      console.log("this внутри changeName", this);
      this.name = newName;
    },
    addTrack(track){
        this.tracks.push(track);
        
    },
    getTrackCount(){
        return this.tracks.length},
    updateRating(newRating){
        this.rating = newRating
    },

}


playlist.changeName("NewName1")
playlist.addTrack("track-N")
playlist.updateRating(10)
// console.log(playlist.getTrackCount());
// console.log(playlist);


// console.log(playlist.name);
const properNsme = "tracks"
// console.log(playlist[properNsme]);

//===короткая запись свойств

const username = "Mango"
const email = "mango@mail.com"
const signData = {
    username,
    email,
}
// console.log(signData);

// ===вычисляемые свойства

// <input name="color" value = "tomato">
const inputName = "color"
const inputValue = "tomato"

const colorPickerData = {
    [inputName]: inputValue,
}
// console.log(colorPickerData)
// === добавляем свойства
colorPickerData.inputRating = 5
// console.log(colorPickerData)

// сравнение обектов и сравнение переменных
const a=5
const b=a
const c=5
// console.log(b === a);
// console.log(c === a);

const d={x:1, y:2}
const f={x:1, y:2}
const g=f
d.c = 100
// console.log(d===f);
// console.log(g===f);

// === перебор через for ... in

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}
const keys = Object.keys(feedback)
console.log(keys);
let totalFeedback = 0;

for (const key of keys){
    console.log(feedback[key]);
    // totalFeedback +=feedback[key]
}
console.log(totalFeedback);

const values = Object.values(feedback)
for (const val of values) {
    totalFeedback += val
}
console.log(totalFeedback);