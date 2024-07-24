// script.js

function filterNames() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const listItems = row.querySelectorAll('ul li');
        let isVisible = false;

        listItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchInput)) {
                isVisible = true;
            }
        });

        row.style.display = isVisible ? '' : 'none';
    });
}

document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        const message = document.createElement('div');
        message.className = 'hover-message';
        message.innerText = `This is ${item.textContent}. Hovering!`;
        document.body.appendChild(message);

        item.addEventListener('mousemove', (e) => {
            message.style.top = `${e.clientY + 10}px`;
            message.style.left = `${e.clientX + 10}px`;
        });

        item.addEventListener('mouseout', () => {
            document.body.removeChild(message);
        });
    });
});