document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('postForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the traditional way

        // Get form data
        const postTitle = document.getElementById('postTitle').value;
        const postChore = document.getElementById('postChore').value;
        const postImage = document.getElementById('postImage').value || 'https://via.placeholder.com/250'; // Default image if none is provided

        // Create a new post element
        const post = document.createElement('div');
        post.classList.add('post');

        // Post structure
        post.innerHTML = `
            <div class="post-header">
                <img src="images/vivi.jpg" alt="User">
                <div class="user-details">
                    <h3>vivi_oxo</h3>
                    <p>Just now</p>
                </div>
            </div>
            <div class="post-content">
                <p><b>${postTitle}</b><br><i>${postChore}</i></p>
                <img src="${postImage}" alt="Chore Image">
            </div>
            <div class="post-actions">
                <button>Like</button>
                <button>Comment</button>
            </div>
        `;

        // Add the post to the feed
        document.getElementById('feed').prepend(post); // Add the new post to the top of the feed

        // Clear form fields
        document.getElementById('postForm').reset();
    });
});
