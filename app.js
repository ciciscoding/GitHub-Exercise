const projectList = document.querySelector('#project-list');

projectList.addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});