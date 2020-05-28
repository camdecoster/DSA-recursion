// You have entered a Maze and need to find your way out of it. There are more than
// one possible paths through the Maze to the single exit point. Write a recursive
// function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

let mySmallMaze = [
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
];

let maze = [
    [" ", " ", " ", "*", " ", " ", " "],
    ["*", "*", " ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", "*", "*", "*", " "],
    [" ", " ", " ", " ", " ", " ", "e"],
];

// Use the above maze and modify your solution so it finds All the possible exit
// paths through the Maze. To find all possible exit paths through the maze, think
// about how many places you can move at each turn. Possibly up, down, left or
// right ?

// Notice that this maze has 3 exits paths. Your recursive function should print
// all three of the paths with the proper directions. For example, given the maze
// above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let row = "";
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] === " " ? (row += "=") : (row += arr[i][j]);
        }
        console.log(row);
    }
}

function findPath(maze, x, y, path = "") {
    let newPath;
    // printArray(maze);
    // console.log(`(${x}, ${y})`);
    // console.log(path);

    if (x + 1 > maze[0].length || y + 1 > maze.length || x < 0 || y < 0) {
        // Out of bounds
        // console.log("Out of bounds");
        return path.slice(0, -1);
    }
    if (maze[y][x] === "x") {
        // Position is not part of path
        // console.log("Position is not part of path");
        return path.slice(0, -1);
    }
    if (maze[y][x] === "p") {
        // Position is part of path already
        // console.log("Position is part of path already");
        return path.slice(0, -1);
    }
    if (maze[y][x] === "e") {
        // Found the exit
        console.log("Path to the exit:", path);
        return path.slice(0, -1);
    }
    if (maze[y][x] === "*") {
        // Found wall
        // console.log("Found wall");
        return path.slice(0, -1);
    }

    // Mark current position as part of path
    maze[y][x] = "p";

    // Check up
    newPath = findPath(maze, x, y - 1, path + "U");
    if (newPath !== path) {
        return newPath;
    }
    // Check right
    newPath = findPath(maze, x + 1, y, path + "R");
    if (newPath !== path) {
        return newPath;
    }
    // Check down
    newPath = findPath(maze, x, y + 1, path + "D");
    if (newPath !== path) {
        return newPath;
    }
    // Check left
    newPath = findPath(maze, x - 1, y, path + "L");
    if (newPath !== path) {
        return newPath;
    }
    maze[y][x] = "=";
    return path.slice(0, -1);
}

findPath(maze, 0, 0);
