const core = require('@actions/core');
const github = require('@actions/github');

const extractArray = (str) => {
    return str.split(',').map((item) => {
        return item.trim()
    })
}

const run = async () => {
    // Get octokit
    const gitHubToken = core.getInput('repo-token', { required: true });
    const teams = extractArray(core.getInput('teams', { required: true }));
    const octokit = github.getOctokit(gitHubToken);

    const teamMapping = teams.reduce((accum, team) => {
        const members = extractArray(core.getInput(`team-${team}`, { required: true }));
        accum[team] = members

        return accum
    }, {})

    console.log(teamMapping);
}

try {
    run();
} catch (error) {
    core.setFailed(error.message);
}
