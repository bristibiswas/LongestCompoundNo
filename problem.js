// Start the timer
let startTime = performance.now();



const fs = require('fs');

// Read file contents
fs.readFile("C:\\Users\\E\\OneDrive\\Documents\\Input_01.txt", 'utf8', function(error, data) {
  if (error) throw error;


// Print file contents
  let words=data;
console.log(words);

// End the timer
let endTime = performance.now();

// Calculate the time taken to input the file contents in vs code
let timeTaken = endTime - startTime;
console.log(`Time taken to process input file: ${timeTaken} ms`); 


//spliting "\r\n" from the text and use it as an array
  const split_string = words.split('\r\n');
  console.log(split_string)


// sorting the words in decending order
const sortedWords = split_string.sort((a,b) => b.length - a.length);
console.log(sortedWords)

// compounded word logic
 let res = []

    for(let i = 0; i< sortedWords.length; i++)
    {
        let wrd = sortedWords[i]; 
        let temp = []
        sortedWords.map((w) => { 
            if(wrd.includes(w) && w !== wrd)
                {
                    //   console.log("mainWord",wrd,"subWord",w);
                    temp.push(w)
                } 
            })
       
         temp.map((t) =>{
                while(wrd.includes(t))
                    {
                        wrd = wrd.replace(t,'')
                        // console.log("after replace..",wrd);
                    } 
           })
                    if(wrd.length === 0)
                    {
                        res.push(sortedWords[i])
                        if(res.length>=2)
                        {
                            break;
                        }
                    }
    }

 console.log("{\nfirst longest compound: ",res[0]+",","\nsecond longest compound: ",res[1],"\n}")


})