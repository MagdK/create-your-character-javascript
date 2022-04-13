// COMPONENTS

let characterEditBlocks = function() {
    return `
    <h1 id="page-title">Create Your Character</h1>
    <section id="character-creation">
        <article class="edit-block">
            <form>
                <label for="name">name</label>
                <input type="text" id="name" name="name">
                <label for="gender">Gender</label>
                <select id="gender" name="gender">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </form>
        </article>
        <article class="preview-block">
            <img src="assets/monkey-1.png" alt="My Happy SVG" id="monkey-img" />
            <h2 id="name-value"></h2>
        </article>
    </section>
    `;
};


function loadEvent() {
    let rootElement = document.getElementById("root");
    // console.log(rootElement);

    rootElement.insertAdjacentHTML("beforeend", characterEditBlocks());

            // NAME INPUT
    const input = document.querySelector('input');
    const log = document.getElementById('name-value');

    input.addEventListener('input', updateValue);

    function updateValue(e) {
      log.textContent = e.target.value;
    }

    // SELECT
    const genderSelect = document.getElementById('gender');
    
    const image = document.getElementById('monkey-img');
 
    genderSelect.addEventListener('change', updateImage);
    
 
    function updateImage() {
       // if else goes here
       if (genderSelect.value === '1') {
        image.scr = "assets/monkey-1.png"
       } else if( genderSelect.value === '2') {
        image.src = "assets/monkey-2.png"
       } else if( genderSelect.value === '3') {
        image.src = "assets/monkey-3.png"
       } else if(genderSelect.value === '4'){
       image.src = "assets/monkey-4.png"
       }
    }
}
window.addEventListener("load", loadEvent);

