![alt text](src/assets/images/hacktoberfest21_campaign-banner.webp)
# LookMeCoding
We are celebrating Hacktoberfest 2021 with the project where everyone can share a screenshot while coding.

## Rules
- Only screenshot is allowed to upload which is taken by you
- Photo of disturbing subject, politics, nudity, illegal activity or other not related content will be rejected

## App
It is a basic React application that listing information from a js file. Do not worry if you are not familiar with React, you only need to modify an array of objects which detailed below.

## How to contribute

1. Fork this repo to your Github account

2. Clone your fork to your computer

3. Set remote stream with the original repo to keep always updated

   - `git remote add upstream https://github.com/ProjectDock/LookMeCoding.git`
   - `git pull upstream main`

4. Create a branch with your Github username

5. Run `npm install` in your local repo

6. Create a folder with your Github username in `src/CONTRIBUTE_HERE/screenshots/` directory

7. Make a screenshot while you are working on a project in your favourite IDE or text editor

8. Copy the image into `src/CONTRIBUTE_HERE/screenshots/<your_name>` folder

9. Go to the `CONTRIBUTE_HERE` folder and open `content.js`

10. There is an array of objects for every card. Fill out with your name, developer title, image path and Github account link. For the image only need the created folder and image name.

    ```js
    const cards = [
        {
            name: "Project Dock",
            title: "JS Developer",
            image: "PD/pd.png",
            github: "https://github.com/ProjectDock"
        },
    ]
    ```

11. Commit and push the code to your fork

12. Create a pull request to the original repo


> Congratulations! You are now one step closer to getting the Hacktoberfest 2020 swags. You can check your progress at <https://hacktoberfest.digitalocean.com/profile> .

######By contributing you understand that your screenshot will be publicly available
