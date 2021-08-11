// token: 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

export const octokitMixin = {
    methods: {
        createOctokitClient() {
            return new window.Octokit({
                auth: localStorage.getItem("github-token"),
            });
        }
    },
}