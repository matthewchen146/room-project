const fs = require('fs');
const path = require('path');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const { v4: uuidv4 } = require('uuid');

async function writeToFile(data, name, dir = 'data') {
    const json = !(data instanceof String) ? JSON.stringify(data) : data;
    const filePath = path.join(__dirname, dir) + `/${name}.json`;
    console.log('generating users to ', filePath);
    await new Promise(resolve => {
        fs.writeFile(filePath, json, resolve);
    });
}

async function generateUserObject(options = {}) {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    const user = {
        id: uuidv4(),
        username: lorem.generateWords(1),
        password: lorem.generateWords(1),
        first_name: lorem.generateWords(1),
        middle_name: lorem.generateWords(1),
        last_name: lorem.generateWords(1),
        email: lorem.generateWords(1) + '@gmail.com',
        phone: '123456789',
        avatar: 'https://picsum.photos/200'
    };
    return user;
}

async function generateUserObjects(options = {}) {
    const users = [];
    const userCount = options.count || 5;
    for (let i = 0; i < userCount; i++) {
        users.push(await generateUserObject(options));
    }
    return users;
}

async function generateRecipeObject(options = {}) {
    const users = options.users || await generateUserObjects({ count: 5 });
    options.users = users;
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    // lorem.generateWords(1);
    // lorem.generateSentences(5);
    // lorem.generateParagraphs(7);
    const recipe = {
        title: lorem.generateSentences(1),
        description: lorem.generateSentences(1),
        thumbnail: 'https://picsum.photos/400',
        author_id: users[Math.floor(Math.random() * users.length)].id,
        collaborators: [],
        body: []
    };

    for (let i = 0; i < Math.random() * 3; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        if (recipe.author_id !== user.id && !recipe.collaborators.find(({ id }) => id === user.id)) {
            recipe.collaborators.push(user.id);
        }
    }
    return recipe;
}

async function generateRecipeObjects(options = {}) {
    const recipes = [];
    const recipeCount = options.count || 5;
    for (let i = 0; i < recipeCount; i++) {
        recipes.push(await generateRecipeObject(options));
    }
    return recipes;
}

const allowedArgs = {
    recipes: {
        type: 'option',
        optionType: 'int',
        default: 10
    },
    users: {
        type: 'option',
        optionType: 'int',
        default: 5
    }
};

async function main() {
    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (!allowedArgs[arg]) {
            console.error('invalid argument', arg);
            return;
        }

        if (!(allowedArgs[arg] instanceof Object)) {
            allowedArgs[arg] = { enabled: false };
        }
        const argData = allowedArgs[arg];
        const type = argData.type;
        switch (type) {
            case 'option':
                argData.enabled = true;
                if (i < arg.length - 1) {
                    i += 1;
                    switch (argData.optionType) {
                        case 'int':
                            argData.value = parseInt(args[i]);
                            break;
                        case 'string':
                        default:
                            argData.value = args[i];
                            break;
                    }
                    continue;
                } else {
                    console.error(`argument ${arg} requires a parameter`);
                    return;
                }
            case 'toggle':
            default:
                argData.enabled = true;
                argData.value = true;
                break;
        }
    }

    const userCount = allowedArgs.users.value || allowedArgs.users.default;
    const users = await generateUserObjects({
        count: userCount
    });
    await writeToFile(users, 'users');

    const recipeCount = allowedArgs.recipes.value || allowedArgs.recipes.default;
    const recipes = await generateRecipeObjects({
        count: recipeCount,
        users
    });
    await writeToFile(recipes, 'recipes');

    console.log('generation finished');
}

main();
