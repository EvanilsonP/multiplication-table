function Calculate() {
    let number = document.getElementById('txtnumber');
    let table = document.getElementById('seltab');

    if(number.value.length == 0) {
        alert('Please insert a valid number.');
    } else {
        let n = Number(number.value);
        c = 1;
        table.innerHTML = '';
        while(c < 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${n} = ${n * c}`;
            table.appendChild(item);
            c++
        }

    }
}