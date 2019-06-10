$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/workspace/FacebookSignUp/src/main/java/Features/NavigationtoFbSignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Account SignUp",
  "description": "",
  "id": "facebook-account-signup",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has already opened the browser window",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is visible to user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the url and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Signup page of facebook should appear",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cemailaddress\u003e\" \"\u003cpassword\u003e\" \"\u003cgender\u003e\" \"\u003cdob\u003e\" in SignUpform",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"Signup\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see header \"Confirm your email address\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "emailaddress",
        "password",
        "gender",
        "dob"
      ],
      "line": 14,
      "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;1"
    },
    {
      "cells": [
        "Durga",
        "Devi",
        "durgadevi1228@gmail.com",
        "madiii1#4*99",
        "Female",
        "19-Dec-1988"
      ],
      "line": 15,
      "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has already opened the browser window",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is visible to user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the url and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Signup page of facebook should appear",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"Durga\" \"Devi\" \"durgadevi1228@gmail.com\" \"madiii1#4*99\" \"Female\" \"19-Dec-1988\" in SignUpform",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"Signup\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see header \"Confirm your email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationtoFbSignUp.user_has_already_opened_the_browser_window()"
});
formatter.result({
  "duration": 7984601700,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.browser_is_visible_to_user()"
});
formatter.result({
  "duration": 1153766700,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.enter_the_url_and_press_enter()"
});
formatter.result({
  "duration": 6123488700,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.signup_page_of_facebook_should_appear()"
});
formatter.result({
  "duration": 10565056400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Durga",
      "offset": 7
    },
    {
      "val": "Devi",
      "offset": 15
    },
    {
      "val": "durgadevi1228@gmail.com",
      "offset": 22
    },
    {
      "val": "madiii1#4*99",
      "offset": 48
    },
    {
      "val": "Female",
      "offset": 63
    },
    {
      "val": "19-Dec-1988",
      "offset": 72
    }
  ],
  "location": "NavigationtoFbSignUp.enter_in_SignUpform(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15231501400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signup",
      "offset": 9
    }
  ],
  "location": "NavigationtoFbSignUp.i_click(String)"
});
formatter.result({
  "duration": 160369900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm your email address",
      "offset": 21
    }
  ],
  "location": "NavigationtoFbSignUp.i_should_see_header(String)"
});
formatter.result({
  "duration": 18679100000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //h2[contains(text(),\u0027Confirm your email address\u0027)] (tried for 15 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat StepDefinitions.NavigationtoFbSignUp.i_should_see_header(NavigationtoFbSignUp.java:116)\r\n\tat ✽.Then I should see header \"Confirm your email address\"(C:/Users/ADMIN/workspace/FacebookSignUp/src/main/java/Features/NavigationtoFbSignUp.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //h2[contains(text(),\u0027Confirm your email address\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-HILMFAQ\u0027, ip: \u0027172.23.92.161\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat StepDefinitions.NavigationtoFbSignUp.i_should_see_header(NavigationtoFbSignUp.java:116)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});