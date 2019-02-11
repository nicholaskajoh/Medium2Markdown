module.exports = {
  getPostSlug(filePath) {
    // extract a post's slug from its file path
    // sample file path: ./input/2017-02-26_Hello-world-1bc5dea68f84.html
    // post slug: hello-world
    let postSlug = filePath.replace('./input/', '').replace('.html', '');
    postSlug = postSlug.replace(/(\d{4})-(\d{1,2})-(\d{1,2})_/, '');
    postSlug = postSlug.split('-');
    postSlug.pop();
    postSlug = postSlug.join('-').toLowerCase().replace(/-+/g, '-');
    return postSlug;
  },
  removeTitleTag(htmlString) {
    return htmlString.replace(/<title([\S\s]*?)>([\S\s]*?)<\/title>/i, '');
  },
  removeStyleTags(htmlString) {
    return htmlString.replace(/<style([\S\s]*?)>([\S\s]*?)<\/style>/ig, '');
  },
}