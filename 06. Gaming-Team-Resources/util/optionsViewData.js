function optionsViewData(difficultyLevel) {
    // const titles = [
    //     `Very Easy`,
    //     `Easy`,
    //     `Medium (Standard 3x3)`,
    //     `Intermediate`,
    //     `Expert`,
    //     `Hardcore`, 
    // ];
    const titles = [
        "-------",
        "PC",
        "Nintendo",
        "PS4",
        "PS5",
        "XBOX" 
    ];

    const options = titles.map((title, index) => ({
        title: `${index + 1} - ${title}`,
        value: index + 1,
        selected: Number(difficultyLevel) === index + 1 ? 'selected' : '',
    }));

    return options;
}

module.exports = {
    optionsViewData,
};