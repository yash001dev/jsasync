const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({title:'Post Three',body:'this is post three'}).then(getPosts);


//Async/Await
async function init(){
    await createPost({title:'Post Three',body:'This is Post Three'});

    getPosts();
}

init();

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );


// Promise.all([promise1, promise2, promise3]).then((value) => console.log(value));
