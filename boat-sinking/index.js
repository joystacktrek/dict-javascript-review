/* The boat is sinking is a classic party game. The game works when the host tells, “The boat is sinking! The boat is sinking! Group yourselves into (any number)!” The participants then scamper and assemble themselves accordingly. Participant(s) who fail to find a huddle with the appropriate number of members are out in the game. This is repeated until the two last remaining souls on board are declared winners.
 
Your task
Create a function that will count how many participants are left after a number of rounds

It should only return a whole number
Example:
Participants : 15
Rounds: [4,2,5,3,2]
Result:8

In a group consisting of 4 there can be only 12 out of 15 participants who can be qualified for the next round and then a group consisting of 2 members all of 12 participants can be qualified, a group consisting of 5 members will only allow 10 participants to be qualified, a group consisting of 3 members will qualify only 9 participants, and last a group consisting of 2 members will only allow 8 participants on board

*/

function sinking(participants, rounds) {
    // ES6
    for (noOfPlayer of rounds) {
        // 1. get the remainder
        // participants % rounds - 15 % 4 = 3
        // 2. partipants - 15 - 3 = 12 >> back to 1st step 
        participants -= (participants % noOfPlayer)
        // long:  participants = participants - (participants % noOfPlayer)
       //console.log(`player: ${noOfPlayer} ;  left: ${participants}`)
    }
    return participants
}
//sinking(15,[4,2,5,3,2])
console.log(sinking(15,[4,2,5,3,2]))