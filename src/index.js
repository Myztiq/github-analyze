const core = require('@actions/core');
const github = require('@actions/github');

const run = async () => {
    // Get octokit
    const gitHubToken = core.getInput('repo-token', { required: true });
    const teams = core.getInput('teams', { required: true });
    const octokit = github.getOctokit(gitHubToken);

    console.log(gitHubToken, teams, octokit)
}

try {
    run();
} catch (error) {
    core.setFailed(error.message);
}
