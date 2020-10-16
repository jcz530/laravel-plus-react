# Laravel + React
### How to add React to an existing Laravel project without using an SPA

This project compliments the tutorial written at https://joeczubiak.com/laravel-plus-react.    
Please read the article for a fuller understanding of this sample project.    

**This project uses the following versions**    
Laravel 8.0    
React 16.13.1    
laravel-mix 5.0.1    

## Running locally
* Download or clone this repo.    
* In terminal, cd into the project directory.    
* Create a .env file by copying the .env.example file.    
`cp .env.example .env`    
* Install composer dependencies.    
`composer install`    
* Generate an app key    
`php artisan key:generate`    
* Serve    
`php artisan serve`    
Now the project will be running on your localhost. http://localhost:8000

## Making changes 
In order for changes to the React files to be reflected in your browser you need to do the following.    
* Install npm dependencies.    
`npm install`    
* Run webpack    
`npm run dev`    
* Refresh browser    

## License
Licensed under the [MIT license](https://opensource.org/licenses/MIT).
