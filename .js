<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title>FoodJunkie</title>
    
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">
  </head>
  
  <body>
      
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">FoodJunkie</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    
    
    <!--<div class="container-fluid" id="wrapper">-->
    <div role="main" class="container-fluid" id="main" style="display: none;">
        <div class="jumbotron" id="brand-header">
            <img src="Logo.png" class="logo img-fluid">
        </div>
        
        <div class="row">
            <div class="col-sm-12 text-center">
                <p> Select your preferred cuisine, budget, and meal type to get resturaunt suggestions!</p>
            </div>
        </div>
        
        
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <button type="button" class="btn" id="hungrybutton" >I'm Hungry</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="chooser" style="display: none;">
        <div id="chooser-wrapper">
            <!--
            <div class="col-md-6 text-center">
                <h1>What city are you in?</h1>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle disabled" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bloomington/Normal, IL </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Bloomington/Normal, IL</a>
                    </div>
                </div>
            </div>
        -->
        
            <div class="col-md-6 text-center align-center">
                <h1>What is your price range?</h1>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary price">$</button>
                    <button type="button" class="btn btn-secondary price">$$</button>
                    <button type="button" class="btn btn-secondary price">$$$</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid" id="preference" style="display: none;">
        <div id="preference-wrapper">
            <div class="col-md-12 text-center">
                <h1>What is your meal preference? </h1>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary meal">Breakfast</button>
                    <button type="button" class="btn btn-secondary meal">Lunch</button>
                    <button type="button" class="btn btn-secondary meal">Dinner</button>
                    <button type="button" class="btn btn-secondary meal">Desert</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid" id="cuisines" style="display: none;">
        <div id="cuisine-wrapper">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1> Type of Cuisine: </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 text-center">
                <input data-ex="mexican" type="checkbox">Mexican<br>
                <input data-ex="bars" type="checkbox">Bars<br>
                <input data-ex="coffee" type="checkbox">Coffee<br>
                <input data-ex="desert" type="checkbox">Deserts<br>
                <input data-ex="boujee" type="checkbox">Boujee<br>
            </div>
            <div class="col-md-6 text-center">
                <input data-ex="fast food" type="checkbox">Fast Food<br>
                <input data-ex="asain" type="checkbox">Asian<br>
                <input data-ex="italian" type="checkbox">Italian<br>
                <input data-ex="american"type="checkbox">American<br>
                <input data-ex="pizza" type="checkbox">Pizza<br>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="button" class="btn submit">Submit</button>
            </div>
        </div>
        </div>
    </div>
   
    <div class="container-fluid" id="result" style="display: none;">
        <div id="result-wrapper">
            <div class="col-md-12 text-center">
                <p id="result-text"></p>
            </div>
        </div>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="index.js"></script>
  </body>
</html>
