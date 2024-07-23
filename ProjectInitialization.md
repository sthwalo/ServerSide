### GitHub SetUp
    - Create and initialize a repository with a Readme.
### Set Up Git on Your Local Machine
    **/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    brew install git (HomeBrew)

    sudo port install git (MacPort)

    git --version (verify)

    git config --global user.name "Your Name" (configure username)
    git config --global user.email "your.
    email@example.com" (configure email)

### Clone Repository 
    git clone https://github.com/yourusername/nodejs-(repo name).git

    Navigate to project directory
    cd nodejs-study-guide

    Organize 
    mkdir Day1 Day2 Day3 Day4 

    Create file 
    cd Day1 touch hello-world.js

    After writing your code you commit with the following steps:

    git add . (This adds your files to the staging area)

    git commit -m "Added Day 1 exercises" (Commit your changes)

    git push origin main (Push changes to remote repository)

### Document your work 
    1.	Update the README:
	   Keep your README.md file updated with descriptions of what you learned and the tasks you completed each day.
	   Use Markdown to format your README.md for better readability.

	2.	Add Comments to Your Code:
	    Add comments to your code to        explain what each part does. This will help others understand your work and also reinforce your own learning.

### Showcase 


### Execution Process 
Locate the files directory (in this case in my node files are located in this folder)
- cd /Users/sthwalonyoni/Documents/backend/ServerSide/Day()
- for files i realised i have to create a JSON file run it first before i run the node file  



### Killing Execution 
Open new terminal and run 
- lsof -i :3000 (The port number must match the server you are currently running on mine in this case is 3000)

From the output copy the Process ID (PID) and run 
- kill -9 (PID)
