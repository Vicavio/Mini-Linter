let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' '); //Split the string into individual words
console.log(storyWords); //Log to see the new array with the individual words
console.log(storyWords.length); //Log how many words are in the string

let betterWords = storyWords.filter(word => {return !unnecessaryWords.includes(word);}); //Iterate over array to filter words
console.log(betterWords);

const overusedCount = betterWords.filter(word=> overusedWords.includes(word));
console.log(`These are the words overused: ${overusedCount}, and the total of words is ${overusedCount.length}.`);

let reallyWord = 0;
let veryWord = 0;
let basicallyWord = 0;
for (word of betterWords) { //Iterate to see how many time each word is overused
    if (word === overusedWords[0]) {
        reallyWord +=1;
    } else if (word === overusedWords[1]) {
        veryWord +=1;
    } else if (word === overusedWords[2]) {
        basicallyWord +=1;
    }
};
console.log(`The word REALLY is used ${reallyWord} times. The word VERY is used ${veryWord} times. The BASICALLY word used is ${basicallyWord} times.`);

let sentences = 0
storyWords.forEach(word => {
    if(word.includes('.') || word.includes('!')) {
    sentences++;
  }
});
console.log(`There are ${sentences} sentences.`)

let string = betterWords.join(" ");
console.log(string);
 
