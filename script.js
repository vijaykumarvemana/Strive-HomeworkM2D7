
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
            column.classList.add('col-md-4')
        }
        colunmChangeOfJumbotron()

        // EX16) Write a function to remove the "Search" magnifying glass icon
        // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        // EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        // EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name