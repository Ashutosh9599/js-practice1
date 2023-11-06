const posts = [];
const lastActivityTimes = [];

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createPost(title) {
  await delay(1000);
  const post = { title };
  posts.push(post);
  const updatedTime = await updateLastUserActivityTime();
  lastActivityTimes.push(updatedTime);
}

async function updateLastUserActivityTime() {
  await delay(1000);
  const lastUserActivity = new Date().toISOString();
  lastActivityTimes.push(lastUserActivity);
  return lastUserActivity;
}

async function deletePost() {
  await delay(1000);
  if (posts.length > 0) {
    const deletedPost = posts.pop();
    const deletedTime = lastActivityTimes.pop();
    return { post: deletedPost, time: deletedTime };
  } else {
    throw new Error('ERROR: No posts to delete');
  }
}

async function listRemainingPosts() {
  if (posts.length > 0) {
    return posts;
  } else {
    throw new Error('No remaining posts');
  }
}

async function main() {
  try {
    await createPost('Post1');
    await createPost('Post2');
    await createPost('Post3');

    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
      console.log(lastActivityTimes[i]);
    }

    const deleted = await deletePost();
    console.log(`Deleted Post: ${deleted.post.title}`);

    const remainingPosts = await listRemainingPosts();
    console.log('Remaining Posts:');
    for (let i = 0; i < remainingPosts.length; i++) {
      console.log(remainingPosts[i].title);
      console.log(lastActivityTimes[i]);
    }
  } catch (error) {
    console.error(error.message);
  }
}

main();
