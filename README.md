# FacebookSignUp
Sample Project for SignUp a Facebook Account

Technology Used - This project uses Selenium Java(IDE - Eclipse)
This project has been created using Cucumber Framework using Gherkins which follows Behaviour Driven Development

This Project has been created based on 3 Assumptions

Assumption 1: https://www.facebook.com/ has a Signup Page
Assumption 2:User can enter SignUp Information into SignUp Page
Assumption 3: Once User Enters Information and clicks SignUp,user will be navigated to a Page with header "Confirm your email address"

How to Run : Once Entire Project has been copied to Eclipse,Either run the Cucumber Feature File or Runner Class in Eclipse

Cucumber Feature File - src/main/java/Features/NavigationtoFbSignUp.feature

Runner Class - src/test/java/Runner/TestRunner.java

Note : This is a positive TestCase,Incase of extending this to negative scenarios in future,we can reuse the steps until User clicks SignUp in a new Feature File and validate the error messages
