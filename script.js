const form = document.getElementById('form');
const uralkodoNev = document.getElementById('uralkodo_nev');
const esemeny1 = document.getElementById('esemeny1');
const evszam1 = document.getElementById('evszam1');
const esemeny2 = document.getElementById('esemeny2');
const evszam2 = document.getElementById('evszam2');
const tbody = document.querySelector('table tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let tr1 = document.createElement('tr');
    let nevcella = document.createElement('td');
    nevcella.rowSpan = esemeny2.value && evszam2.value ? 2 : 1;
    nevcella.textContent = uralkodoNev.value;
    tr1.appendChild(nevcella);

    let esemenycella1 = document.createElement('td');
    esemenycella1.textContent = esemeny1.value;
    tr1.appendChild(esemenycella1);

    let evszamcella1 = document.createElement('td');
    evszamcella1.textContent = evszam1.value;
    tr1.appendChild(evszamcella1);

    tbody.appendChild(tr1);

    if (esemeny2.value && evszam2.value) {
        let tr2 = document.createElement('tr');
        let esemenycella2 = document.createElement('td');
        esemenycella2.textContent = esemeny2.value;
        tr2.appendChild(esemenycella2);

        let evszamcella2 = document.createElement('td');
        evszamcella2.textContent = evszam2.value;
        tr2.appendChild(evszamcella2);

        tbody.appendChild(tr2);
    }

    uralkodoNev.value = '';
    esemeny1.value = '';
    evszam1.value = '';
    esemeny2.value = '';
    evszam2.value = '';
});
