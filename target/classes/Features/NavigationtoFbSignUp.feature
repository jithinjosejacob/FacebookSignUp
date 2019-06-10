Feature: Facebook Account SignUp

Scenario Outline: Signup for a facebook account from the fb home page

Given User has already opened the browser window
When Browser is visible to user
Then Enter the url and press enter
And Signup page of facebook should appear
Then Enter "<firstname>" "<lastname>" "<emailaddress>" "<password>" "<gender>" "<dob>" in SignUpform
And I click "Signup"
Then I should see header "Confirm your email address"

Examples:
| firstname | lastname | emailaddress 	         | password 	| gender | dob 		   |
| Durga     | Devi     | durgadevi1228@gmail.com | madiii1#4*99 | Female | 19-Dec-1988 |