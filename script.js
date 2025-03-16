// Preview Markdown
document.getElementById("preview-btn").addEventListener("click", () => {
  let markdownText = document.getElementById("markdown-input").value;
  document.getElementById("preview").innerHTML = marked.parse(markdownText);
});

// Save to Local Storage
document.getElementById("save-btn").addEventListener("click", () => {
  let postContent = document.getElementById("markdown-input").value;
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  posts.push({ content: postContent, date: new Date().toLocaleString() });
  localStorage.setItem("blogPosts", JSON.stringify(posts));
  alert("Post saved!");
});

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
