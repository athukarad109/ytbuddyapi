import express from 'express';

const router = express.Router();


let ideas = [{
        id: "1657643579405",
        title: "Intro",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tags: ["start", "intro", "more"]
    },
    {
        id: "1657643579235",
        title: "First",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        tags: ["start", "intro", "more"]
    }
];


//Get all ideas
router.get("/", (req, res) => {
    res.json(ideas);
});

//Post a idea
router.post("/", (req, res) => {
    let newId = new Date().getTime().toString();
    let newIdea = {
        id: newId,
        title: req.body.title,
        desc: req.body.desc,
        tags: req.body.tags
    };
    ideas.push(newIdea);
    res.status(200).send(newIdea);
});

//Get idea by id
router.get("/:id", (req, res) => {
    let id = req.params.id;
    let thisIdea = ideas.find((idea) => { return idea.id === id });

    res.json(thisIdea);
});

//Delete idea by id
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    ideas = ideas.filter((idea) => {
        return idea.id !== id;
    });
    res.json("Success");
});

//Update idea
router.patch('/:id', (req, res) => {
    let id = req.params.id;
    let ideaToUpdate = ideas.find((idea) => idea.id === id);
    let { title, desc, tags } = req.body;
    if (title) {
        ideaToUpdate.title = title
    }
    if (desc) {
        ideaToUpdate.desc = desc
    }
    if (tags) {
        ideaToUpdate.tags = tags
    }
    res.status(200).send(`User with id ${id} updates`)
})


export default router;