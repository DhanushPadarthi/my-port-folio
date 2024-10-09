document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const stateList = document.getElementById('stateList');
    
    searchInput.addEventListener('focus', function() {
        stateList.style.display = 'block';
    });

    searchInput.addEventListener('blur', function() {
        setTimeout(() => stateList.style.display = 'none', 200); // Delay hiding to allow clicking
    });

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const items = stateList.getElementsByTagName('li');
        
        for (let i = 0; i < items.length; i++) {
            const text = items[i].textContent || items[i].innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });

    // Click event to select a state
    stateList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            searchInput.value = e.target.textContent;
            stateList.style.display = 'none';
        }
    });
});