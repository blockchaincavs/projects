const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainEl = document.getElementById("main-el");
let htmlPosts = mainEl.innerHTML.toString();

function incrementLikes(id) {

    let postIndex = Number(id);
    let post = posts[postIndex];
    post.likes += 1;

    let likesEl = document.getElementById(`likes-${postIndex}`)
    likesEl.innerHTML = `${post.likes} likes`

}

// Iterate through posts and display the content. Already displayed posts[0]
for (let i = 1; i < posts.length; i++) {
    const post = posts[i]
    htmlPosts += `
        <section class="section-user-post">
            
            <!-- Posts section -->
            <section class="section-1">

                <div class="user">
                    <img class="avatar-el" src="${post.avatar}" alt="${post.name} profile image."/>
                    <p class="name-el">
                        <span class="bold-text block">${post.name}</span> ${post.location}
                    </p>
                </div>

                <img class="post-el" src="${post.post}" alt="Oil painting self portrait of ${post.name}" />

            </section>


            <!-- Likes, Comments, and share section -->
            <section class="section-2">
                
                <div class="buttons">

                    <button class="button-like" id="${i}" onclick="incrementLikes(id)"></button>
                    <button class="button-comment"></button>
                    <button class="button-share"></button>

                </div>

                <p class="bold-text" id="likes-${i}">${post.likes} likes</p>
                <p><span class="bold-text">${post.username}</span> ${post.comment}</p>

            </section>

        </section>
    ` 
}

mainEl.innerHTML = htmlPosts;