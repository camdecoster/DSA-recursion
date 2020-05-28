// Write a recursive function that prints the following organization chart. Your
// output should be as shown below with proper indentation to show the hierarchy.
// You may store the org chart in an object and send that as an input to your
// program.

const organization = [
    "Zuckerberg",
    [
        "Schroepfer",
        [
            "Bosworth",
            ["Steve", "Kyle", "Andra"],
            "Zhao",
            ["Richie", "Sofia", "Jen"],
        ],
        "Schrage",
        [
            "VanDyck",
            ["Sabrina", "Michelle", "Josh"],
            "Swain",
            ["Blanch", "Tom", "Joe"],
        ],
        "Sandberg",
        [
            "Goler",
            ["Eddie", "Julie", "Annie"],
            "Hernandez",
            ["Rowi", "Inga", "Morgan"],
            "Moissinac",
            ["Amy", "Chuck", "Vinni"],
            "Kelley",
            ["Eric", "Ana", "Wes"],
        ],
    ],
];

function orgChart(org, level = 0) {
    if (!Array.isArray(org)) {
        console.log("    ".repeat(level - 1) + org);
        return;
    }
    org.forEach((person) => {
        orgChart(person, level + 1);
    });
}

orgChart(organization);
