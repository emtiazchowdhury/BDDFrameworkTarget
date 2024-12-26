package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:/Selenium/BDDFrameworkTarget/src/main/java/features", //the path o the feature file
        glue = {"stepDefinition"},//the path of the step definition files
        plugin = {"pretty", "html:test-output","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},//to generate different types of reporting
        dryRun = false,//to check the mapping is proper between feature file and step definition
        monochrome = false,//display the console output ina proper readable format
        strict = true,//it will check if any step is not define in step definition file
        tags = {"@smokeTest"}
        )

public class TestRunner {


}
