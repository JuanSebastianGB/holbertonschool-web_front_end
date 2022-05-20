console.log('start of the execution queue');

setTimeout(() => { console.log('final code block to be executed') }, 0);

setTimeout(console.log('final code block to be executed'), 100)
for (let i = 0; i < 100; i++)
    console.log(i);
console.log('end of the loop printing');