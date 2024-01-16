const NewsApi = {
    list: '/news',
    showById: '/news/show/:id',
    showBySlug: '/news/slug/:slug',
    random: '/news/random',
    comments: '/news/:id/comments',
    addComment: '/news/:id/comment',
    removeComment: '/news/:id/comment/:commentId',
}

export default NewsApi;