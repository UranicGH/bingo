// List of Minecraft challenge options
const challenges = [
    "Mine Diamonds",
    "Build a House",
    "Tame a Wolf",
    "Find a Village",
    "Defeat a Pillager",
    "Craft an Enchanting Table",
    "Kill a Blaze",
    "Craft a Full Set of Iron Armor",
    "Go to the Nether",
    "Defeat the Ender Dragon",
    "Catch a Fish",
    "Breed Animals",
    "Explore a Stronghold",
    "Get a Skeleton's Bow",
    "Find a Dungeon",
    "Create a Potion",
    "Survive a Night",
    "Create a Farm",
    "Make a Beacon",
    "Find a Mushroom Biome",
    "Build a Portal to the End",
    "Defeat a Witch",
    "Create a Redstone Circuit",
    "Find a Desert Temple",
    "Make a Cake",
    "Find a Ravine"
];

// Function to generate the bingo board
function generateBingoBoard() {
    // Shuffle the challenges to make it random
    const shuffledChallenges = shuffleArray(challenges);
    
    // Select the center spot (free space)
    const board = shuffledChallenges.slice(0, 24);
    board.splice(12, 0, "FREE SPACE");

    // Get the bingo board container
    const bingoBoard = document.getElementById("bingo-board");

    // Clear the previous board
    bingoBoard.innerHTML = '';

    // Generate each bingo cell
    board.forEach(item => {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
    
        // Create a span element to hold the text
        const span = document.createElement('span');
        span.textContent = item === "FREE SPACE" ? "FREE SPACE" : item;
    
        // Append the span to the cell
        cell.appendChild(span);
    
        // Add event listener to toggle challenge visibility
        cell.addEventListener('click', function() {
            toggleChallenge(cell, span, item); // Passing the span element as well
        });
    
        // Append the cell to the board
        bingoBoard.appendChild(cell);
    });
}

// Function to toggle the challenge visibility
function toggleChallenge(cell, span, item) {
    if (cell.classList.contains('crossed-off')) {
        // Remove the crossed-off effect
        cell.classList.remove('crossed-off');
        span.style.display = 'block'; // Show the text again
    } else {
        // Cross off the challenge
        cell.classList.add('crossed-off');
    }
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Event listener for button click to generate a new bingo board
document.getElementById("generateBoard").addEventListener("click", function() {
    // Change the button image to a loading or alternate image
    const buttonImage = document.getElementById("generateButtonImage");
    buttonImage.src = "images/generate_board_clicked.png";  // Change to your desired loading image
    
    // Call the function to generate the bingo board
    generateBingoBoard();
    
    // After the board is generated, change the image back to the original
    setTimeout(function() {
        buttonImage.src = "images/generate_board.png"; // Change back to the original image
    }, 100); // Adjust the timeout based on how long you want the "loading" image to show (e.g., 1 second)
});

// Initialize the board on page load
window.onload = generateBingoBoard;
