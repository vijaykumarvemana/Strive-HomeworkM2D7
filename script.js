
        // EX11) Write a function to add a new link into the navbar

        const newNavLink = function(string) {
            const nav = document.querySelector('.nav')
            // const link = document.createElement('a')
            // link.innerText += "new-link"
            // nav.appendChild(link)
            const link =  `<a class="p-2 text-muted" href="#">${string}</a>`
            nav.innerHTML += link
        }
        newNavLink("Italy")

        // EX12) Write a function to change the color of the main title

        const changeTitle = function (){
            const title = document.querySelector('.jumbotron h1')
            title.innerHTML = "Hello Jumbotron!!!!"
            title.style.color = "green"

        }
        changeTitle()
        
        // EX13) Write a function to change the background of the jumbotron
        
        const changeJumbotronbg = function () {
            const jum = document.querySelector(".jumbotron")
            jum.classList.remove('bg-dark')
            jum.classList.add('bg-primary')
            //jum.classList.remove('text-white')
        }
        changeJumbotronbg()

        // EX14) Write a function to remove all the links under "Elsewhere"

        const removeAllLinks = function (){
            const elseWhere = document.querySelector('aside div:nth-child(3) h4 + ol')
            elseWhere.innerHTML = ""
        }
        removeAllLinks()

        // EX15) Write a function to change the column size for heading in jumbotron
        
    
        const colunmChangeOfJumbotron = function () {
            const column = document.querySelector('.jumbotron .col-md-6')
            column.classList.remove('col-md-6')
            column.classList.add('col-md-2')
        }
        colunmChangeOfJumbotron()

        // EX16) Write a function to remove the "Search" magnifying glass icon
        
        const removeSearchIcon = function () {
            const searchIcon = document.querySelector('header > div > div:nth-child(3) a')
            searchIcon.remove('svg')
        }
        removeSearchIcon()

        // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        
        const blogPostTrim = function(){
            const blogPost = document.querySelectorAll('.blog-post p:nth-child(3)')
            // console.log(blogPost)
            // console.log(blogPost[0].innerHTML)
            // const blog = blogPost[0].innerHTML
            // console.log(blog.slice(50))
            for(blog of blogPost){
                console.log(blog.innerHTML)
                blog.innerHTML = blog.innerHTML.slice(50)
                console.log(blogPost)
                //console.log(trim.slice(50))
                // blogPost.trim.slice(50)
                // trim.innerHTML = trim.slice(50)
                // blogPost.innerHTML = result.innerHTML
                
            }
            
        }
        blogPostTrim()

        // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        
        const addBlogPost = function() {
            const btn = document.querySelectorAll('.blog-pagination a')[1]
            btn.classList.remove('disabled')
            btn.removeAttribute('href')
            btn.addEventListener('click', function(){
                const blogPostMain = document.querySelectorAll('.blog-main')[0]
                const div = document.createElement('div')
                const title = document.createElement('h2')
                div.classList.add('blog-post')
                title.classList.add('blog-post-title')
                div.appendChild(title)
                blogPostMain.appendChild('div')
            })
        }
        addBlogPost()



        // EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        const removeBlogPost = function() {
            const btn = document.querySelectorAll('.blog-pagination a')[0]
            btn.removeAttribute('href')
            btn.addEventListener('click', function(){
                const blog = document.querySelectorAll('.blog-post')
                blog[blog.length - 1].remove()
            })
        }
        removeBlogPost()

        // EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

        const authorNameAlert = function () {
            const author = document.querySelectorAll('main .blog-main .blog-post > h2 + p > a')
            console.log(author)
            for(auth of author){
                auth.addEventListener('mouseenter', function(e){
                    alert(e.target.innerHTML)
                })
            }
        }
        authorNameAlert()
        