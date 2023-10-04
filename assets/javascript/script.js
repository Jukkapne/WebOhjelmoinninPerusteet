function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  // Using a public API as an example.
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById('data-display');
            dataDisplay.innerHTML = `<p>Title: ${data.title}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
