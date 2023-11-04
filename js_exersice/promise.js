const posts = [];
const lastActivityTimes = [];

function create1Post() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title: 'Post1' };
      posts.push(post);
      updateLastUserActivityTime().then((updatedTime) => {
        lastActivityTimes.push(updatedTime);
        resolve();
      });
    }, 1000);
  });
}

function create2Post() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title: 'Post2' };
      posts.push(post);
      updateLastUserActivityTime().then((updatedTime) => {
        lastActivityTimes.push(updatedTime);
        resolve();
      });
    }, 1000);
  });
}

function create3Post() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title: 'Post3' };
      posts.push(post);
      updateLastUserActivityTime().then((updatedTime) => {
        lastActivityTimes.push(updatedTime);
        resolve();
      });
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastUserActivity = new Date().toISOString();
      lastActivityTimes.push(lastUserActivity);
      resolve(lastUserActivity);
    }, 1000);
  });
}

function deletedPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        const deletedTime = lastActivityTimes.pop();
        resolve({ post: deletedPost });
      } else {
        reject('ERROR: No posts to delete');
      }
    }, 1000);
  });
}

function listRemainingPosts() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      resolve(posts);
    } else {
      reject('No remaining posts');
    }
  });
}

create1Post()
  .then(() => create2Post())
  .then(() => create3Post())
  .then(() => {
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
      console.log(lastActivityTimes[i]);
    }
  })
  .then(() => deletedPost())
  .then(({ post }) => {
    console.log(`Deleted Post: ${post.title}`);
    return listRemainingPosts();
  })
  .then((remainingPosts) => {
    console.log('Remaining Posts:');
    for (let i = 0; i < remainingPosts.length; i++) {
      console.log(remainingPosts[i].title);
      console.log(lastActivityTimes[i]);
    }
  })
  .catch((error) => {
    console.error(error);
  });
