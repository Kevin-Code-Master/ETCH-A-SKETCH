const reset = document.querySelector('#reset');
const resetBtn = document.querySelector('#resetBtn');
const gridContainer = document.querySelector('.gridContainer');
const introBtn = document.querySelector('#introBtn');
const introPage = document.querySelector('.intro');


// introBtn.addEventListener('click',(e) =>{
// 	introPage.setAttribute('style','display:none;');
// 	createGrid();
// });
// FUNCTIONS
// createGrid
// UpdateGrid

// createGrid

function createGrid () {
	for (let i = 0; i <= 256; i++) {
		const div = document.createElement('div');
		gridContainer.setAttribute('style','grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);')
		gridContainer.appendChild(div);
		div.classList.add('squares')
	}	
// UpdateGrid
	function updateGrid () {
		gridContainer.innerHTML = "";
		gridContainer.style.setProperty(
			"grid-template-columns",
			`repeat(${reset.value}, 2fr)`
		  );
		gridContainer.style.setProperty(
			"grid-template-rows",
			`repeat(${reset.value}, 2fr)`
		  );
		for (let i = 0; i < reset.value*reset.value; i++) {
			const div = document.createElement('div');
			div.classList.add('squares');
			gridContainer.appendChild(div);
		}
	}

	const square = document.querySelector('div');
	square.addEventListener('mouseover', (e) =>{
		e.target.classList.replace('squares', 'squaresHover');
	});

	reset.addEventListener('change',updateGrid)

	resetBtn.addEventListener('click', (e) =>{
		reset.value = "";
		gridContainer.innerHTML = "";
		gridContainer.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  		gridContainer.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  		createGrid();
	})
}
createGrid();