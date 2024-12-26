$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Target Homepage Page",
  "description": "",
  "id": "target-homepage-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to verify pagetitle",
  "description": "",
  "id": "target-homepage-page;user-should-be-able-to-verify-pagetitle",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Target Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User capture the pagetitle",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to verify the correct pagetitle",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User should be able to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageStepDefinition.user_navigates_to_Target_Home_page()"
});
formatter.result({
  "duration": 4085359900,
  "status": "passed"
});
formatter.match({
  "location": "homepageStepDefinition.User_capture_the_pagetitle()"
});
formatter.result({
  "duration": 445443500,
  "status": "passed"
});
formatter.match({
  "location": "homepageStepDefinition.user_should_be_able_to_verify_the_correct_pagetitle()"
});
formatter.result({
  "duration": 1334400,
  "status": "passed"
});
formatter.match({
  "location": "homepageStepDefinition.userShouldBeAbleToCloseTheBrowser()"
});
formatter.result({
  "duration": 305717100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should be able to search items",
  "description": "",
  "id": "target-homepage-page;user-should-be-able-to-search-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User navigates to Target Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enter \"coffe\" and click search button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should be able to see a list of items",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should be able to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageStepDefinition.user_navigates_to_Target_Home_page()"
});
formatter.result({
  "duration": 3845447100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coffe",
      "offset": 12
    }
  ],
  "location": "homepageStepDefinition.userEnterItemNameAndClickSearchButton(String)"
});
formatter.result({
  "duration": 1439863800,
  "status": "passed"
});
formatter.match({
  "location": "homepageStepDefinition.userShouldBeAbleToSeeAListOfItems()"
});
formatter.result({
  "duration": 1215339100,
  "status": "passed"
});
formatter.match({
  "location": "homepageStepDefinition.userShouldBeAbleToCloseTheBrowser()"
});
formatter.result({
  "duration": 309731400,
  "status": "passed"
});
});