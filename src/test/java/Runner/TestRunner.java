package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C:\\Users\\ADMIN\\workspace\\FacebookSignUp\\src\\main\\java\\Features\\NavigationtoFbSignUp.feature",
		glue = {"StepDefinitions"},
		format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)
public class TestRunner {

}
