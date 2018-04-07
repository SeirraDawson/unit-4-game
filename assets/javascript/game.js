    // User sees visuals and reads instructions of the game (HTML / CSS)
    $(document).ready(function(){
        //Declare variables
        // Wins and losses = 0
        var wins = 0;
        var losses = 0;

        //display wins | losses | totalScore on HTML [Do I use .text or .querySelector or .HTML?]
        $("#wins").text("Wins: " + wins); //html or text
        $("#losses").text("Losses: " + losses); //html or text
        $("#targetNumber").text(targetNumber);//html or text

        // totalScore = 0
        var totalScore = 0;
        //display totalScore
        $("#totalScore").text(totalScore); //html or text

        // returns a random number range (min,max)
        function randomNumGenerator(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        // Computer generates targetNumber between 19-120
        var targetNumber = randomNumGenerator(19, 120);
        // Display generated number on HTML
        $("#targetNumber").text(targetNumber);//html or text

        // Each crystal generates a number between 1-12
        var first = randomNumGenerator(1, 12);
        console.log("first crystal # is " + first);
        var second = randomNumGenerator(1, 12);
        console.log("second crystal # is " + second);
        var third = randomNumGenerator(1, 12);
        console.log("third crystal # is " + third);
        var fourth = randomNumGenerator(1, 12);
        console.log("fourth crystal # is " + fourth);

        function check (crystalValue) {
            // totalScore = totalScore + crystalValue;
            totalScore += crystalValue;
            if (totalScore == targetNumber) {
                win();
            }
            else if (totalScore > targetNumber) {
                loss();
            }
        }

        //functions within game -> reset | game won | game lost
        function reset() {
            //new targetNumber
            targetNumber = randomNumGenerator(19, 120);
            console.log("Game's random # = " + targetNumber);
            //display targetNumber
            $("#targetNumber").text(targetNumber);//html or text
            //new crystalNumber
            var first = randomNumGenerator(1, 12);
            var second = randomNumGenerator(1, 12);
            var third = randomNumGenerator(1, 12);
            var fourth = randomNumGenerator(1, 12);
            // totalScore to 0
            totalScore = 0;
            //display totalScore
            $("#totalScore").text(totalScore); //html or text
        }

            // User wins if their total score matches the targetNumber
            // Alert win
            // Restart game [build function]
            // Tally the win or lose from previous game
            // New targetNumber is generated
            // New crystal numbers are generated
            function win () {
                alert ("🗣 You da Best!😉 I appreciate you!👊 \nDJ Khaled");
                wins++;
                $("#wins").text("Wins: " + wins); //html or text
                reset();
            }

        // User loses if their total score goes over the targetNumber
        // Alert loss
        // Restart game
        // Tally the win or lose from previous game
        // New targetNumber is generated
        // New crystal numbers are generated
            function loss () {
                alert ("♫🎶Dust yourself off and try again.🎶♬ \n♭Aalyiah♭");
                losses++;
                $("#losses").text("Losses: " + losses); //html or text
                reset();
            }

        // User selects a crystal -> value of crystal is added to the total score
        reset();
        $("#first").on("click", function() {
            check(first);
            console.log("New total= " + totalScore);
            console.log("What is first crystal # " + first);
            $("#totalScore").text(totalScore);
        })

        $("#second").on("click", function() {
            check(second);
            console.log("New total= " + totalScore)
            console.log("What is second crystal # " + second);
            $("#totalScore").text(totalScore);
        })

        $("#third").on("click", function() {
            check(third);
            console.log("New total= " + totalScore);
            console.log("What is third crystal # " + third);
            $("#totalScore").text(totalScore);
        })

        $("#fourth").on("click", function() {
            check(fourth);
            console.log("New total= " + totalScore);
            console.log("What is fourth crystal #" + fourth);
            $("#totalScore").text(totalScore);
        });
    });














    // //Display all result on HTML
    // document.querySelector("#wins").innerHTML = 'Wins: ' +wins;
    // document.querySelector("#losses").innerHTML = 'Losses: ' +losses;
    // document.querySelector("#targetNumber").innerHTML = 'Number to win: ' +targetNumber;
    // document.querySelector("#totalScore").innerHTML = 'Total Score: ' +totalScore;




