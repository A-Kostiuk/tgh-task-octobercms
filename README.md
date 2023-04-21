# TGH task october cms

## Install

### Server
On root directory:
```
composer install
```

Start your server on port 8080 (I use Laragon)

Start MYSQL database on 3306 port with name 'database'

Then run the command:
```
php artisan october:migrate
```

When the process finishes, you can access the backend panel in a browser and create the administrator user profile.

### Theme development
Go to catalog
```
cd .\themes\educational-site\
```
Install dependencies
```
npm install
```
Mix is a configuration layer on top of Webpack, so you only need to execute one of the NPM scripts to run Mix tasks. When you run the dev or production scripts, all your application's CSS and JavaScript sources will be compiled and placed in the application's public directory.

Run all Mix tasks
```
npm run dev 
```
Run all Mix tasks and minify
```
npm run prod
```
Now, each time you update a file, Mix will automatically recompile the file and rebuild your bundle
```
npm run watch
```

## Description

### General
The site is responsive and adapt well to various screen sizes (mobile, tablet, laptop and desktop). The design is clean and minimalistic.
The navigation bar have the following items: Home, Courses, About Us, and Contact Us.
The footer include a copyright notice and links to the site's social media profiles.

### On home page
The hero section contain a background image, a heading, a short description, and a call-to-action button.

### On courses page
There is a list of courses with filters for categories, search functionality and difficulty levels on the courses page.

