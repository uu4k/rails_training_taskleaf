document.addEventListener('turbolinks:load', () => {
    document.querySelectorAll('td').forEach((td) => {
        td.addEventListener('mouseover', (e) => {
            e.currentTarget.style.backgroundColor = '#eff';
        });

        td.addEventListener('mouseout', (e) => {
            e.currentTarget.style.backgroundColor = '';
        });
    });
});

document.addEventListener('turbolinks:load', () => {
    document.querySelectorAll('.delete').forEach((a) => {
        a.addEventListener('ajax:success', () => {
            const td = a.parentNode;
            const tr = td.parentNode;
            tr.style.display = 'none';
        });
    });
});