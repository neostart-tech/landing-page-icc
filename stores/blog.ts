const useBlogStore = defineStore("blog", {
    state: () => ({
        posts: [] as any[],

    }),
    actions: {
        async fetchPosts() {
            try {
                const response = await axios.get("/api/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }

                this.posts = response.data;
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        },
    },
});
