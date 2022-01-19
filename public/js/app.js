console.log('Javascript file is loaded ');

fetch('http://puzzle.mead.io/puzzle').then((res) => {
    console.log('res =',res);
    res.json().then(data => {
        console.log('data =',data);
    })
});