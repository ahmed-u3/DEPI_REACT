const conferenceSchedule = [
    ['Day 1', 'Opening Ceremony', ['Alice', 'Bob']],
    ['Day 2', 'Keynote', ['Carol', 'David']],
    ['Day 3', 'Workshop', ['Eve', 'Frank', 'Grace']],
    ['Day 4', 'Panel Discussion', ['Heidi', 'Ivan', 'Judy']],
    ['Day 5', 'Closing Remarks', ['Mallory', 'Niaj']]
];
// First Task
const [, thirdDayEvent] = conferenceSchedule[2];
console.log(thirdDayEvent);

// 2nd Task
const [, , [panelFirstSpeaker]] = conferenceSchedule[3];
console.log(panelFirstSpeaker);

const [, , [,closingLastSpeaker]] = conferenceSchedule[4];
console.log(closingLastSpeaker);