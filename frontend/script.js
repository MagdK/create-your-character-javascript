// COMPONENTS

let characterEditBlocks = function() {
    return `
    <h1 id="page-title" class="animate-bottom">Create Your Character</h1>
    <section id="character-creation" >
        <article class="edit-block">
            <form>
                <label for="name">name</label>
                <input type="text" id="name" name="name">
                <label for="gender">Gender</label>
                <select id="gender" name="gender">
                    <option value="G-Default">Default</option>
                    <option value="G-Girl">Girl</option>
                    <option value="G-Boy">Boy</option>
                    <option value="G-Prefer-not-to-say">Prefer not to say</option>
                </select>
                <label for="race">Race</label>
                <select id="race" name="race">
                    <option value="R-Default">Default</option>
                    <option value="R-Zombie">Zombie</option>
                    <option value="R-Gold">Gold</option>
                </select>
                <label for="class">Class</label>
                <select id="class" name="class">
                    <option value="C-Default">Default</option>
                    <option value="C-Dealer">Dealer</option>
                    <option value="C-Floater">Floater</option>
                    <option value="C-Royal">Royal</option>
                </select>
            </form>
        </article>
        <article class="preview-block">
            <img src="assets/R-Default-G-Default-C-Default.svg" alt="My Happy SVG" id="monkey-img" />
            <h2 id="name-value"></h2>
        </article>
    </section>
    `;
};

 // LOADING ANIMATION
function showPage() {
     document.getElementById("loader").style.display = "none";
     document.getElementById("root").style.display = "block";
};

function loadEvent() {
    let rootElement = document.getElementById("root");
    // console.log(rootElement);

    let loaderAnimation = document.getElementById("loader");

    rootElement.insertAdjacentHTML("beforeend", characterEditBlocks());

   // NAME INPUT
    const input = document.querySelector('input');
    const log = document.getElementById('name-value');

    input.addEventListener('input', updateValue);

    function updateValue(e) {
      log.textContent = e.target.value;
    };
    
    // SELECT
    const genderSelect = document.getElementById('gender');
    const raceSelect = document.getElementById('race');
    const classSelect = document.getElementById('class');
    const image = document.getElementById('monkey-img');
 
    genderSelect.addEventListener('change', updateImage);
    raceSelect.addEventListener('change', updateImage);
    classSelect.addEventListener('change', updateImage);
 
    function updateImage() {
        // CLEAN SOLUTION
        // const values = [raceSelect.value, genderSelect.value, classSelect.value];
        // const imagePath = "assets/" + values.join("-") + ".svg";
        // image.src = imagePath
        
        // MESSY, IF-ELSE SOLUTION
        if(genderSelect.value === 'G-Default' && raceSelect.value === 'R-Default' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Default-G-Default-C-Default.svg"
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Default' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Default-G-Boy-C-Default.svg"
        } else if(genderSelect.value === 'G-Girl' && raceSelect.value === 'R-Default' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Default-G-Girl-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Prefer-not-to-say' && raceSelect.value === 'R-Default' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Default-G-Prefer-not-to-say-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Default' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Default-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Default' && raceSelect.value === 'R-Gold' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Gold-G-Default-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        } else if(genderSelect.value === 'G-Boy' && raceSelect.value === 'R-Zombie' && classSelect.value === 'C-Default') {
            image.src = "assets/R-Zombie-G-Boy-C-Default.svg"
            console.log(image.src)
        }
    }

    setTimeout(showPage, 3000);
};
window.addEventListener("load", loadEvent);

