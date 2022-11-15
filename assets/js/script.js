/**
 * This function is used to render navbar in every page where its needed.
 * So I don't have to write the same code again and again.
 */
window.onload = async function() {
    //load navbar
    let navbar = await fetch('visualizations/nav.html');
    if (navbar.status === 200) {
        let text = await navbar.text();
        let target = document.querySelector('#nav-placeholder');
        target.innerHTML = text;
    } else {
        console.log(`Error: Could not load navbar. Status: ${navbar.status}`);
    }

    //load index content
    let index_content = await fetch('visualizations/index_content.html');
    if (index_content.status === 200) {
        let text = await index_content.text();
        let target = document.querySelector('#placeholder');
        target.innerHTML += text;
    } else {
        console.log(`Error: Could not load index content. Status: ${index_content.status}`);
    }

    //load sidebar
    let sidebar = await fetch('visualizations/sidebar.html');
    if (sidebar.status === 200) {
        let text = await sidebar.text();
        let target = document.querySelector('#placeholder');
        target.innerHTML += text;
    } else {
        console.log(`Error: Could not load sidebar. Status: ${sidebar.status}`);
    }
}

function loadData(target) {
    //get data-id from the target
    let id = target.getAttribute("data-id");
    fetch(`${id}.html`)
        .then(res => res.text())
        .then(text => {
            let div = document.querySelector("#placeholder");
            div.innerHTML = text

            if(!id.includes("comparison") && !id.includes("data")) {
                //add sidebar
                fetch('visualizations/sidebar.html')
                    .then(res => res.text())
                    .then(text => {
                        let target = document.querySelector("#placeholder");
                        target.innerHTML += text;
                    })
            }
        })
}