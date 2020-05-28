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

function findPath(maze, x, y) {
    if (x + 1 > maze[0].length || y + 1 > maze.length || x < 0 || y < 0) {
        // Out of bounds
        return "";
    }
    if (maze[y][x] === "x") {
        // Position is not part of path
        return "";
    }
    if (maze[y][x] === "p") {
        // Position is part of path already
        return "";
    }
    if (maze[y][x] === "e") {
        // Found the exit
        return true;
    }
    if (maze[y][x] === "*") {
        // Found wall
        return "";
    }
    // Mark current position as part of path
    maze[y][x] = "p";

    // Check up
    result = findPath(maze, x, y - 1);
    if (result) {
        return "U" + (result.toString() == "true" ? "" : result);
    }
    // Check right
    result = findPath(maze, x + 1, y);
    if (result) {
        return "R" + (result.toString() == "true" ? "" : result);
    }
    // Check down
    result = findPath(maze, x, y + 1);
    if (result) {
        return "D" + (result.toString() == "true" ? "" : result);
    }
    // Check left
    result = findPath(maze, x - 1, y);
    if (result) {
        return "L" + (result.toString() == "true" ? "" : result);
    }
    maze[y][x] = "x";
    return "";
}

console.log(findPath(maze, 0, 0));
