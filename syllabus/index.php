<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>CIST 1300 - Syllabus</title>
  <meta name="author" content="Alexander Fuchsberger">

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-79943295-1', 'auto');
    ga('send', 'pageview');

  </script>

  <!-- Bootstrap CSS + Theme -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap.theme.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body id='general'>

  <?php include './partials/navbar.html'; ?>

  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <?php
          include './partials/general.html';
          include './partials/updates.html';
          include './partials/schedule.html';
          include './partials/grading.html';
          include './partials/tutorials.html';
        ?>
        <section id='assignments'>
          <h2>Assignments</h2>
          <?php
            include './assignments/cloud9.html';
            include './assignments/codeacademy.html';
            include './assignments/readme.html';
            include './assignments/website_htmlcss.html';
            include './assignments/website_bootstrap.html';
            include './assignments/js_assignment.html';
            include './assignments/game.html';
            include './assignments/survey.html';
          ?>
        </section>
        <?php
          include './partials/quizzes.html';
          include './partials/systems.html';
          include './partials/rules_plagiarism.html';
          include './partials/instructor.html';

          // TODO: organize
          include './modals.html';
        ?>
      </div>
    </div>
  </div>

  <!-- Latest compiled and minified JavaScript -->
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/scripts.js"></script>
</body>
</html>
